/**
 * Prefixes a site-absolute path ("/img/products/x.png") with the deploy base,
 * so the site works both at "/" (local dev, custom domain) and under a
 * sub-folder such as GitHub Pages ("/repo-name/").
 */
export function withBase<T extends string | undefined>(path: T): T {
  if (typeof path !== "string" || !path.startsWith("/") || path.startsWith("//")) return path;
  const base = import.meta.env.BASE_URL || "/";
  if (base === "/" || path.startsWith(base)) return path;
  return (base.replace(/\/$/, "") + path) as T;
}
