<script>
  import { base } from "$app/paths";
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import { PLAY_STORE_URL } from "$lib/config/appStoreLinks.js";

  const supportEmail = "support@jumalink.com";
  const supportMailto = `mailto:${supportEmail}?subject=${encodeURIComponent("JumaLink Account Deletion Request")}`;
</script>

<svelte:head>
  <title>Delete your account — JumaLink</title>
  <meta
    name="description"
    content="How to delete your JumaLink account and associated data, in line with Google Play account deletion requirements."
  />
  <meta name="robots" content="noindex, nofollow" />
  <link rel="canonical" href="https://jumalink.com/delete-me" />
</svelte:head>

<Navbar />

<main class="delete-me-main" id="main-content">
  <article class="container delete-me-article">
    <h1>Delete your JumaLink account</h1>
    <p class="lede">
      If you created an account in the JumaLink app, you can request permanent
      deletion of your account and the personal data tied to it. This page is
      our <strong>web-based</strong> way to meet Google Play's requirement that
      account deletion be available both <strong>in the app</strong> and
      <strong>outside the app</strong> (for example, on this website).
    </p>

    <p
      class="note"
      style="background: var(--red-badge); color: var(--white); opacity: 0.9"
    >
      Account deletion is irreversible. Please proceed with caution as our team
      cannot recover your data once it is deleted.
    </p>

    <section aria-labelledby="in-app-heading">
      <h2 id="in-app-heading">Option 1 — Delete in the app (recommended)</h2>
      <p>
        The fastest way to delete your account is from the device where you use
        JumaLink:
      </p>
      <ol class="steps">
        <li>Open the <strong>JumaLink</strong> app.</li>
        <li>Tap on your profile picture (at the top right of the screen).</li>
        <li>
          Tap on <strong>Preferences</strong>.
        </li>
        <li>
          Under the <strong>Account</strong> section, tap on
          <strong>Privacy Settings</strong>.
        </li>
        <li>
          Tap on <strong>Manage Your Data</strong>.
        </li>
        <li>
          Tap on <strong>Delete Account</strong> and confirm the deletion on the
          pop-up.
        </li>
      </ol>
      <p class="note">
        <strong>Important:</strong> Temporarily disabling your account, logging
        out, or uninstalling the app is <strong>not</strong> the same as account
        deletion. Deletion must be completed through the in-app flow above or the
        email option below.
      </p>
    </section>

    <section aria-labelledby="email-heading">
      <h2 id="email-heading">Option 2 — Request deletion by email (web)</h2>
      <p>
        If you cannot use the app, you may request deletion by contacting us
        from the email address associated with your JumaLink account:
      </p>
      <p class="cta-line">
        <a class="email-btn" href={supportMailto}>{supportEmail}</a>
      </p>
      <p>
        Please use the subject line <strong
          >“JumaLink Account Deletion Request”</strong
        >
        and include the phone number or email you used to register, so we can verify
        your identity before processing the request. If possible, send the email
        using the same mail address used to register the account. If you are not
        able to provide the mail address used to register the account, we may contact
        you for verification before processing the request.
      </p>
    </section>

    <section aria-labelledby="what-happens-heading">
      <h2 id="what-happens-heading">What happens after you request deletion</h2>
      <ul>
        <li>
          We will <strong>delete your app account</strong> and, as part of that
          process,
          <strong>delete the user data associated with that account</strong>,
          except where we are allowed or required to keep limited information
          (see below).
        </li>
        <li>
          Processing may take a short time after you confirm deletion in-app or
          after we verify an email request.
        </li>
      </ul>
    </section>

    <section aria-labelledby="retention-heading">
      <h2 id="retention-heading">Data we may retain</h2>
      <p>
        In limited cases we may need to keep certain information after account
        deletion — for example to meet legal obligations, respond to valid legal
        requests, resolve disputes, prevent fraud or abuse, or enforce our
        terms. When we do, we keep only what is necessary and only for as long
        as needed. For more detail, see the privacy disclosures linked from our
        <a href={PLAY_STORE_URL}>Google Play listing</a>
        and any privacy policy referenced there.
      </p>
    </section>

    <section aria-labelledby="help-heading">
      <h2 id="help-heading">Questions</h2>
      <p>
        For help with deletion or privacy questions, contact us at
        <a href={supportMailto}>{supportEmail}</a>.
      </p>
    </section>
  </article>
</main>

<Footer />

<style>
  .delete-me-main {
    padding-top: calc(var(--nav-height) + 48px + 26px);
    padding-bottom: var(--space-4xl);
    min-height: 60vh;
    background: var(--white);
  }

  .delete-me-article {
    max-width: 720px;
  }

  .delete-me-article h1 {
    font-size: var(--fs-3xl);
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: var(--space-md);
    line-height: 1.2;
  }

  .lede {
    font-size: var(--fs-lg);
    color: var(--text-secondary);
    margin-bottom: var(--space-2xl);
    line-height: 1.6;
  }

  .delete-me-article h2 {
    font-size: var(--fs-xl);
    font-weight: 600;
    color: var(--text-primary);
    margin-top: var(--space-2xl);
    margin-bottom: var(--space-md);
    line-height: 1.3;
  }

  .delete-me-article section:first-of-type h2 {
    margin-top: 0;
  }

  .delete-me-article p,
  .delete-me-article li {
    font-size: var(--fs-base);
    color: var(--text-secondary);
    line-height: 1.65;
  }

  .delete-me-article p {
    margin-bottom: var(--space-md);
  }

  .steps {
    margin: var(--space-md) 0 var(--space-lg);
    padding-left: var(--space-xl);
    list-style: decimal;
  }

  .steps li {
    margin-bottom: var(--space-sm);
    padding-left: var(--space-xs);
  }

  .steps li::marker {
    font-weight: 600;
    color: var(--green-primary);
  }

  .note {
    padding: var(--space-md) var(--space-lg);
    background: var(--green-light);
    border-radius: var(--radius-md);
    color: var(--text-primary);
  }

  .cta-line {
    margin: var(--space-lg) 0;
  }

  .email-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 48px;
    padding: 0 var(--space-xl);
    border-radius: var(--radius-sm);
    font-weight: 600;
    color: var(--white);
    background: var(--green-primary);
    text-decoration: none;
    transition: background 0.2s ease;
  }

  .email-btn:hover {
    background: var(--green-accent);
  }

  .email-btn:focus-visible {
    outline: 2px solid var(--green-dark);
    outline-offset: 2px;
  }

  .delete-me-article ul {
    margin: var(--space-md) 0;
    padding-left: var(--space-xl);
    list-style: disc;
  }

  .delete-me-article ul li {
    margin-bottom: var(--space-sm);
  }

  .delete-me-article a:not(.email-btn) {
    color: var(--green-primary);
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  .delete-me-article a:not(.email-btn):hover {
    color: var(--green-accent);
  }

  @media (max-width: 768px) {
    .delete-me-main {
      padding-top: calc(var(--nav-height) + 32px + 26px);
    }

    .delete-me-article h1 {
      font-size: var(--fs-2xl);
    }
  }
</style>
