<script>
  import { onMount } from "svelte";
  import { base } from "$app/paths";
  import {
    PLAY_STORE_URL,
    APP_STORE_URL,
  } from "$lib/config/appStoreLinks.js";
  import {
    getStoreRedirectKind,
    getStoreRedirectTarget,
    buildAppStoreImmediateRedirectScript,
  } from "$lib/utils/storeRedirect.js";

  const homeUrl = `${base}/`;

  const redirectUrls = {
    playStoreUrl: PLAY_STORE_URL,
    appStoreUrl: APP_STORE_URL,
    homeUrl,
  };

  /** Runs in head before hydration — important for QR → Safari cold starts */
  const immediateRedirectScript = buildAppStoreImmediateRedirectScript(
    redirectUrls,
  );
  const immediateRedirectMarkup =
    `<script type="text/javascript">${immediateRedirectScript}<\/script>`;

  const appleDestinationLabel = APP_STORE_URL.includes("testflight.apple.com")
    ? "Apple TestFlight"
    : "the App Store";

  let status = $state("Redirecting…");

  onMount(() => {
    const kind = getStoreRedirectKind(navigator.userAgent, {
      maxTouchPoints: navigator.maxTouchPoints,
    });
    const target = getStoreRedirectTarget(kind, redirectUrls);

    if (kind === "home") {
      status = "Taking you to the home page…";
    } else if (kind === "play") {
      status = "Opening Google Play…";
    } else {
      status =
        appleDestinationLabel === "Apple TestFlight"
          ? "Opening Apple TestFlight…"
          : "Opening the App Store…";
    }

    window.location.replace(target);
  });
</script>

<svelte:head>
  <title>Get the app — JumaLink</title>
  <meta name="robots" content="noindex, nofollow" />
  {@html immediateRedirectMarkup}
</svelte:head>

<div class="app-store-fallback" role="status" aria-live="polite">
  <p>{status}</p>
  <noscript>
    <p>
      Choose your store (device detection needs JavaScript):
      <a href={PLAY_STORE_URL}>Google Play</a>
      ·
      <a href={APP_STORE_URL}>{appleDestinationLabel}</a>
      ·
      <a href={homeUrl}>Home</a>
    </p>
  </noscript>
</div>

<style>
  .app-store-fallback {
    min-height: 40vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--space-xl);
    font-family: inherit;
    color: var(--text-secondary);
    text-align: center;
  }

  .app-store-fallback p {
    margin: 0;
    font-size: var(--fs-base);
  }

  .app-store-fallback a {
    color: var(--green-primary);
  }
</style>
