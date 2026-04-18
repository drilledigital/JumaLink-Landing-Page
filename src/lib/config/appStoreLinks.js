/** Google Play listing */
export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.jumalink.app";

/** Public TestFlight beta — replace via env when the App Store listing is live */
const DEFAULT_APP_STORE_URL =
  "https://testflight.apple.com/join/4w3MydSW";

/**
 * Apple install link (TestFlight beta by default).
 * Set `PUBLIC_APP_STORE_URL` in `.env` or Vercel to override, e.g. a live App Store URL.
 */
export const APP_STORE_URL = (() => {
  const env = import.meta.env.PUBLIC_APP_STORE_URL;
  if (typeof env === "string" && env.trim()) return env.trim();
  return DEFAULT_APP_STORE_URL;
})();
