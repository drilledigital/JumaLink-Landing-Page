<script>
  import QRCode from "./QRCode.svelte";
  import ArrowSign from "./ArrowSign.svelte";
  import CurvyLine from "./CurvyLine.svelte";
  import DollarSign from "./DollarSign.svelte";
  import FeatureCard from "./FeatureCard.svelte";
  import SectionHeading from "./SectionHeading.svelte";
  import TwentyFourHourSign from "./24HourSign.svelte";
  import RightArrowSign from "./RightArrowSign.svelte";

  import jumaLinkQrImg from "$lib/assets/JumaLink-1024.svg";
  import { features, whyUsePoints } from "$lib/data/features.js";
  import femalePlumberImg from "$lib/assets/female-plumber-working.png";

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
                <span style="font-size: 1.1rem;">{point.text}</span>
              </li>
            {/each}
          </ul>
        </div>

        <div class="why-right">
          <div class="qr-placeholder">
            <img src={jumaLinkQrImg} alt="JumaLink QR code" class="qr-image" loading="lazy" />
          </div>

          <div class="qr-icon-container">
            <span class="qr-icon"><QRCode /></span>
            <p class="qr-label">Scan to Try JumaLink</p>
          </div>
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
    padding: 0;
    overflow: visible;
  }

  .why-content {
    position: relative;
    min-height: clamp(320px, 34vw, 360px);
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: var(--space-3xl) var(--space-2xl) 0;
    z-index: 2;
  }

  .why-left h3 {
    font-size: 1.5rem;
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
    width: 26px;
    height: 26px;
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
    width: clamp(200px, 26vw, 240px);
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
    bottom: 0%;
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
    border: 1px solid #dddddd;
    border-radius: 0.4rem;
    padding: 0.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: var(--shadow-sm);
  }

  .qr-image {
    width: 180px;
    height: 180px;
    object-fit: contain;
    display: block;
  }

  .qr-icon-container {
    display: flex;
    gap: 0.65rem;
    text-align: center;
    margin-top: var(--space-md);
  }

  .qr-icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .qr-label {
    color: #1a1a1a;
    font-size: 0.8rem;
  }

  .banner-curve {
    position: absolute;
    top: 0;
    bottom: 13%;
    left: 0;
    right: 0;
    z-index: 1;
    opacity: 0.95;
    overflow: hidden;
    pointer-events: none;
  }

  .banner-curve :global(svg) {
    position: absolute;
    left: 0%;
    bottom: 22px;
    width: 120%;
    height: auto;
  }

  @media (max-width: 1100px) {
    .features-grid {
      grid-template-columns: 1fr;
      max-width: 420px;
      margin-left: auto;
      margin-right: auto;
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
      bottom: 3%;
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

    .qr-image {
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
