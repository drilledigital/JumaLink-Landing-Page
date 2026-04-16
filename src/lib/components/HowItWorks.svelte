<script>
  import howItWorksImg from "$lib/assets/how-jumalink-works.png";
</script>

<section class="how-it-works section-padding" id="how-it-works">
  <div class="container">
    <div class="section-header">
      <h2>How JumaLink Works</h2>
      <p class="subtitle">-Fast, Trusted, Reliable</p>
    </div>

    <div class="content-layout">
      <!-- Left Features -->
      <div class="features-col left">
        <div class="feature-item">
          <h3>Request a Service in <span class="accent">Seconds</span></h3>
          <p>Find and request nearby artisans instantly. No more calling around or waiting endlessly — get connected in just a few taps.</p>
          <div class="progress-bar">
            <div class="progress-fill" style="width: 75%"></div>
            <span class="progress-dot"></span>
          </div>
        </div>

        <div class="feature-item">
          <h3>Real-time availability</h3>
          <p>This feature keeps you informed about your financial activities, making it easier to track and manage your spending in real time.</p>
        </div>
      </div>

      <!-- Center Phone -->
      <div class="phone-mockup">
        <enhanced:img
          src={howItWorksImg}
          alt="JumaLink artisan profile screen"
          class="phone-shot"
          loading="lazy"
          sizes="(max-width: 1024px) 320px, 360px"
        />
      </div>

      <!-- Right Features -->
      <div class="features-col right">
        <div class="feature-item">
          <h3>Wide Range of Services</h3>
          <p>The app provides users with a wide range of financial services and tools, including account management and budgeting.</p>
          <div class="progress-bar">
            <div class="progress-fill" style="width: 60%"></div>
            <span class="progress-dot"></span>
          </div>
        </div>

        <div class="feature-item">
          <h3>Verified Professionals</h3>
          <p>Every artisan is vetted to ensure reliability, professionalism, and quality service you can depend on.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .how-it-works {
    position: relative;
    background: var(--green-dark);
    color: var(--white);
    overflow: hidden;
  }

  #how-it-works {
    padding-top: clamp(1.25rem, 2vw, 2rem);
    padding-bottom: 0;
    margin-bottom: 7%;
  }

  .section-header {
    text-align: center;
    margin-bottom: -5%;
    padding-bottom: 0;
  }

  .section-header h2 {
    font-size: clamp(2.2rem, 5.2vw, 4rem);
    font-weight: 500;
    color: var(--white);
    line-height: 1.08;
  }

  .section-header .subtitle {
    font-size: clamp(2.1rem, 5vw, 4rem);
    color: var(--yellow);
    font-weight: 500;
    line-height: 1.1;
  }

  .content-layout {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    gap: clamp(1.8rem, 3vw, 3rem);
    align-items: center;
  }

  .features-col {
    display: flex;
    flex-direction: column;
    gap: clamp(2rem, 2.6vw, 2.6rem);
  }

  .features-col.left {
    align-self: start;
    margin-top: 44%;
  }

  .features-col.right {
    align-self: end;
    margin-bottom: 30%;
  }

  .feature-item h3 {
    font-size: clamp(1.2rem, 1.8vw, 1.4rem);
    font-weight: 500;
    margin-bottom: 0.6rem;
  }

  .feature-item .accent {
    color: var(--yellow);
  }

  .feature-item p {
    font-size: clamp(0.9rem, 0.8vw, 1.05rem);
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.55;
    max-width: 310px;
  }

  .progress-bar {
    position: relative;
    width: 100%;
    height: 1px;
    background: linear-gradient(270deg,#d1d09b 0%, #3c3b1b 50%, rgba(255, 255, 255, 0) 100%);
    margin-top: clamp(2.45rem, 2.9vw, 3rem);
    margin-bottom: clamp(1.25rem, 1.9vw, 1.85rem);
  }

  

  .progress-fill {
    display: none;
  }

  .progress-dot {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(50%, -50%);
    width: 10px;
    height: 10px;
    background: var(--yellow);
    border-radius: var(--radius-full);
  }

  .phone-mockup {
    position: relative;
    display: flex;
    width: clamp(280px, 33vw, 420px);
    overflow: hidden;
    border-radius: 2.2rem;
    transform: translateY(12%);
  }

  .phone-mockup::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    pointer-events: none;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.55) 65%,
      rgba(0, 0, 0, 0.92) 100%
    );
  }

  .phone-shot {
    width: 100%;
    height: auto;
    display: block;
  }

  @media (max-width: 1024px) {
    .section-header {
      margin-bottom: 2%;
    }

    .content-layout {
      grid-template-columns: 1fr;
      gap: var(--space-2xl);
    }

    .features-col {
      order: 2;
      align-self: stretch;
    }

    .features-col.left {
      order: 2;
    }

    .phone-mockup {
      order: 1;
      justify-content: center;
      margin: 0 auto;
      transform: translateY(4%);
    }

    .phone-mockup::after {
      display: none;
    }

    .features-col.right {
      order: 3;
    }

    .feature-item p {
      max-width: 100%;
    }
  }

  @media (max-width: 768px) {
    .section-header {
      margin-bottom: 10%;
    }

    .section-header h2 {
      font-size: 2rem;
    }

    .section-header .subtitle {
      font-size: 1.9rem;
    }

    .feature-item h3 {
      font-size: 1.35rem;
    }

    .phone-mockup {
      width: min(78vw, 330px);
    }

  }
</style>
