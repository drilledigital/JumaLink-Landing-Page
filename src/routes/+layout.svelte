<script>
  import { onMount } from 'svelte';
  import '../app.css';
  import '@fontsource-variable/inter/wght.css';
  import CookieConsent from '$lib/components/CookieConsent.svelte';
  import { captureReferral } from '$lib/utils/referral.js';

  let { children } = $props();

  onMount(() => {
    captureReferral();
  });
</script>

{@render children()}
<CookieConsent />
