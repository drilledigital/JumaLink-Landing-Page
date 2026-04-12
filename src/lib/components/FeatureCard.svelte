<script>
  /** @type {{ title: string, description: string, image: string }} */
  let { title, description, image } = $props();
</script>

<div class="feature-card">
  <div class="card-top">
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
  <div class="card-image">
    {#if image === 'bubbles'}
      <div class="bubbles-graphic">
        <span class="bubble b1">Mechanics</span>
        <span class="bubble b2">Read blog</span>
        <span class="bubble b3">Surprise</span>
        <span class="bubble b4">Direct Deposit</span>
        <span class="bubble b5">Finance</span>
        <span class="bubble b6">QuikPay money</span>
        <span class="bubble b7">Blond</span>
      </div>
    {:else if image === 'artisans'}
      <div class="artisans-collage">
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" alt="Artisan 1" loading="lazy" class="collage-img c1" />
        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop" alt="Artisan 2" loading="lazy" class="collage-img c2" />
        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop" alt="Artisan 3" loading="lazy" class="collage-img c3" />
        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop" alt="Artisan 4" loading="lazy" class="collage-img c4" />
      </div>
    {:else}
      <div class="app-screenshot">
        <div class="phone-frame">
          <div class="phone-notch"></div>
          <div class="phone-screen">
            <div class="screen-header">
              <span>← </span>
              <span class="filter-btn">≡ Filters</span>
            </div>
            <div class="search-bar">🔍 electrician</div>
            <div class="tabs">
              <span class="tab active">Verified</span>
              <span class="tab">Top Rated (4+)</span>
            </div>
            <p class="results-text">2 artisans found</p>
            <div class="artisan-results">
              <div class="artisan-mini">
                <div class="mini-avatar"></div>
                <span>Ernest Ocloo</span>
              </div>
              <div class="artisan-mini">
                <div class="mini-avatar"></div>
                <span>Daniel Nulojah</span>
              </div>
            </div>
          </div>
        </div>
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
    padding: var(--space-md);
  }

  /* Bubbles graphic */
  .bubbles-graphic {
    position: relative;
    width: 100%;
    height: 180px;
  }

  .bubble {
    position: absolute;
    padding: 8px 16px;
    border-radius: 50px;
    font-size: var(--fs-xs);
    font-weight: 500;
    white-space: nowrap;
  }

  .b1 { background: #C8E6C9; top: 10px; left: 30%; }
  .b2 { background: #FFCC80; top: 50px; left: 10%; }
  .b3 { background: #FFE082; top: 40px; left: 45%; }
  .b4 { background: #F8BBD0; top: 10px; right: 5%; }
  .b5 { background: #D1C4E9; bottom: 30px; left: 15%; }
  .b6 { background: #B3E5FC; bottom: 20px; left: 45%; }
  .b7 { background: #B2DFDB; bottom: 60px; left: 40%; }

  /* Artisans collage */
  .artisans-collage {
    position: relative;
    width: 100%;
    height: 200px;
  }

  .collage-img {
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: var(--radius-full);
    object-fit: cover;
    border: 3px solid var(--white);
    box-shadow: var(--shadow-sm);
  }

  .c1 { top: 10px; left: 20%; }
  .c2 { top: 30px; left: 50%; }
  .c3 { bottom: 10px; left: 10%; }
  .c4 { bottom: 20px; left: 55%; }

  /* App screenshot */
  .app-screenshot {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .phone-frame {
    width: 180px;
    background: var(--white);
    border-radius: 20px;
    padding: 8px;
    box-shadow: var(--shadow-md);
    border: 1px solid var(--gray-200);
  }

  .phone-notch {
    width: 60px;
    height: 6px;
    background: var(--gray-300);
    border-radius: 3px;
    margin: 4px auto 8px;
  }

  .phone-screen {
    padding: 8px;
  }

  .screen-header {
    display: flex;
    justify-content: space-between;
    font-size: 10px;
    margin-bottom: 8px;
  }

  .filter-btn {
    color: var(--green-accent);
    font-weight: 500;
    font-size: 9px;
  }

  .search-bar {
    background: var(--gray-bg);
    padding: 6px 8px;
    border-radius: 6px;
    font-size: 9px;
    margin-bottom: 6px;
  }

  .tabs {
    display: flex;
    gap: 8px;
    margin-bottom: 6px;
  }

  .tab {
    font-size: 8px;
    padding: 3px 6px;
    border-radius: 4px;
    background: var(--gray-bg);
  }

  .tab.active {
    background: var(--green-light);
    color: var(--green-primary);
  }

  .results-text {
    font-size: 8px !important;
    color: var(--text-secondary) !important;
    margin-bottom: 6px;
  }

  .artisan-results {
    display: flex;
    gap: 8px;
  }

  .artisan-mini {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    font-size: 7px;
  }

  .mini-avatar {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    background: var(--gray-200);
  }
</style>
