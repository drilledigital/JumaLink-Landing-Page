<script>
  import ctaWorker from "$lib/assets/CTA-worker.avif";
</script>

<section class="cta" id="contact">
  <div class="cta-inner">
    <div class="cta-text">
      <h2>Need an Artisan? <span class="accent">Hire One Now!</span></h2>
      <p>
        JumaLink makes it easy to find the right artisan for your needs.
        Every worker on our platform is verified, reliable, and skilled,
        so you can hire with confidence knowing your project
        will be handled professionally and on time.
      </p>
      <a href="mailto:support@jumalink.com" class="contact-btn">Contact Us</a>
    </div>
    <div class="cta-image">
      <img
        src={ctaWorker}
        alt="Artisan at work"
        loading="lazy"
      />
    </div>
  </div>
</section>

<style>
  .cta {
    padding: 0 var(--space-xl);
  }

  .cta-inner {
    display: grid;
    grid-template-columns: 1.05fr 1fr;
    height: clamp(320px, 40vw, 750px);
    gap: var(--space-lg);
    background: transparent;
    align-items: stretch;
  }

  .cta-text {
    border-radius: var(--radius-xl);
    padding: clamp(2.5rem, 4vw, 3.25rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: var(--white);
    background: var(--green-dark);
    overflow: hidden;
    height: 100%;
  }

  .cta-text h2 {
    font-size: clamp(2rem, 3vw, 2.6rem);
    font-weight: 600;
    margin-bottom: var(--space-md);
    line-height: 1.2;
  }

  .cta-text h2 .accent {
    color: var(--green-accent-2);
  }

  .cta-text p {
    font-size: var(--fs-sm);
    color: rgba(255, 255, 255, 0.85);
    line-height: 1.8;
    margin-bottom: var(--space-xl);
    max-width: 30rem;
  }

  .contact-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: var(--green-accent-2);
    color: var(--white);
    padding: 0.75rem 1.9rem;
    border-radius: 999px;
    font-size: var(--fs-sm);
    font-weight: 600;
    text-decoration: none;
    transition: transform var(--transition-fast), box-shadow var(--transition-fast), background var(--transition-fast);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.22);
    width: fit-content;
  }

  .contact-btn:hover {
    background: #96c684;
    transform: translateY(-1px);
    box-shadow: 0 14px 30px rgba(0, 0, 0, 0.3);
  }

  .cta-image {
    position: relative;
    overflow: hidden;
    border-radius: var(--radius-xl);
    height: 100%;
  }

  .cta-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 900px) {
    .cta {
      padding: 0 var(--space-md);
    }

    .cta-inner {
      grid-template-columns: 1fr;
      gap: var(--space-md);
      height: auto;
    }

    .cta-text {
      padding: var(--space-2xl);
      height: auto;
    }

    .cta-image {
      height: min(62vw, 340px);
    }

    .cta-image img {
      object-position: 50% 43%;
    }
  }
</style>
