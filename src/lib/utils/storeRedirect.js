/**
 * Decide where /app-store should send the user based on User-Agent (and optional touch info).
 * @param {string} userAgent
 * @param {{ maxTouchPoints?: number }} [hints] — pass `navigator.maxTouchPoints` in the browser for iPadOS (desktop-class UA).
 * @returns {'play' | 'appstore' | 'home'}
 */
export function getStoreRedirectKind(userAgent, hints = {}) {
  const ua = userAgent || "";
  const touch = hints.maxTouchPoints ?? 0;

  // iPadOS 13+ Safari often reports as Macintosh + touch
  if (/Macintosh/i.test(ua) && touch > 1) {
    return "appstore";
  }

  // iPhone / iPod / iPad (classic UA)
  if (/iPhone|iPod|iPad/i.test(ua)) {
    return "appstore";
  }

  // Android phones & tablets
  if (/Android/i.test(ua)) {
    return "play";
  }

  // Desktop / laptop and other non-mobile UAs
  return "home";
}

/**
 * @param {'play' | 'appstore' | 'home'} kind
 * @param {{ playStoreUrl: string; appStoreUrl: string; homeUrl: string }} urls
 */
export function getStoreRedirectTarget(kind, urls) {
  if (kind === "home") return urls.homeUrl;
  if (kind === "play") return urls.playStoreUrl;
  return urls.appStoreUrl;
}

/**
 * Synchronous snippet for /app-store — runs as soon as the parser executes it (before Svelte hydrates).
 * Logic must match {@link getStoreRedirectKind}.
 * @param {{ playStoreUrl: string; appStoreUrl: string; homeUrl: string }} urls
 * @returns {string} JavaScript source (safe to inject via JSON.stringify boundaries on URLs only)
 */
export function buildAppStoreImmediateRedirectScript(urls) {
  const p = JSON.stringify(urls.playStoreUrl);
  const a = JSON.stringify(urls.appStoreUrl);
  const h = JSON.stringify(urls.homeUrl);
  return `(function(){try{var ua=navigator.userAgent||"";var t=typeof navigator.maxTouchPoints==="number"?navigator.maxTouchPoints:0;var p=${p},a=${a},h=${h},k;if(/Macintosh/i.test(ua)&&t>1)k="s";else if(/iPhone|iPod|iPad/i.test(ua))k="s";else if(/Android/i.test(ua))k="p";else k="h";location.replace(k==="h"?h:k==="p"?p:a);}catch(e){}})();`;
}
