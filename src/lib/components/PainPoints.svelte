<script>
  import SectionHeading from "./SectionHeading.svelte";
  import PainPointCard from "./PainPointCard.svelte";
  import { painPoints } from "$lib/data/painPoints.js";
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
    background: var(--white);
  }

  .cards-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: var(--space-2xl);
    justify-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }

  @media (max-width: 1199px) {
    .cards-grid {
      grid-template-columns: 1fr;
      max-width: 420px;
      gap: var(--space-xl);
    }
  }

  @media (max-width: 768px) {
    .cards-grid {
      grid-template-columns: 1fr;
      gap: var(--space-lg);
      max-width: 100%;
      padding: 0 var(--space-md);
    }
  }
</style>
