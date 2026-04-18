<script>
  import CTA from "$lib/components/CTA.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import Features from "$lib/components/Features.svelte";
  import Services from "$lib/components/Services.svelte";
  import PainPoints from "$lib/components/PainPoints.svelte";
  import HowItWorks from "$lib/components/HowItWorks.svelte";
  import Testimonials from "$lib/components/Testimonials.svelte";
  import {
    PLAY_STORE_URL,
    APP_STORE_URL,
  } from "$lib/config/appStoreLinks.js";

  const mobileAppJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "JumaLink",
    operatingSystem: "ANDROID, IOS",
    installUrl: [PLAY_STORE_URL, APP_STORE_URL],
    applicationCategory: "BusinessApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "GHS",
    },
    description:
      "JumaLink connects you with verified local blue collar workers instantly. Download on Google Play or join the iOS beta via Apple TestFlight to find plumbers, electricians, and mechanics near you in Ghana.",
  });
</script>

<svelte:head>
  <title>JumaLink — Find Trusted Artisans In Seconds</title>
  <meta
    name="description"
    content="Download the JumaLink app on the Google Play Store and Apple App Store to instantly book verified blue collar workers. Hire plumbers, electricians, and masons right from your phone with transparent pricing."
  />
  <meta
    name="keywords"
    content="artisans, blue collar workers, plumbers, electricians, mechanics, JumaLink, hire workers, Ghana, local services, trusted professionals, Google Play Store app, Apple App Store download"
  />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://jumalink.com/" />
  <meta
    property="og:title"
    content="JumaLink — Find Trusted Artisans In Seconds"
  />
  <meta
    property="og:description"
    content="Download the JumaLink app on the Google Play Store and App Store to instantly book verified blue collar workers in Ghana."
  />
  <meta property="og:image" content="https://jumalink.com/social-preview.png" />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://jumalink.com/" />
  <meta
    property="twitter:title"
    content="JumaLink — Find Trusted Artisans In Seconds"
  />
  <meta
    property="twitter:description"
    content="Instantly book verified blue collar workers right from your phone."
  />
  <meta
    property="twitter:image"
    content="https://jumalink.com/social-preview.png"
  />

  <!-- Canonical URL -->
  <link rel="canonical" href="https://jumalink.com/" />

  <!-- Structured Data (JSON-LD) -->
  {@html `<script type="application/ld+json">${mobileAppJsonLd}</script>`}
</svelte:head>

<Navbar />
<main>
  <Hero />
  <PainPoints />
  <Features />
  <HowItWorks />
  <Services />
  <Testimonials />
  <CTA />
</main>
<Footer />
