<script>
  import StarRating from './StarRating.svelte';

  /** @type {{ name: string, title: string, description: string, rate: string, rating: number, availability: string, location: string, image: string }} */
  let { name, title, description, rate, rating, availability, location, image } = $props();
</script>

<article class="artisan-card">
  <div class="card-image">
    <img src={image} alt={title} loading="lazy" />
  </div>
  <div class="card-content">
    <span class="artisan-name">{name}</span>
    <h3>{title}</h3>
    <p class="artisan-description">{description}</p>
    <p class="artisan-rate"><strong>Rate: {rate}</strong></p>
    <div class="card-footer">
      <div class="footer-left">
        <div class="rating-badge">
          <span class="rating-value">{rating}</span>
          <StarRating rating={rating} size="12px" />
        </div>
        <span class="availability">{availability}</span>
      </div>
      <div class="footer-right">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
        <span>{location}</span>
      </div>
    </div>
  </div>
</article>

<style>
  .artisan-card {
    display: grid;
    grid-template-columns: 280px 1fr;
    background: var(--white);
    border-radius: var(--radius-lg);
    overflow: hidden;
    border: 1px solid var(--gray-200);
    transition: box-shadow var(--transition-base);
    max-width: 780px;
    margin: 0 auto;
  }

  .artisan-card:hover {
    box-shadow: var(--shadow-md);
  }

  .card-image {
    aspect-ratio: 4/3;
    overflow: hidden;
  }

  .card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .card-content {
    padding: var(--space-xl);
    display: flex;
    flex-direction: column;
  }

  .artisan-name {
    font-size: var(--fs-sm);
    color: var(--text-secondary);
    margin-bottom: var(--space-xs);
  }

  h3 {
    font-size: var(--fs-2xl);
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: var(--space-sm);
  }

  .artisan-description {
    font-size: var(--fs-sm);
    color: var(--text-secondary);
    line-height: 1.7;
    margin-bottom: var(--space-md);
    flex: 1;
  }

  .artisan-rate {
    font-size: var(--fs-sm);
    color: var(--text-primary);
    margin-bottom: var(--space-md);
  }

  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: var(--space-md);
    border-top: 1px solid var(--gray-200);
  }

  .footer-left {
    display: flex;
    align-items: center;
    gap: var(--space-md);
  }

  .rating-badge {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: var(--fs-sm);
    font-weight: 600;
  }

  .availability {
    font-size: var(--fs-sm);
    color: var(--text-secondary);
    padding: 4px 12px;
    border: 1px solid var(--gray-200);
    border-radius: 50px;
  }

  .footer-right {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: var(--fs-sm);
    color: var(--text-secondary);
  }

  @media (max-width: 768px) {
    .artisan-card {
      grid-template-columns: 1fr;
    }

    .card-image {
      aspect-ratio: 16/9;
    }

    .card-footer {
      flex-direction: column;
      align-items: flex-start;
      gap: var(--space-sm);
    }
  }
</style>
