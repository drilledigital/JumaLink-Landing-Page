<script>
  import SectionHeading from "./SectionHeading.svelte";
  import FeatureCard from "./FeatureCard.svelte";
  import CurvyLine from "./CurvyLine.svelte";
  import DollarSign from "./DollarSign.svelte";
  import TwentyFourHourSign from "./24HourSign.svelte";
  import ArrowSign from "./ArrowSign.svelte";
  import RightArrowSign from "./RightArrowSign.svelte";
  import femalePlumberImg from "$lib/assets/female-plumber-working.png";
  import { features, whyUsePoints } from "$lib/data/features.js";

  const whyUseIcons = [
    DollarSign,
    TwentyFourHourSign,
    ArrowSign,
    RightArrowSign,
  ];
</script>

<section class="features section-padding" id="features">
  <div class="container">
    <SectionHeading
      text="Connecting Skilled Workers to Real Opportunities"
      accentWord="Real"
      center={true}
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
            {#each whyUsePoints as point, index}
              <li>
                <span class="why-icon">
                  <svelte:component this={whyUseIcons[index] ?? DollarSign} />
                </span>
                <span>{point.text}</span>
              </li>
            {/each}
          </ul>
        </div>

        <div class="why-right">
          <div class="qr-placeholder">
            <svg viewBox="0 0 100 100" width="170" height="170">
              <rect width="100" height="100" fill="white" rx="8" />
              <rect
                x="10"
                y="10"
                width="25"
                height="25"
                fill="#111111"
                rx="3"
              />
              <rect
                x="65"
                y="10"
                width="25"
                height="25"
                fill="#111111"
                rx="3"
              />
              <rect
                x="10"
                y="65"
                width="25"
                height="25"
                fill="#111111"
                rx="3"
              />
              <rect
                x="40"
                y="40"
                width="20"
                height="20"
                fill="#111111"
                rx="2"
              />
              <rect x="15" y="15" width="15" height="15" fill="white" rx="2" />
              <rect x="70" y="15" width="15" height="15" fill="white" rx="2" />
              <rect x="15" y="70" width="15" height="15" fill="white" rx="2" />
              <rect x="18" y="18" width="9" height="9" fill="#111111" rx="1" />
              <rect x="73" y="18" width="9" height="9" fill="#111111" rx="1" />
              <rect x="18" y="73" width="9" height="9" fill="#111111" rx="1" />
              <rect x="45" y="10" width="5" height="5" fill="#111111" />
              <rect x="55" y="10" width="5" height="5" fill="#111111" />
              <rect x="45" y="20" width="5" height="5" fill="#111111" />
              <rect x="10" y="45" width="5" height="5" fill="#111111" />
              <rect x="20" y="45" width="5" height="5" fill="#111111" />
              <rect x="10" y="55" width="5" height="5" fill="#111111" />
              <rect x="65" y="45" width="5" height="5" fill="#111111" />
              <rect x="75" y="45" width="5" height="5" fill="#111111" />
              <rect x="85" y="45" width="5" height="5" fill="#111111" />
              <rect x="65" y="55" width="5" height="5" fill="#111111" />
              <rect x="45" y="65" width="5" height="5" fill="#111111" />
              <rect x="55" y="65" width="5" height="5" fill="#111111" />
              <rect x="65" y="65" width="5" height="5" fill="#111111" />
              <rect x="75" y="65" width="5" height="5" fill="#111111" />
              <rect x="85" y="65" width="5" height="5" fill="#111111" />
              <rect x="45" y="75" width="5" height="5" fill="#111111" />
              <rect x="55" y="75" width="5" height="5" fill="#111111" />
              <rect x="65" y="75" width="5" height="5" fill="#111111" />
              <rect x="45" y="85" width="5" height="5" fill="#111111" />
              <rect x="75" y="85" width="5" height="5" fill="#111111" />
              <rect x="85" y="85" width="5" height="5" fill="#111111" />
            </svg>
          </div>
          <p class="qr-label">Scan to Try JumaLink</p>
        </div>

        <div class="why-center">
          <enhanced:img
            src={femalePlumberImg}
            alt="Female artisan worker"
            loading="lazy"
            class="why-worker-img"
          />
        </div>
      </div>
    </div>
    <div class="banner-curve" aria-hidden="true">
      <CurvyLine />
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
    position: relative;
    left: 0;
    right: 0;
    margin: 0 auto;
    max-width: 1200px;
    background: #f2f2f2;
    border-radius: var(--radius-xl);
    padding: var(--space-2xl) 0;
    overflow: visible;
  }

  .why-content {
    position: relative;
    min-height: clamp(320px, 34vw, 420px);
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: var(--space-xl) var(--space-xl) 0;
    z-index: 2;
  }

  .why-left h3 {
    font-size: 2.1rem;
    font-weight: 500;
    color: #111111;
    margin-bottom: var(--space-lg);
  }

  .why-list {
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
  }

  .why-list li {
    display: flex;
    align-items: center;
    gap: 0.65rem;
    color: #111111;
    font-size: 1.15rem;
    font-weight: 400;
    line-height: 1.3;
  }

  .why-icon {
    width: 26px;
    height: 26px;
    border-radius: var(--radius-full);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .why-icon :global(svg) {
    width: 16px;
    height: 16px;
  }

  .why-icon :global(path) {
    fill: #000000;
  }

  .why-left {
    position: relative;
    z-index: 3;
    max-width: 38%;
  }

  .why-worker-img {
    display: block;
    width: clamp(220px, 26vw, 310px);
    filter: drop-shadow(0 8px 20px rgba(0, 0, 0, 0.12));
  }

  .why-worker-img :global(img) {
    display: block;
    width: 100% !important;
    height: auto !important;
    object-fit: cover;
  }

  .why-center {
    position: absolute;
    left: 50%;
    bottom: -11.5%;
    transform: translateX(-50%);
    z-index: 4;
  }

  .why-right {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-sm);
    padding-right: var(--space-md);
    padding-top: 0.5rem;
    z-index: 3;
    width: 210px;
  }

  .qr-placeholder {
    background: #ffffff;
    border-radius: 0.6rem;
    border: 1px solid #dddddd;
    padding: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: var(--shadow-sm);
  }

  .qr-label {
    color: #1a1a1a;
    font-size: 0.85rem;
  }

  .banner-curve {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: var(--radius-xl);
    z-index: 1;
    opacity: 0.95;
    pointer-events: none;
    overflow: hidden;
  }

  .banner-curve :global(svg) {
    position: absolute;
    left: -12%;
    bottom: 22px;
    width: 120%;
    height: auto;
  }

  @media (max-width: 1100px) {
    .features-grid {
      grid-template-columns: 1fr 1fr;
    }

    .why-content {
      min-height: 350px;
      padding: var(--space-lg) var(--space-md) 0;
    }

    .why-left h3 {
      font-size: 1.8rem;
    }

    .why-list li {
      font-size: 1.02rem;
    }

    .why-left {
      max-width: 46%;
    }

    .why-worker-img {
      width: clamp(200px, 27vw, 260px);
      height: 500px;
      position: relative;
      bottom: -10.5px;
    }

    .why-center {
      bottom: -38px;
    }

    .why-right {
      width: 190px;
      padding-right: 0;
    }

    .banner-curve :global(svg) {
      bottom: 20px;
    }
  }

  @media (max-width: 820px) {
    .features-grid {
      grid-template-columns: 1fr;
    }

    .why-banner {
      margin: 0 var(--space-md);
      padding: var(--space-lg) 0 var(--space-md);
      border-radius: var(--radius-lg);
      overflow: hidden;
    }

    .why-content {
      min-height: 0;
      flex-direction: column;
      align-items: stretch;
      gap: var(--space-md);
      padding: var(--space-md);
    }

    .why-left {
      order: 1;
      max-width: 100%;
    }

    .why-list li {
      justify-content: flex-start;
      font-size: 0.98rem;
    }

    .why-left h3 {
      font-size: 1.6rem;
    }

    .why-center {
      order: 2;
      position: relative;
      left: auto;
      bottom: auto;
      transform: none;
      align-self: center;
      margin-top: var(--space-sm);
      margin-bottom: 0;
      z-index: 2;
    }

    .why-worker-img {
      width: min(54vw, 260px);
    }

    .why-right {
      order: 3;
      align-self: center;
      padding-right: 0;
      margin-top: var(--space-sm);
      width: auto;
      z-index: 3;
    }

    .qr-placeholder svg {
      width: 150px;
      height: 150px;
    }

    .banner-curve {
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border-radius: var(--radius-lg);
    }

    .banner-curve :global(svg) {
      bottom: 40%;
    }
  }
</style>
