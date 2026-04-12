<script>
</script>

<section class="hero" id="home">
  <div class="hero-overlay"></div>
  <div class="hero-content container">
    <h1>
      Find Trusted<br />
      Artisans In<br />
      <span class="accent">minutes</span>...
    </h1>
    <p class="hero-subtitle">
      Book verified plumbers, electricians, mechanics, and more, right
      from your phone. JumaLink connects you to nearby pros, with
      transparent prices, reviews, and fast response.
    </p>
    <div class="store-buttons">
      <a href="#contact" class="store-btn" aria-label="Download on App Store">
        <svg class="store-icon" viewBox="0 0 24 24" width="28" height="28" fill="white">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
        <div class="store-text">
          <span class="store-label">Download on the</span>
          <span class="store-name">App Store</span>
        </div>
      </a>
      <a href="#contact" class="store-btn" aria-label="Get it on Google Play">
        <svg class="store-icon" viewBox="0 0 24 24" width="28" height="28" fill="white">
          <path d="M3 20.5v-17c0-.83.52-1.28 1-1.5l10 10L4 22c-.48-.22-1-.67-1-1.5zM16 12L6.27 2.27l12.18 7.03L16 12zm-3.77 1.23L5.06 22.46l12.18-7.03-4.01-2.2zM21 12c0 .5-.27.87-.75 1.13L17.5 12l2.75-1.13c.48.26.75.63.75 1.13z"/>
        </svg>
        <div class="store-text">
          <span class="store-label">Get it on</span>
          <span class="store-name">Google Play</span>
        </div>
      </a>
    </div>
  </div>
</section>

<style>
  .hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    background-image: url('https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1920&h=1080&fit=crop');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.55) 0%,
      rgba(0, 0, 0, 0.3) 50%,
      rgba(0, 0, 0, 0.1) 100%
    );
  }

  .hero-content {
    position: relative;
    z-index: 1;
    padding-top: calc(var(--nav-height) + 60px);
    padding-bottom: var(--space-5xl);
    max-width: 700px;
  }

  h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 600;
    line-height: 1.15;
    color: var(--white);
    margin-bottom: var(--space-xl);
  }

  h1 .accent {
    color: var(--green-accent);
  }

  .hero-subtitle {
    font-size: var(--fs-lg);
    color: rgba(255, 255, 255, 0.85);
    line-height: 1.7;
    max-width: 560px;
    margin-bottom: var(--space-3xl);
  }

  .store-buttons {
    display: flex;
    gap: var(--space-md);
    flex-wrap: wrap;
  }

  .store-btn {
    display: inline-flex;
    align-items: center;
    gap: var(--space-md);
    background: rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(8px);
    border: 1.5px solid rgba(255, 255, 255, 0.35);
    color: var(--white);
    padding: 12px 28px;
    border-radius: var(--radius-md);
    text-decoration: none;
    transition: all var(--transition-base);
  }

  .store-btn:hover {
    background: rgba(255, 255, 255, 0.22);
    border-color: rgba(255, 255, 255, 0.55);
  }

  .store-icon {
    flex-shrink: 0;
  }

  .store-text {
    display: flex;
    flex-direction: column;
  }

  .store-label {
    font-size: var(--fs-xs);
    opacity: 0.9;
  }

  .store-name {
    font-size: var(--fs-base);
    font-weight: 600;
  }

  @media (max-width: 768px) {
    .hero {
      min-height: 90vh;
    }

    .hero-content {
      padding-top: calc(var(--nav-height) + 40px);
    }

    .store-btn {
      padding: 10px 20px;
    }
  }
</style>
