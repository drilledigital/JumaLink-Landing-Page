<script>
  import { onMount } from "svelte";
  import { base } from "$app/paths";
  import {
    PLAY_STORE_URL,
    APP_STORE_URL,
  } from "$lib/config/appStoreLinks.js";
  import { getStoreRedirectKind } from "$lib/utils/storeRedirect.js";

  let status = $state("Redirecting…");

  onMount(() => {
    const kind = getStoreRedirectKind(navigator.userAgent, {
      maxTouchPoints: navigator.maxTouchPoints,
    });

    if (kind === "home") {
      status = "Taking you to the home page…";
      window.location.replace(`${base}/`);
      return;
    }

    if (kind === "play") {
      status = "Opening Google Play…";
      window.location.replace(PLAY_STORE_URL);
      return;
    }

    // appstore
    if (APP_STORE_URL) {
      status = "Opening the App Store…";
      window.location.replace(APP_STORE_URL);
      return;
    }

    status = "Taking you to the home page…";
    window.location.replace(`${base}/`);
  });
</script>

<svelte:head>
  <title>Get the app — JumaLink</title>
  <meta name="robots" content="noindex, nofollow" />
</svelte:head>

<div class="app-store-fallback" role="status" aria-live="polite">
  <p>{status}</p>
  <noscript>
    <p>
      JavaScript is required to send you to the right store. You can open
      <a href={PLAY_STORE_URL}>Google Play</a>
      {#if APP_STORE_URL}
        or <a href={APP_STORE_URL}>the App Store</a>
      {/if}
      , or <a href="{base}/">return home</a>.
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
