<script>
  let email = $state('');

  function handleSubscribe(e) {
    e.preventDefault();
    // Placeholder for subscribe logic
    email = '';
  }
</script>

<footer class="footer" id="footer">
  <div class="container">
    <!-- Top Area -->
    <div class="footer-top">
      <div class="footer-headline">
        <h2>Reliable <span class="accent">Artisans</span> for<br />Your Home and business.</h2>
      </div>
      <div class="footer-subscribe">
        <h3>Be first to receive new updates!</h3>
        <form class="subscribe-form" onsubmit={handleSubscribe}>
          <input
            type="email"
            placeholder="Enter your email"
            bind:value={email}
            required
          />
          <button type="submit" class="subscribe-btn">Subscribe</button>
        </form>
        <div class="social-icons">
          <a href="#" aria-label="Facebook">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="#" aria-label="Instagram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
          <a href="#" aria-label="X (Twitter)">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="#" aria-label="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="#" aria-label="YouTube">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </a>
        </div>
      </div>
    </div>

    <!-- Footer Links -->
    <div class="footer-links">
      <div class="link-col">
        <h4>Contact</h4>
        <ul>
          <li>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22,7 12,13 2,7"/></svg>
            <span>support@jumalink.com</span>
          </li>
          <li>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
            <span>(+233)</span>
          </li>
          <li>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>XXXXXXXXXXXX<br />XXXXXX XXX</span>
          </li>
        </ul>
      </div>

      <div class="link-col">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="#home" class="active-link">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#how-it-works">How it Works</a></li>
          <li><a href="#waitlist">Join Waitlist</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <div class="link-col">
        <h4>Hire A Worker</h4>
        <ul>
          <li><a href="#channel">Join the channel</a></li>
          <li><a href="#call">Book A Call</a></li>
        </ul>
      </div>
    </div>

    <!-- Watermark -->
    <div class="watermark">
      <span>JumaLink</span>
    </div>
  </div>
</footer>

<style>
  .footer {
    background: var(--white);
    padding: var(--space-5xl) 0 0;
    overflow: hidden;
  }

  .footer-top {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-3xl);
    margin-bottom: var(--space-3xl);
    padding-bottom: var(--space-2xl);
    border-bottom: 1px solid var(--gray-200);
  }

  .footer-headline h2 {
    font-size: var(--fs-4xl);
    font-weight: 700;
    color: var(--text-primary);
    line-height: 1.2;
  }

  .footer-headline .accent {
    color: var(--green-accent);
  }

  .footer-subscribe h3 {
    font-size: var(--fs-lg);
    font-weight: 600;
    margin-bottom: var(--space-md);
  }

  .subscribe-form {
    display: flex;
    gap: var(--space-sm);
    margin-bottom: var(--space-lg);
  }

  .subscribe-form input {
    flex: 1;
    padding: 12px 20px;
    border: 1.5px solid var(--gray-300);
    border-radius: 50px;
    font-size: var(--fs-sm);
    background: var(--white);
  }

  .subscribe-form input:focus {
    border-color: var(--green-accent);
  }

  .subscribe-btn {
    padding: 12px 28px;
    background: var(--text-primary);
    color: var(--white);
    border-radius: 50px;
    font-size: var(--fs-sm);
    font-weight: 600;
    cursor: pointer;
    transition: background var(--transition-fast);
  }

  .subscribe-btn:hover {
    background: var(--green-dark);
  }

  .social-icons {
    display: flex;
    gap: var(--space-md);
  }

  .social-icons a {
    color: var(--text-primary);
    transition: color var(--transition-fast);
    display: flex;
    align-items: center;
  }

  .social-icons a:hover {
    color: var(--green-primary);
  }

  /* Footer Links */
  .footer-links {
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr;
    gap: var(--space-3xl);
    padding-bottom: var(--space-3xl);
  }

  .link-col h4 {
    font-size: var(--fs-sm);
    font-weight: 700;
    color: var(--green-primary);
    margin-bottom: var(--space-lg);
  }

  .link-col ul {
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
  }

  .link-col li {
    display: flex;
    align-items: flex-start;
    gap: var(--space-sm);
    font-size: var(--fs-sm);
    color: var(--text-secondary);
  }

  .link-col li svg {
    flex-shrink: 0;
    margin-top: 2px;
    color: var(--text-secondary);
  }

  .link-col a {
    font-size: var(--fs-sm);
    color: var(--text-secondary);
    transition: color var(--transition-fast);
    text-decoration: none;
  }

  .link-col a:hover {
    color: var(--green-primary);
  }

  .active-link {
    color: var(--green-accent) !important;
  }

  /* Watermark */
  .watermark {
    position: relative;
    height: 180px;
    overflow: hidden;
  }

  .watermark span {
    position: absolute;
    bottom: -40px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 14rem;
    font-weight: 800;
    white-space: nowrap;
    color: var(--green-primary);
    opacity: 0.08;
    letter-spacing: -4px;
    user-select: none;
  }

  @media (max-width: 1024px) {
    .footer-top {
      grid-template-columns: 1fr;
      gap: var(--space-xl);
    }

    .watermark span {
      font-size: 8rem;
    }
  }

  @media (max-width: 768px) {
    .footer-links {
      grid-template-columns: 1fr;
      gap: var(--space-xl);
    }

    .subscribe-form {
      flex-direction: column;
    }

    .watermark {
      height: 100px;
    }

    .watermark span {
      font-size: 5rem;
      bottom: -20px;
    }
  }
</style>
