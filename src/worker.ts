import { getLocalizedPath, type Lang } from './utils/i18n';

interface AssetsBinding {
  fetch(input: Request | string, init?: RequestInit): Promise<Response>;
}

export interface WorkerEnv {
  ASSETS: AssetsBinding;
}

interface CfRequestProperties {
  country?: string;
}

export type WorkerRequest = Request & { cf?: CfRequestProperties };

export const LANG_COOKIE_NAME = 'ranbrandos_lang';
const COOKIE_MAX_AGE_SECONDS = 31536000; // 1 year

const STATIC_PREFIXES = ['/_astro/', '/images/', '/logo/', '/cdn-cgi/'];

/**
 * Search engine crawlers, AI answer engines, and link previewers must receive
 * 200 OK on the exact URL requested so both ZH and EN pages stay indexed.
 */
const CRAWLER_UA_PATTERN =
  /bot\b|crawler|spider|slurp|archiver|bingpreview|googlebot|google-inspectiontool|googleother|google-extended|adsbot-google|mediapartners-google|gptbot|oai-searchbot|chatgpt-user|claudebot|claude-web|anthropic-ai|perplexitybot|perplexity-user|applebot|bytespider|baiduspider|bingbot|yandex|duckduckbot|petalbot|semrushbot|ahrefsbot|mj12bot|dotbot|ccbot|cohere-ai|meta-externalagent|amazonbot|youbot|facebookexternalhit|facebot|twitterbot|linkedinbot|slackbot|discordbot|whatsapp|telegrambot|lighthouse|pagespeed|gtmetrix/i;

export function isCrawlerRequest(request: Request): boolean {
  const ua = request.headers.get('user-agent') || '';
  return CRAWLER_UA_PATTERN.test(ua);
}

export function isHtmlPageRequest(request: Request, pathname: string): boolean {
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    return false;
  }

  for (const prefix of STATIC_PREFIXES) {
    if (pathname.startsWith(prefix)) {
      return false;
    }
  }

  const lastSegment = pathname.split('/').pop() || '';
  if (/\.[a-z0-9]+$/i.test(lastSegment) && !/\.html?$/i.test(lastSegment)) {
    return false;
  }

  const fetchDest = request.headers.get('sec-fetch-dest');
  if (fetchDest && fetchDest !== 'document' && fetchDest !== 'iframe') {
    return false;
  }

  return true;
}

/**
 * Normalize `/index.html` and `*.html` paths to canonical Astro directory URLs.
 */
export function normalizeHtmlPath(pathname: string): string {
  const collapsed = (pathname || '/').replace(/\/{2,}/g, '/');
  if (collapsed === '/index.html' || collapsed === '/index.htm') {
    return '/';
  }
  const withoutIndex = collapsed.replace(/\/index\.html?$/i, '/');
  const withoutHtml = withoutIndex.replace(/\.html?$/i, '');
  if (!withoutHtml || withoutHtml === '/') return '/';
  return withoutHtml.endsWith('/') ? withoutHtml : `${withoutHtml}/`;
}

export function getRouteLang(normalizedPath: string): Lang {
  return normalizedPath === '/en' || normalizedPath.startsWith('/en/') ? 'en' : 'zh';
}

export function parseLangCookie(cookieHeader: string | null): Lang | null {
  if (!cookieHeader) return null;
  for (const part of cookieHeader.split(';')) {
    const eqIndex = part.indexOf('=');
    if (eqIndex === -1) continue;
    const name = part.slice(0, eqIndex).trim();
    if (name !== LANG_COOKIE_NAME) continue;
    const rawValue = part.slice(eqIndex + 1).trim();
    if (rawValue === 'zh' || rawValue === 'en') {
      return rawValue;
    }
  }
  return null;
}

export function resolvePreferredLang(
  cookieLang: Lang | null,
  countryCode: string | undefined
): Lang | null {
  if (cookieLang) {
    return cookieLang;
  }
  const country = typeof countryCode === 'string' ? countryCode.trim().toUpperCase() : '';
  if (!/^[A-Z]{2}$/.test(country) || country === 'XX') {
    return null;
  }
  // Only Mainland China (CN) defaults to Simplified Chinese; all overseas regions default to English.
  return country === 'CN' ? 'zh' : 'en';
}

function buildCookieHeader(lang: Lang, protocol: string): string {
  const secureFlag = protocol === 'https:' ? '; Secure' : '';
  return `${LANG_COOKIE_NAME}=${lang}; Path=/; Max-Age=${COOKIE_MAX_AGE_SECONDS}; SameSite=Lax${secureFlag}`;
}

function createRedirectResponse(location: string, setCookie?: string): Response {
  const headers = new Headers({
    Location: location,
    'Cache-Control': 'private, no-store, max-age=0',
    Vary: 'CF-IPCountry, Cookie',
  });
  if (setCookie) {
    headers.set('Set-Cookie', setCookie);
  }
  return new Response(null, { status: 302, headers });
}

async function targetRouteExists(env: WorkerEnv, origin: string, targetPath: string): Promise<boolean> {
  const probeUrl = new URL(targetPath, origin).toString();
  const res = await env.ASSETS.fetch(new Request(probeUrl, { method: 'HEAD' }));
  return res.status >= 200 && res.status < 300;
}

export async function handleGeoLanguageRequest(
  request: WorkerRequest,
  env: WorkerEnv
): Promise<Response> {
  const url = new URL(request.url);

  if (!isHtmlPageRequest(request, url.pathname) || isCrawlerRequest(request)) {
    return env.ASSETS.fetch(request);
  }

  const normalizedPath = normalizeHtmlPath(url.pathname);
  const explicitParam = url.searchParams.get('lang');

  if (explicitParam === 'zh' || explicitParam === 'en') {
    const targetUrl = new URL(url.toString());
    targetUrl.searchParams.delete('lang');
    const candidatePath = getLocalizedPath(normalizedPath, explicitParam);
    targetUrl.pathname = (await targetRouteExists(env, url.origin, candidatePath))
      ? candidatePath
      : normalizedPath;
    return createRedirectResponse(
      targetUrl.toString(),
      buildCookieHeader(explicitParam, url.protocol)
    );
  }

  const cookieLang = parseLangCookie(request.headers.get('cookie'));
  const preferredLang = resolvePreferredLang(cookieLang, request.cf?.country);

  if (!preferredLang) {
    return env.ASSETS.fetch(request);
  }

  const currentLang = getRouteLang(normalizedPath);
  if (preferredLang === currentLang) {
    return env.ASSETS.fetch(request);
  }

  const targetPath = getLocalizedPath(normalizedPath, preferredLang);
  if (targetPath === url.pathname || !(await targetRouteExists(env, url.origin, targetPath))) {
    return env.ASSETS.fetch(request);
  }

  const targetUrl = new URL(url.toString());
  targetUrl.pathname = targetPath;
  return createRedirectResponse(targetUrl.toString());
}

export default {
  async fetch(request: WorkerRequest, env: WorkerEnv): Promise<Response> {
    return handleGeoLanguageRequest(request, env);
  },
};
