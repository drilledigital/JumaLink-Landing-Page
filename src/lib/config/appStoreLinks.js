/** Google Play listing */
export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.jumalink.app";

/**
 * Apple App Store URL — set `PUBLIC_APP_STORE_URL` in `.env` when the iOS app is live, e.g.
 * PUBLIC_APP_STORE_URL=https://apps.apple.com/app/id123456789
 */
export const APP_STORE_URL =
  typeof import.meta.env.PUBLIC_APP_STORE_URL === "string"
    ? import.meta.env.PUBLIC_APP_STORE_URL.trim() || null
    : null;
