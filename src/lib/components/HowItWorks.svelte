<script>
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
        <div class="phone-frame">
          <div class="phone-status-bar">
            <span>1:54</span>
            <span class="phone-notch"></span>
            <span class="status-icons">📶 🔋</span>
          </div>
          <div class="phone-content">
            <div class="nav-back">←</div>
            <div class="profile-section">
              <div class="profile-avatar">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop" alt="Kevin Prempeh" loading="lazy" />
              </div>
              <h4>Kevin Prempeh <span class="verified-badge">✓</span></h4>
              <p class="profile-service">Wiring Installation</p>
              <p class="profile-location">West Legon, Greater Accra</p>
              <div class="profile-rating">⭐ 4.6 (1 review)</div>
            </div>

            <div class="about-section">
              <h5>About</h5>
              <p>Experienced event catering specialist with 12 years in the trade. Dedicated to quality work.</p>
            </div>

            <div class="services-section">
              <div class="services-header">
                <h5>Services</h5>
                <span class="show-more">Show more ∨</span>
              </div>
              <div class="services-grid">
                <div class="service-item">
                  <span class="svc-name">Wiring Installation</span>
                  <span class="svc-price">GH₵4,302.58 contract</span>
                </div>
                <div class="service-item">
                  <span class="svc-name">Laundry & Ironing</span>
                  <span class="svc-price">GH₵4,354.93/day</span>
                </div>
                <div class="service-item">
                  <span class="svc-name">Auto Mechanic</span>
                  <span class="svc-price">GH₵2,338.03/day</span>
                </div>
                <div class="service-item">
                  <span class="svc-name">Tire Services</span>
                  <span class="svc-price">● Negotiable</span>
                </div>
              </div>
            </div>
          </div>
        </div>
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
    background: var(--green-dark);
    color: var(--white);
  }

  .section-header {
    text-align: center;
    margin-bottom: var(--space-3xl);
  }

  .section-header h2 {
    font-size: var(--fs-4xl);
    font-weight: 700;
    color: var(--white);
  }

  .section-header .subtitle {
    font-size: var(--fs-3xl);
    color: var(--green-accent);
    font-weight: 600;
  }

  .content-layout {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    gap: var(--space-3xl);
    align-items: center;
  }

  .features-col {
    display: flex;
    flex-direction: column;
    gap: var(--space-3xl);
  }

  .feature-item h3 {
    font-size: var(--fs-lg);
    font-weight: 600;
    margin-bottom: var(--space-sm);
  }

  .feature-item .accent {
    color: var(--green-accent);
  }

  .feature-item p {
    font-size: var(--fs-sm);
    color: rgba(255, 255, 255, 0.75);
    line-height: 1.7;
  }

  .progress-bar {
    position: relative;
    width: 100%;
    height: 3px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 2px;
    margin-top: var(--space-lg);
  }

  .progress-fill {
    height: 100%;
    background: var(--green-accent);
    border-radius: 2px;
  }

  .progress-dot {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(50%, -50%);
    width: 10px;
    height: 10px;
    background: var(--green-accent);
    border-radius: var(--radius-full);
  }

  /* Phone Mockup */
  .phone-mockup {
    flex-shrink: 0;
  }

  .phone-frame {
    width: 270px;
    background: #111;
    border-radius: 32px;
    padding: 8px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
  }

  .phone-status-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 6px 16px;
    font-size: 10px;
    color: var(--white);
  }

  .phone-notch {
    width: 24px;
    height: 24px;
    background: #000;
    border-radius: var(--radius-full);
  }

  .status-icons {
    font-size: 8px;
  }

  .phone-content {
    background: var(--white);
    border-radius: 24px;
    padding: 16px;
    color: var(--text-primary);
    min-height: 420px;
  }

  .nav-back {
    font-size: 18px;
    margin-bottom: 12px;
    color: var(--text-primary);
  }

  .profile-section {
    text-align: center;
    margin-bottom: 16px;
  }

  .profile-avatar {
    width: 80px;
    height: 80px;
    margin: 0 auto 8px;
    border-radius: var(--radius-full);
    overflow: hidden;
  }

  .profile-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .profile-section h4 {
    font-size: 14px;
    font-weight: 600;
  }

  .verified-badge {
    color: var(--green-accent);
    font-size: 12px;
  }

  .profile-service {
    color: var(--green-primary);
    font-size: 11px;
  }

  .profile-location {
    color: var(--text-secondary);
    font-size: 10px;
  }

  .profile-rating {
    font-size: 10px;
    margin-top: 4px;
  }

  .about-section {
    margin-bottom: 12px;
  }

  .about-section h5,
  .services-header h5 {
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 4px;
  }

  .about-section p {
    font-size: 10px;
    color: var(--text-secondary);
    line-height: 1.5;
  }

  .services-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }

  .show-more {
    font-size: 10px;
    color: var(--green-accent);
  }

  .services-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6px;
  }

  .service-item {
    background: var(--gray-bg);
    padding: 8px;
    border-radius: 6px;
  }

  .svc-name {
    display: block;
    font-size: 9px;
    font-weight: 500;
  }

  .svc-price {
    display: block;
    font-size: 8px;
    color: var(--green-accent);
    margin-top: 2px;
  }

  @media (max-width: 1024px) {
    .content-layout {
      grid-template-columns: 1fr;
      gap: var(--space-2xl);
    }

    .features-col {
      order: 2;
    }

    .features-col.left {
      order: 2;
    }

    .phone-mockup {
      order: 1;
      display: flex;
      justify-content: center;
    }

    .features-col.right {
      order: 3;
    }
  }

  @media (max-width: 768px) {
    .phone-frame {
      width: 240px;
    }
  }
</style>
