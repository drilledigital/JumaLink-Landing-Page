<script>
  import SectionHeading from './SectionHeading.svelte';
  import PainPointCard from './PainPointCard.svelte';
  import { painPoints } from '$lib/data/painPoints.js';
</script>

<section class="pain-points section-padding" id="pain-points">
  <div class="container">
    <SectionHeading
      text="Finding Reliable Help Shouldn't Be This Hard"
      accentWord="Reliable"
    />
    <div class="cards-grid">
      {#each painPoints as point}
        <PainPointCard
          image={point.image}
          title={point.title}
          description={point.description}
        />
      {/each}
    </div>
  </div>
</section>

<style>
  .pain-points {
    background: var(--gray-bg);
  }

  .cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: var(--space-2xl);
    justify-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }

  @media (min-width: 1200px) {
    .cards-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 768px) {
    .cards-grid {
      grid-template-columns: 1fr;
      gap: var(--space-lg);
      padding: 0 var(--space-md);
    }
  }
</style>
