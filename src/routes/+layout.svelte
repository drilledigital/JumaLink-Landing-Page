<script>
  import '../app.css';
  import '@fontsource-variable/inter/wght.css';
  import CookieConsent from '$lib/components/CookieConsent.svelte';

  let { children } = $props();
</script>

{@render children()}
<CookieConsent />
