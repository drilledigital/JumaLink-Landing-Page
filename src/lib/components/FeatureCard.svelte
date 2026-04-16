<script>
  import searchResultsImg from "$lib/assets/search-results.jpeg";

  /** @type {{ title: string, description: string, image: string }} */
  let { title, description, image } = $props();
</script>

<div class="feature-card">
  <div class="card-top">
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
  <div class="card-image">
    {#if image === "bubbles"}
      <div class="bubbles-graphic">
        <span class="bubble b1">Mechanics</span>
        <span class="bubble b2">Carpenters</span>
        <span class="bubble b3">Electricians</span>
        <span class="bubble b4">Plumbers</span>
        <span class="bubble b5">Painters</span>
        <span class="bubble b6">Cleaners</span>
        <span class="bubble b7">Gardners</span>
      </div>
    {:else if image === "artisans"}
      <div class="artisans-collage">
        <!-- Row 1: 3 images across the top -->
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
          alt="Artisan 1"
          loading="lazy"
          class="collage-img c1"
        />
        <img
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop"
          alt="Artisan 2"
          loading="lazy"
          class="collage-img c2"
        />
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop"
          alt="Artisan 3"
          loading="lazy"
          class="collage-img c3"
        />
        <!-- Row 2: 2 images nestled in the gaps below -->
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
          alt="Artisan 4"
          loading="lazy"
          class="collage-img c4"
        />
        <img
          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop"
          alt="Artisan 5"
          loading="lazy"
          class="collage-img c5"
        />
      </div>
    {:else}
      <div class="app-screenshot">
        <enhanced:img
          src={searchResultsImg}
          alt="JumaLink search results showing verified artisans"
          sizes="(min-width: 1024px) 340px, 90vw"
          loading="lazy"
          class="screenshot-img"
        />
      </div>
    {/if}
  </div>
</div>

<style>
  .feature-card {
    background: var(--gray-100);
    border-radius: var(--radius-lg);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    border: 1px solid var(--gray-200);
    height: 100%;
  }

  .card-top {
    padding: var(--space-xl);
  }

  h3 {
    font-size: var(--fs-lg);
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: var(--space-sm);
  }

  p {
    font-size: var(--fs-sm);
    color: var(--text-secondary);
    line-height: 1.6;
  }

  .card-image {
    flex: 1;
    min-height: 200px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: 0 var(--space-lg);
  }

  /* Bubbles graphic */
  .bubbles-graphic {
    position: relative;
    width: 100%;
    height: 200px;
  }

  .bubble {
    position: absolute;
    padding: 10px 24px;
    border-radius: 50px;
    font-size: var(--fs-sm);
    font-weight: 500;
    white-space: nowrap;
  }

  .b1 {
    background: #f3e8b5;
    top: -10%;
    left: 20%;
    transform: rotate(-5deg);
    color: #000;
  }
  .b2 {
    background: #ade36d;
    top: 70px;
    left: 0;
    transform: rotate(-28deg);
    color: #000;
  }
  .b3 {
    background: #e6ccb8;
    top: 50px;
    left: 35%;
    transform: rotate(-35deg);
    color: #000;
  }
  .b4 {
    background: #f2b8c6;
    top: 30px;
    right: -5%;
    transform: rotate(45deg);
    color: #000;
  }
  .b5 {
    background: #c8c2e6;
    bottom: 25px;
    left:0;
    transform: rotate(-15deg);
    color: #000;
  }
  .b6 {
    background: #cec4ff;
    bottom: 35px;
    right: -5%;
    transform: rotate(24deg);
    color: #000;
  }
  .b7 {
    background: #e6d5d2;
    bottom: 28px;
    left: 34%;
    transform: rotate(0deg);
    color: #000;
  }

  /* Artisans collage */
  .artisans-collage {
    position: relative;
    width: 100%;
    height: 240px;
  }

  .collage-img {
    position: absolute;
    width: 130px;
    height: 130px;
    border-radius: var(--radius-full);
    object-fit: cover;
    border: 1px solid var(--white);
    box-shadow: var(--shadow-sm);
  }

  /* Row 1 — 3 large overlapping circles, mostly visible */
  .c1 {
    top: 55px;
    left: calc(50% - 180px);
    z-index: 2;
  }
  .c2 {
    top: 55px;
    left: calc(50% - 65px);
    z-index: 3;
  }
  .c3 {
    top: 55px;
    left: calc(50% + 50px);
    z-index: 2;
  }

  /* Row 2 — 2 circles nestled in gaps, clipped at bottom */
  .c4 {
    top: 150px;
    left: calc(50% - 120px);
    z-index: 1;
  }
  .c5 {
    top: 150px;
    left: calc(50% + -10px);
    z-index: 1;
  }

  /* App screenshot */
  .app-screenshot {
    width: 90%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    overflow: hidden;
    padding-top: 0;
  }

  .screenshot-img {
    width: 100%;
    height: 100%;
    border-radius: var(--radius-lg) var(--radius-lg) 0 0;
    object-fit: cover;
    object-position: center top;
    box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.12);
  }
</style>
