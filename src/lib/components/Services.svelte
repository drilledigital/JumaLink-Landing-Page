<!-- <script>
  import SectionHeading from './SectionHeading.svelte';
  import ArtisanCard from './ArtisanCard.svelte';
  import { services } from '$lib/data/services.js';
</script>

<section class="services section-padding" id="services">
  <div class="container">
    <SectionHeading
      text="Services you can request with our Verified Artisans"
      accentWord="Verified Artisans"
      center={false}
    />

    <div class="services-list">
      {#each services as service}
        <ArtisanCard
          name={service.name}
          title={service.title}
          description={service.description}
          rate={service.rate}
          rating={service.rating}
          availability={service.availability}
          location={service.location}
          image={service.image}
        />
      {/each}
    </div>
  </div>
</section>

<style>
  .services {
    background: var(--white);
  }

  .services-list {
    display: flex;
    flex-direction: column;
    gap: var(--space-2xl);
  }
</style> -->
