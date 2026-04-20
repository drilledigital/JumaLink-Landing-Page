<script>
  import { page } from "$app/state";
  import { base } from "$app/paths";

  const homeHref = `${base}/`;
  const is404 = $derived(page.status === 404);
  const title = $derived(
    is404 ? "Page not found — JumaLink" : "Something went wrong — JumaLink",
  );
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="robots" content="noindex, nofollow" />
</svelte:head>

<main class="error-main">
  <div class="error-inner container">
    <p class="error-code" aria-hidden="true">{page.status}</p>
    <h1 class="error-heading">
      {#if is404}
        This page does not exist
      {:else}
        Something went wrong
      {/if}
    </h1>
    <p class="error-copy">
      {#if is404}
        The link may be broken or the page may have been removed. Check the
        address or head back to the home page.
      {:else}
        {page.error?.message ?? "Please try again in a moment."}
      {/if}
    </p>
    <a href={homeHref} class="home-link">Back to home</a>
  </div>
</main>

<style>
  .error-main {
    min-height: calc(100vh);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--space-3xl) var(--space-xl);
    background: var(--gray-bg);
  }

  .error-inner {
    max-width: 520px;
    text-align: center;
  }

  .error-code {
    font-size: clamp(3rem, 12vw, 5rem);
    font-weight: 700;
    line-height: 1;
    color: #000000;
    margin-bottom: var(--space-md);
  }

  .error-heading {
    font-size: var(--fs-2xl);
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: var(--space-md);
    line-height: 1.25;
  }

  .error-copy {
    font-size: var(--fs-base);
    color: var(--text-secondary);
    margin-bottom: var(--space-xl);
    line-height: 1.55;
  }

  .home-link {
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
    transition: background 0.2s ease;
  }

  .home-link:hover {
    background: var(--green-accent);
  }

  .home-link:focus-visible {
    outline: 2px solid var(--green-dark);
    outline-offset: 2px;
  }
</style>
