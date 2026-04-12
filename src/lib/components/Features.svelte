<script>
  import SectionHeading from './SectionHeading.svelte';
  import FeatureCard from './FeatureCard.svelte';
  import { features, whyUsePoints } from '$lib/data/features.js';
</script>

<section class="features section-padding" id="features">
  <div class="container">
    <SectionHeading
      text="Connecting Skilled Workers to Real Opportunities"
      accentWord="Real"
      center={false}
    />

    <div class="features-grid">
      {#each features as feature}
        <FeatureCard
          title={feature.title}
          description={feature.description}
          image={feature.image}
        />
      {/each}
    </div>
  </div>

  <!-- Why Use JumaLink Banner -->
  <div class="why-banner">
    <div class="container">
      <div class="why-content">
        <div class="why-left">
          <h3>Why Use JumaLink</h3>
          <ul class="why-list">
            {#each whyUsePoints as point}
              <li>
                <span class="why-icon">{point.icon}</span>
                <span>{point.text}</span>
              </li>
            {/each}
          </ul>
        </div>

        <div class="why-center">
          <img
            src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=300&h=400&fit=crop"
            alt="Artisan worker"
            loading="lazy"
          />
        </div>

        <div class="why-right">
          <div class="qr-placeholder">
            <svg viewBox="0 0 100 100" width="160" height="160">
              <rect width="100" height="100" fill="white" rx="8"/>
              <rect x="10" y="10" width="25" height="25" fill="#1B5E20" rx="3"/>
              <rect x="65" y="10" width="25" height="25" fill="#1B5E20" rx="3"/>
              <rect x="10" y="65" width="25" height="25" fill="#1B5E20" rx="3"/>
              <rect x="40" y="40" width="20" height="20" fill="#1B5E20" rx="2"/>
              <rect x="15" y="15" width="15" height="15" fill="white" rx="2"/>
              <rect x="70" y="15" width="15" height="15" fill="white" rx="2"/>
              <rect x="15" y="70" width="15" height="15" fill="white" rx="2"/>
              <rect x="18" y="18" width="9" height="9" fill="#1B5E20" rx="1"/>
              <rect x="73" y="18" width="9" height="9" fill="#1B5E20" rx="1"/>
              <rect x="18" y="73" width="9" height="9" fill="#1B5E20" rx="1"/>
              <rect x="45" y="10" width="5" height="5" fill="#1B5E20"/>
              <rect x="55" y="10" width="5" height="5" fill="#1B5E20"/>
              <rect x="45" y="20" width="5" height="5" fill="#1B5E20"/>
              <rect x="10" y="45" width="5" height="5" fill="#1B5E20"/>
              <rect x="20" y="45" width="5" height="5" fill="#1B5E20"/>
              <rect x="10" y="55" width="5" height="5" fill="#1B5E20"/>
              <rect x="65" y="45" width="5" height="5" fill="#1B5E20"/>
              <rect x="75" y="45" width="5" height="5" fill="#1B5E20"/>
              <rect x="85" y="45" width="5" height="5" fill="#1B5E20"/>
              <rect x="65" y="55" width="5" height="5" fill="#1B5E20"/>
              <rect x="45" y="65" width="5" height="5" fill="#1B5E20"/>
              <rect x="55" y="65" width="5" height="5" fill="#1B5E20"/>
              <rect x="65" y="65" width="5" height="5" fill="#1B5E20"/>
              <rect x="75" y="65" width="5" height="5" fill="#1B5E20"/>
              <rect x="85" y="65" width="5" height="5" fill="#1B5E20"/>
              <rect x="45" y="75" width="5" height="5" fill="#1B5E20"/>
              <rect x="55" y="75" width="5" height="5" fill="#1B5E20"/>
              <rect x="65" y="75" width="5" height="5" fill="#1B5E20"/>
              <rect x="45" y="85" width="5" height="5" fill="#1B5E20"/>
              <rect x="75" y="85" width="5" height="5" fill="#1B5E20"/>
              <rect x="85" y="85" width="5" height="5" fill="#1B5E20"/>
            </svg>
          </div>
          <p class="qr-label">📱 Scan to Try JumaLink</p>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .features-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-xl);
    margin-bottom: var(--space-3xl);
  }

  /* Why Banner */
  .why-banner {
    background: var(--green-dark);
    border-radius: var(--radius-xl);
    margin: 0 var(--space-xl);
    padding: var(--space-3xl) 0;
    overflow: hidden;
  }

  .why-content {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    gap: var(--space-2xl);
    align-items: center;
  }

  .why-left h3 {
    font-size: var(--fs-2xl);
    font-weight: 700;
    color: var(--white);
    margin-bottom: var(--space-xl);
  }

  .why-list {
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
  }

  .why-list li {
    display: flex;
    align-items: center;
    gap: var(--space-md);
    color: var(--white);
    font-size: var(--fs-sm);
  }

  .why-icon {
    font-size: var(--fs-lg);
  }

  .why-center img {
    width: 200px;
    height: auto;
    border-radius: var(--radius-lg);
    object-fit: cover;
  }

  .why-right {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-md);
  }

  .qr-placeholder {
    background: var(--white);
    border-radius: var(--radius-lg);
    padding: var(--space-md);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .qr-label {
    color: rgba(255, 255, 255, 0.8);
    font-size: var(--fs-sm);
  }

  @media (max-width: 1024px) {
    .features-grid {
      grid-template-columns: 1fr 1fr;
    }

    .why-content {
      grid-template-columns: 1fr 1fr;
    }

    .why-center {
      display: none;
    }
  }

  @media (max-width: 768px) {
    .features-grid {
      grid-template-columns: 1fr;
    }

    .why-banner {
      margin: 0 var(--space-md);
      padding: var(--space-xl) 0;
      border-radius: var(--radius-lg);
    }

    .why-content {
      grid-template-columns: 1fr;
      text-align: center;
    }

    .why-list li {
      justify-content: center;
    }
  }
</style>
