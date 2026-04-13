<script>
  let mobileMenuOpen = $state(false);

  function toggleMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }

  function closeMenu() {
    mobileMenuOpen = false;
  }

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "How it Works", href: "#how-it-works" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
    { label: "Privacy Policy", href: "#footer" },
  ];
</script>

<nav class="navbar" id="navbar">
  <div class="nav-container">
    <a href="#home" class="logo" onclick={closeMenu}>
      <span class="logo-text">JumaLink</span>
    </a>

    <ul class="nav-links" class:open={mobileMenuOpen}>
      {#each navLinks as link}
        <li>
          <a href={link.href} onclick={closeMenu}>{link.label}</a>
        </li>
      {/each}
    </ul>

    <a href="#contact" class="cta-btn">
      Download Now
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    </a>

    <button
      class="hamburger"
      onclick={toggleMenu}
      aria-label="Toggle menu"
      aria-expanded={mobileMenuOpen}
    >
      <span class="bar" class:open={mobileMenuOpen}></span>
      <span class="bar" class:open={mobileMenuOpen}></span>
      <span class="bar" class:open={mobileMenuOpen}></span>
    </button>
  </div>
</nav>

{#if mobileMenuOpen}
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    class="overlay"
    onclick={closeMenu}
    onkeydown={(e) => e.key === "Escape" && closeMenu()}
    role="presentation"
  ></div>
{/if}

<style>
  .navbar {
    position: absolute;
    top: 26px;
    left: 0;
    right: 0;
    margin-inline: auto;
    z-index: 1000;
    width: calc(100% - 40px);
    max-width: 1280px;
    background: var(--white);
    border-radius: 24px;
    box-shadow: var(--shadow-md);
    padding: 0 var(--space-lg);
  }

  .nav-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: var(--nav-height);
  }

  .logo {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    font-size: var(--fs-xl);
    font-weight: 700;
    color: var(--green-primary);
    text-decoration: none;
  }

  .logo-text {
    font-family: "Figtree", sans-serif;
    font-size: var(--fs-3xl);
    background-size: 200% auto;
    background: linear-gradient(180deg, #428a4e 22.6%, #112414 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .nav-links {
    display: flex;
    gap: var(--space-2xl);
    list-style: none;
  }

  .nav-links a {
    font-size: var(--fs-md);
    font-weight: 400;
    color: var(--text-primary);
    transition: color var(--transition-fast);
    text-decoration: none;
  }

  .nav-links a:hover {
    color: var(--green-primary);
  }

  .cta-btn {
    display: inline-flex;
    align-items: center;
    gap: var(--space-sm);
    background: var(--text-primary);
    color: var(--white);
    padding: 10px 20px;
    border-radius: 16px;
    font-size: var(--fs-sm);
    font-weight: 500;
    text-decoration: none;
    transition: background var(--transition-fast);
  }

  .cta-btn:hover {
    background: var(--green-dark);
  }

  .hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    padding: 8px;
    cursor: pointer;
    background: none;
    border: none;
  }

  .bar {
    width: 24px;
    height: 2px;
    background: var(--text-primary);
    border-radius: 2px;
    transition: all var(--transition-base);
  }

  .bar.open:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }
  .bar.open:nth-child(2) {
    opacity: 0;
  }
  .bar.open:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
  }

  .overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 999;
  }

  @media (max-width: 990px) {
    .navbar {
      top: 8px;
      width: calc(100% - 24px);
      padding: 0 var(--space-md);
      border-radius: 20px;
    }

    .nav-links {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      flex-direction: column;
      background: var(--white);
      z-index: 1001;
      padding: 100px var(--space-xl) var(--space-xl);
      gap: var(--space-lg);
      transform: translateX(100%);
      transition:
        transform var(--transition-base),
        visibility var(--transition-base);
      visibility: hidden;
    }

    .nav-links.open {
      transform: translateX(0);
      visibility: visible;
    }

    .nav-links a {
      font-size: var(--fs-lg);
    }

    .cta-btn {
      display: none;
    }

    .hamburger {
      display: flex;
      z-index: 1002;
    }
  }
</style>
