<script>
  /** @type {{ image: string, title: string, description: string, alt?: string }} */
  let { image, title, description, alt } = $props();
</script>

<div class="pain-card">
  <div class="card-image-wrapper">
    <enhanced:img
      src={image}
      alt={alt || title}
      sizes="(min-width: 1024px) 302px, 90vw"
      loading="lazy"
      class="pain-card-img"
    />
    <div class="badge">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
        <path
          d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
        />
      </svg>
    </div>
  </div>
  <h3>{title}</h3>
  <p>{description}</p>
</div>

<style>
  .pain-card {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 362px;
    min-height: 457.42px;
    border-radius: 18px;
    background: var(--gray-bg);
    overflow: hidden;
    text-align: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 640px) {
    .pain-card {
      max-width: 100%;
    }
  }

  .card-image-wrapper {
    position: relative;
    width: calc(100% - 60px);
    max-width: 302px;
    height: 255.4px;
    margin: 20px auto 0;
    border-radius: 12px;
    overflow: hidden;
    flex-shrink: 0;
  }

  @media (max-width: 640px) {
    .card-image-wrapper {
      width: calc(100% - 60px);
      height: auto;
      aspect-ratio: 302 / 255.4;
    }
  }

  .pain-card-img {
    width: 100%;
    height: 100%;
  }

  .badge {
    position: absolute;
    top: 12px;
    left: 12px;
    width: 44px;
    height: 44px;
    background: #dc3545;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .badge svg {
    width: 28px;
    height: 28px;
  }

  h3 {
    font-family: Arial, sans-serif;
    font-size: 24px;
    font-weight: 500;
    line-height: 28.8px;
    color: var(--text-primary);
    margin: 16px 8px 0;
    padding: 0;
  }

  p {
    font-family: Arial, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 22.68px;
    color: var(--text-secondary);
    margin: 12px 8px;
    padding: 0 16px;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
