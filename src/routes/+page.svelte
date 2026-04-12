<script>
  import Navbar from '$lib/components/Navbar.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import PainPoints from '$lib/components/PainPoints.svelte';
  import Features from '$lib/components/Features.svelte';
  import HowItWorks from '$lib/components/HowItWorks.svelte';
  import Services from '$lib/components/Services.svelte';
  import Testimonials from '$lib/components/Testimonials.svelte';
  import CTA from '$lib/components/CTA.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
  <title>JumaLink — Find Trusted Artisans In Minutes</title>
  <meta name="description" content="Book verified plumbers, electricians, mechanics, masons, and more right from your phone. JumaLink connects you to nearby pros with transparent prices, reviews, and fast response." />
  <meta name="keywords" content="artisans, plumbers, electricians, mechanics, JumaLink, hire workers, Ghana, local services, trusted professionals" />
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://jumalink.com/" />
  <meta property="og:title" content="JumaLink — Find Trusted Artisans In Minutes" />
  <meta property="og:description" content="Book verified plumbers, electricians, mechanics, masons, and more right from your phone. JumaLink connects you to nearby pros with transparent prices, reviews, and fast response." />
  <meta property="og:image" content="https://jumalink.com/social-preview.png" />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://jumalink.com/" />
  <meta property="twitter:title" content="JumaLink — Find Trusted Artisans In Minutes" />
  <meta property="twitter:description" content="Book verified plumbers, electricians, mechanics, masons, and more right from your phone." />
  <meta property="twitter:image" content="https://jumalink.com/social-preview.png" />

  <!-- Canonical URL -->
  <link rel="canonical" href="https://jumalink.com/" />

  <!-- Structured Data (JSON-LD) -->
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "MobileApplication",
      "name": "JumaLink",
      "operatingSystem": "ANDROID, IOS",
      "applicationCategory": "BusinessApplication",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "GHS"
      },
      "description": "JumaLink connects you with verified local artisans instantly. Find plumbers, electricians, and mechanics near you in Ghana."
    }
  </script>
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
