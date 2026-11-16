export type Lang = 'zh' | 'en';

export const MODULE_ORDER: Record<string, number> = {
  BrandOS: 0,
  M1: 1,
  M2: 2,
  M3: 3,
  M4: 4,
  M5: 5,
  M6: 6,
  Dispatch: 7,
};

export function getModuleRank(mod: string): number {
  return MODULE_ORDER[mod] ?? 99;
}

export function sortEssaysByModule<T extends { data: { module: string; pubDate: Date } }>(
  essays: T[]
): T[] {
  return [...essays].sort((a, b) => {
    const rankDiff = getModuleRank(a.data.module) - getModuleRank(b.data.module);
    if (rankDiff !== 0) return rankDiff;
    return new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime();
  });
}

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
