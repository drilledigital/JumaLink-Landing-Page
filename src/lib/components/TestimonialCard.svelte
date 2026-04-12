<script>
  import StarRating from './StarRating.svelte';

  /** @type {{ name: string, role: string, avatar: string, rating: number, text: string }} */
  let { name, role, avatar, rating, text } = $props();
</script>

<div class="testimonial-card">
  <div class="card-header">
    <img src={avatar} alt={name} loading="lazy" class="avatar" />
    <div class="user-info">
      <span class="user-name">{name}</span>
      <span class="user-role">{role}</span>
    </div>
  </div>
  <StarRating {rating} size="16px" />
  <p class="review-text">{text}</p>
</div>

<style>
  .testimonial-card {
    background: var(--white);
    border-radius: var(--radius-md);
    padding: var(--space-xl);
    border: 1px solid var(--gray-200);
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
    transition: box-shadow var(--transition-base);
  }

  .testimonial-card:hover {
    box-shadow: var(--shadow-sm);
  }

  .card-header {
    display: flex;
    align-items: center;
    gap: var(--space-md);
  }

  .avatar {
    width: 44px;
    height: 44px;
    border-radius: var(--radius-full);
    object-fit: cover;
  }

  .user-info {
    display: flex;
    flex-direction: column;
  }

  .user-name {
    font-size: var(--fs-sm);
    font-weight: 600;
    color: var(--text-primary);
  }

  .user-role {
    font-size: var(--fs-xs);
    color: var(--text-secondary);
  }

  .review-text {
    font-size: var(--fs-sm);
    color: var(--text-secondary);
    line-height: 1.7;
  }
</style>
