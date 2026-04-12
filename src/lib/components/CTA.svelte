<script>
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
      <a href="#contact" class="contact-btn">Contact Us</a>
    </div>
    <div class="cta-image">
      <img
        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop"
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
    grid-template-columns: 1fr 1fr;
    min-height: 450px;
    border-radius: var(--radius-xl);
    overflow: hidden;
  }

  .cta-text {
    background: var(--green-dark);
    padding: var(--space-4xl);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h2 {
    font-size: var(--fs-3xl);
    font-weight: 700;
    color: var(--white);
    margin-bottom: var(--space-lg);
    line-height: 1.3;
  }

  h2 .accent {
    color: var(--green-accent);
  }

  p {
    font-size: var(--fs-sm);
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.8;
    margin-bottom: var(--space-xl);
  }

  .contact-btn {
    display: inline-block;
    background: var(--green-accent);
    color: var(--white);
    padding: 12px 28px;
    border-radius: 50px;
    font-size: var(--fs-sm);
    font-weight: 600;
    text-decoration: none;
    transition: all var(--transition-base);
    width: fit-content;
  }

  .contact-btn:hover {
    background: #43A047;
    transform: translateY(-1px);
  }

  .cta-image {
    overflow: hidden;
  }

  .cta-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    .cta {
      padding: 0 var(--space-md);
    }

    .cta-inner {
      grid-template-columns: 1fr;
    }

    .cta-text {
      padding: var(--space-2xl);
    }

    .cta-image {
      height: 250px;
    }
  }
</style>
