/**
 * Referral tracking utility.
 *
 * Reads the `ref` query-parameter from the current URL and persists it in
 * `sessionStorage` so it survives in-page navigation.  The value is then
 * pushed to Google Analytics (as a custom event parameter) and Microsoft
 * Clarity (as a custom tag) so you can segment sessions / conversions by
 * referral source.
 *
 * Typical usage in links you share:
 *   https://jumalink.com?ref=play-store
 *   https://jumalink.com?ref=app-store
 *   https://jumalink.com?ref=instagram
 *   https://jumalink.com?ref=facebook
 *   https://jumalink.com/app-store?ref=qr-flyer
 */

const STORAGE_KEY = "juma_ref";

/**
 * Extract the `ref` param from the current URL and stash it in sessionStorage.
 * If a value already exists in storage (from an earlier page in this session)
 * it will NOT be overwritten — first touch wins.
 *
 * @returns {string | null} The active referral tag for this session.
 */
export function captureReferral() {
  if (typeof window === "undefined") return null;

  const url = new URL(window.location.href);
  const param = url.searchParams.get("ref");

  if (param) {
    // First-touch attribution: don't overwrite an existing ref
    if (!sessionStorage.getItem(STORAGE_KEY)) {
      sessionStorage.setItem(STORAGE_KEY, param);
    }
  }

  return sessionStorage.getItem(STORAGE_KEY);
}

/**
 * Return the referral tag stored earlier by `captureReferral`, or null.
 * Safe to call on the server (returns null).
 *
 * @returns {string | null}
 */
export function getReferral() {
  if (typeof window === "undefined") return null;
  return sessionStorage.getItem(STORAGE_KEY);
}

/**
 * Push the referral tag to Google Analytics and Microsoft Clarity.
 * Call this *after* analytics scripts have been injected (i.e. after cookie
 * consent is granted).
 *
 * GA:      Sets `ref_source` as a user-scoped property and fires a
 *          `referral_captured` event.
 * Clarity: Sets a `ref` custom tag so it shows up in the Clarity dashboard
 *          filters.
 *
 * @param {string} ref — the referral tag value
 */
export function pushReferralToAnalytics(ref) {
  if (!ref) return;

  // Google Analytics (gtag)
  if (typeof window.gtag === "function") {
    window.gtag("set", "user_properties", { ref_source: ref });
    window.gtag("event", "referral_captured", { ref_source: ref });
  }

  // Microsoft Clarity
  if (typeof window.clarity === "function") {
    window.clarity("set", "ref", ref);
  }
}

/**
 * Append the current `ref` value to a store URL as a UTM / query param.
 * - For Google Play URLs → appends `&utm_source=<ref>` (Play Console recognises this).
 * - For all other URLs   → appends `&ref=<ref>`.
 *
 * Returns the original URL unchanged if there is no active referral.
 *
 * @param {string} storeUrl
 * @returns {string}
 */
export function tagStoreUrl(storeUrl) {
  const ref = getReferral();
  if (!ref) return storeUrl;

  try {
    const url = new URL(storeUrl);

    if (url.hostname.includes("play.google.com")) {
      // Google Play Console tracks utm_source in the acquisition reports
      if (!url.searchParams.has("utm_source")) {
        url.searchParams.set("utm_source", ref);
        url.searchParams.set("utm_medium", "landing_page");
        url.searchParams.set("utm_campaign", "referral");
      }
    } else {
      // TestFlight / App Store — just pass `ref` so we can see it in analytics
      if (!url.searchParams.has("ref")) {
        url.searchParams.set("ref", ref);
      }
    }

    return url.toString();
  } catch {
    return storeUrl;
  }
}
