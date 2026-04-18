<script>
  import { onMount, tick } from "svelte";
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

  const storeOnlyUrls = {
    playStoreUrl: PLAY_STORE_URL,
    appStoreUrl: APP_STORE_URL,
  };

  /** Mobile/tablet only — desktop waits for the dialog in this page */
  const immediateRedirectScript =
    buildAppStoreImmediateRedirectScript(storeOnlyUrls);
  const immediateRedirectMarkup =
    `<script type="text/javascript">${immediateRedirectScript}<\/script>`;

  const appleDestinationLabel = APP_STORE_URL.includes("testflight.apple.com")
    ? "Apple TestFlight"
    : "the App Store";

  let status = $state("Checking your device…");
  /** @type {HTMLDialogElement | null} */
  let phoneDialog = $state(null);
  let showPhonePrompt = $state(false);

  onMount(async () => {
    const kind = getStoreRedirectKind(navigator.userAgent, {
      maxTouchPoints: navigator.maxTouchPoints,
    });

    if (kind === "home") {
      status = "";
      showPhonePrompt = true;
      await tick();
      phoneDialog?.showModal();
      return;
    }

    if (kind === "play") {
      status = "Opening Google Play…";
    } else {
      status =
        appleDestinationLabel === "Apple TestFlight"
          ? "Opening Apple TestFlight…"
          : "Opening the App Store…";
    }

    window.location.replace(getStoreRedirectTarget(kind, redirectUrls));
  });

  function closePhoneDialog() {
    phoneDialog?.close();
    window.location.replace(homeUrl);
  }
</script>

<svelte:head>
  <title>Get the app — JumaLink</title>
  <meta name="robots" content="noindex, nofollow" />
  {@html immediateRedirectMarkup}
</svelte:head>

{#if showPhonePrompt}
  <dialog
    bind:this={phoneDialog}
    class="phone-only-dialog"
    aria-labelledby="phone-only-title"
    aria-describedby="phone-only-desc"
  >
    <div class="phone-only-dialog-inner">
      <h2 id="phone-only-title" class="phone-only-title">Use your phone</h2>
      <p id="phone-only-desc" class="phone-only-desc">
        This link is meant to be opened on a smartphone. Scan the QR code with
        your phone’s camera, or open this page on your iPhone or Android device
        to continue to the app store.
      </p>
      <button type="button" class="phone-only-btn" onclick={closePhoneDialog}>
        Got it
      </button>
    </div>
  </dialog>
{/if}

<div class="app-store-fallback" role="status" aria-live="polite">
  {#if status}
    <p>{status}</p>
  {/if}
  <noscript>
    <p class="noscript-block">
      <strong>On a phone?</strong>
      <a href={PLAY_STORE_URL}>Google Play</a>
      ·
      <a href={APP_STORE_URL}>{appleDestinationLabel}</a>
    </p>
    <p class="noscript-block">
      <strong>On a computer?</strong>
      Open this same link on your iPhone or Android phone (for example by
      scanning the QR code with your camera).
    </p>
    <p class="noscript-block">
      <a href={homeUrl}>Back to home</a>
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

  .app-store-fallback .noscript-block {
    margin-top: var(--space-md);
  }

  .app-store-fallback .noscript-block:first-child {
    margin-top: 0;
  }

  .app-store-fallback a {
    color: var(--green-primary);
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  .phone-only-dialog {
    margin: auto;
    max-width: min(420px, calc(100vw - 2 * var(--space-xl)));
    padding: 0;
    border: none;
    border-radius: var(--radius-md, 12px);
    box-shadow: 0 24px 48px rgba(0, 0, 0, 0.18);
  }

  .phone-only-dialog::backdrop {
    background: rgba(14, 56, 44, 0.45);
    backdrop-filter: blur(4px);
  }

  .phone-only-dialog-inner {
    padding: var(--space-xl, 1.5rem);
    text-align: center;
  }

  .phone-only-title {
    font-size: var(--fs-lg, 1.25rem);
    font-weight: 600;
    color: var(--text-primary);
    margin: 0 0 var(--space-md);
    line-height: 1.3;
  }

  .phone-only-desc {
    font-size: var(--fs-base);
    color: var(--text-secondary);
    margin: 0 0 var(--space-lg);
    line-height: 1.55;
  }

  .phone-only-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 44px;
    padding: 0 var(--space-xl);
    border-radius: var(--radius-sm, 8px);
    font-size: var(--fs-base);
    font-weight: 600;
    color: var(--white);
    background: var(--green-primary);
    transition: background 0.2s ease, transform 0.15s ease;
  }

  .phone-only-btn:hover {
    background: var(--green-accent);
  }

  .phone-only-btn:focus-visible {
    outline: 2px solid var(--green-dark);
    outline-offset: 2px;
  }

  .phone-only-btn:active {
    transform: scale(0.98);
  }
</style>
