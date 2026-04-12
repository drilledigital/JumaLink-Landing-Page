<script>
  import SectionHeading from './SectionHeading.svelte';
  import TestimonialCard from './TestimonialCard.svelte';
  import { testimonials } from '$lib/data/testimonials.js';
</script>

<section class="testimonials section-padding" id="testimonials">
  <div class="container">
    <SectionHeading
      text="Hear from our valued users and their experience"
      accentWord="valued users"
    />

    <div class="testimonials-grid">
      {#each testimonials as testimonial}
        <TestimonialCard
          name={testimonial.name}
          role={testimonial.role}
          avatar={testimonial.avatar}
          rating={testimonial.rating}
          text={testimonial.text}
        />
      {/each}
    </div>
  </div>
</section>

<style>
  .testimonials {
    background: var(--gray-bg);
  }

  .testimonials-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-xl);
  }

  @media (max-width: 1024px) {
    .testimonials-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 768px) {
    .testimonials-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
