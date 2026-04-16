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
