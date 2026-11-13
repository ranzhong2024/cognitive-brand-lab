export type Lang = 'zh' | 'en';

export function getEssaySlug(essay: { id: string }): string {
  return essay.id.replace(/^en\//, '');
}

/**
 * Strip trailing slash except root '/' for uniform comparison.
 */
function normalizePath(path: string): string {
  if (!path || path === '/') return '/';
  return path.endsWith('/') && path.length > 1 ? path.slice(0, -1) : path;
}

/**
 * Convert a route path between Chinese default ('/') and English ('/en/').
 */
export function getLocalizedPath(path: string, lang: Lang): string {
  const [cleanPath, hash] = path.split('#');
  const norm = normalizePath(cleanPath || '/');
  const stripped = norm === '/en' ? '/' : norm.startsWith('/en/') ? norm.slice(3) : norm;

  const finalPath =
    lang === 'en'
      ? stripped === '/'
        ? '/en/'
        : `/en${stripped}/`
      : stripped === '/'
        ? '/'
        : `${stripped}/`;

  return hash ? `${finalPath}#${hash}` : finalPath;
}

export function getAlternateUrls(pathname: string, siteUrl = 'https://ranbrandos.com') {
  const zhPath = getLocalizedPath(pathname, 'zh');
  const enPath = getLocalizedPath(pathname, 'en');
  return {
    zhPath,
    enPath,
    zhUrl: new URL(zhPath, siteUrl).toString(),
    enUrl: new URL(enPath, siteUrl).toString(),
  };
}
