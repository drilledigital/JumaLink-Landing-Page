<script>
  /** @type {{ image: string, title: string, description: string }} */
  let { image, title, description } = $props();
</script>

<div class="pain-card">
  <div class="card-image-wrapper">
    <img src={image} alt={title} loading="lazy" />
    <div class="badge">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
        <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/>
      </svg>
    </div>
  </div>
  <h3>{title}</h3>
  <p>{description}</p>
</div>

<style>
  .pain-card {
    text-align: center;
    max-width: 340px;
  }

  .card-image-wrapper {
    position: relative;
    width: 100%;
    aspect-ratio: 4/3;
    border-radius: var(--radius-md);
    overflow: hidden;
    margin-bottom: var(--space-lg);
  }

  .card-image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(60%);
  }

  .badge {
    position: absolute;
    top: 12px;
    left: 12px;
    width: 32px;
    height: 32px;
    background: var(--red-badge);
    border-radius: var(--radius-full);
    display: flex;
    align-items: center;
    justify-content: center;
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
</style>
