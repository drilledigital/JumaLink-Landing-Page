<script>
  /** @type {{ text: string, accentWord: string, subtitle?: string, center?: boolean, light?: boolean }} */
  let { text, accentWord, subtitle = '', center = true, light = false } = $props();

  function renderHeading(text, accentWord) {
    return text.replace(accentWord, `<span class="accent-word">${accentWord}</span>`);
  }
</script>

<div class="section-heading" class:center class:light>
  <h2>{@html renderHeading(text, accentWord)}</h2>
  {#if subtitle}
    <p class="subtitle">{subtitle}</p>
  {/if}
</div>

<style>
  .section-heading {
    margin-bottom: var(--space-3xl);
  }

  .section-heading.center {
    text-align: center;
  }

  h2 {
    font-size: var(--fs-4xl);
    font-weight: 700;
    line-height: 1.2;
    color: var(--text-primary);
  }

  .section-heading.light h2 {
    color: var(--white);
  }

  h2 :global(.accent-word) {
    color: var(--green-accent);
  }

  .subtitle {
    font-size: var(--fs-lg);
    color: var(--text-secondary);
    margin-top: var(--space-md);
    max-width: 600px;
  }

  .section-heading.center .subtitle {
    margin-left: auto;
    margin-right: auto;
  }

  .section-heading.light .subtitle {
    color: rgba(255, 255, 255, 0.8);
  }
</style>
