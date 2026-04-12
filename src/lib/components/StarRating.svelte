<script>
  /** @type {{ rating: number, size?: string }} */
  let { rating, size = '16px' } = $props();

  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
</script>

<div 
  class="star-rating" 
  style="--star-size: {size}"
  role="img"
  aria-label="{rating} out of 5 stars"
>
  {#each Array(5) as _, i}
    {#if i < fullStars}
      <span class="star filled" aria-hidden="true">★</span>
    {:else if i === fullStars && hasHalf}
      <span class="star half" aria-hidden="true">★</span>
    {:else}
      <span class="star empty" aria-hidden="true">★</span>
    {/if}
  {/each}
</div>

<style>
  .star-rating {
    display: flex;
    gap: 2px;
  }

  .star {
    font-size: var(--star-size);
    line-height: 1;
  }

  .star.filled {
    color: var(--orange-star);
  }

  .star.half {
    color: var(--orange-star);
    opacity: 0.7;
  }

  .star.empty {
    color: var(--gray-300);
  }
</style>
