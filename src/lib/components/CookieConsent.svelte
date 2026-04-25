<script>
  import { onMount } from 'svelte';
  import { getReferral, pushReferralToAnalytics } from '$lib/utils/referral.js';

  let showBanner = $state(false);

  // Function to dynamically inject analytics scripts
  function injectAnalytics() {
    // 1. Inject Microsoft Clarity
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];
        if(y && y.parentNode) y.parentNode.insertBefore(t,y);
        else document.head.appendChild(t);
    })(window, document, "clarity", "script", "tosvjz9v3f");

    // 2. Inject Google Analytics (gtag)
    const gtagScript = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-94PH46K68C";
    document.head.appendChild(gtagScript);

    const gtagInline = document.createElement('script');
    gtagInline.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-94PH46K68C');
    `;
    document.head.appendChild(gtagInline);
  }

  onMount(() => {
    const consent = localStorage.getItem('juma_cookie_consent');
    if (consent === 'granted') {
      injectAnalytics();
      // Push referral tag to analytics if we have one
      const ref = getReferral();
      if (ref) pushReferralToAnalytics(ref);
    } else if (consent !== 'denied') {
      // Show banner if no choice has been made
      showBanner = true;
    }
  });

  function acceptCookies() {
    localStorage.setItem('juma_cookie_consent', 'granted');
    injectAnalytics();
    // Push referral tag to newly-injected analytics
    const ref = getReferral();
    if (ref) {
      // Small delay to let GA/Clarity scripts initialise
      setTimeout(() => pushReferralToAnalytics(ref), 500);
    }
    showBanner = false;
  }

  function declineCookies() {
    localStorage.setItem('juma_cookie_consent', 'denied');
    showBanner = false;
  }
</script>

{#if showBanner}
  <div class="cookie-banner" role="dialog" aria-live="polite" aria-labelledby="cookie-heading">
    <div class="cookie-content">
      <div class="cookie-text">
        <h4 id="cookie-heading">We value your privacy</h4>
        <p>We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.</p>
      </div>
      <div class="cookie-actions">
        <button class="btn-decline" onclick={declineCookies}>Decline</button>
        <button class="btn-accept" onclick={acceptCookies}>Accept All</button>
      </div>
    </div>
  </div>
{/if}

<style>
  .cookie-banner {
    position: fixed;
    bottom: var(--space-xl);
    left: var(--space-xl);
    right: var(--space-xl);
    max-width: 900px;
    margin: 0 auto;
    background: var(--white);
    padding: var(--space-lg) var(--space-xl);
    border-radius: var(--radius-lg);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05);
    z-index: 9999;
    animation: slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  .cookie-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--space-2xl);
  }

  .cookie-text h4 {
    font-size: var(--fs-md);
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: var(--space-xs);
  }

  .cookie-text p {
    font-size: var(--fs-sm);
    color: var(--text-secondary);
    line-height: 1.5;
    margin: 0;
  }

  .cookie-actions {
    display: flex;
    gap: var(--space-sm);
    flex-shrink: 0;
  }

  .cookie-actions button {
    padding: 10px 20px;
    font-size: var(--fs-sm);
    font-weight: 600;
    border-radius: 50px;
    cursor: pointer;
    transition: all var(--transition-fast);
  }

  .btn-decline {
    background: transparent;
    border: 1px solid var(--gray-300);
    color: var(--text-secondary);
  }

  .btn-decline:hover {
    background: var(--gray-bg);
    color: var(--text-primary);
  }

  .btn-accept {
    background: var(--green-primary);
    border: 1px solid var(--green-primary);
    color: var(--white);
  }

  .btn-accept:hover {
    background: var(--green-dark);
    border-color: var(--green-dark);
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    .cookie-banner {
      bottom: var(--space-md);
      left: var(--space-md);
      right: var(--space-md);
      padding: var(--space-md);
    }

    .cookie-content {
      flex-direction: column;
      align-items: flex-start;
      gap: var(--space-md);
    }

    .cookie-actions {
      width: 100%;
      justify-content: stretch;
    }

    .cookie-actions button {
      flex: 1;
    }
  }
</style>
