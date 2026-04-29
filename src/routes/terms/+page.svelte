<script>
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<svelte:head>
  <title>Terms of Service — JumaLink</title>
  <meta
    name="description"
    content="JumaLink Terms of Service. Read the terms governing your access to and use of the JumaLink platform."
  />
  <link rel="canonical" href="https://jumalink.com/terms" />
</svelte:head>

<Navbar />

<main class="legal-main" id="main-content">
  <article class="container legal-article">
    <h1>JumaLink Terms of Service</h1>
    <p class="lede">Last Updated: April 2026</p>
    <p>
      Welcome to JumaLink! These Terms of Service ("Terms") govern your access
      to and use of the JumaLink platform, including our mobile application and
      website (collectively, the "Platform"). By accessing or using the
      Platform, you agree to be bound by these Terms.
    </p>

    <section>
      <h2>1. Acceptance of Terms & Eligibility</h2>
      <p>
        By creating an account or using JumaLink, you confirm that you are at
        least 18 years of age and possess the legal authority to enter into
        these Terms. If you do not agree to these Terms, you must not use our
        Platform.
      </p>
    </section>

    <section>
      <h2>2. Description of Service</h2>
      <p>
        JumaLink is an intermediary digital marketplace designed to connect
        individuals seeking services ("Customers") with independent
        professionals ("Artisans"). We provide the technology to facilitate
        these connections but do not perform the services ourselves.
      </p>
    </section>

    <section>
      <h2>3. Artisan Independence & Lack of Guarantees</h2>
      <p>
        <strong>Independent Contractors:</strong> All Artisans on the JumaLink Platform
        are independent contractors and third-party providers. They are not employees,
        agents, or representatives of JumaLink.
      </p>
      <p>
        <strong>Vetting and Guarantees:</strong> While JumaLink makes reasonable
        efforts to acquire and vet Artisans, we cannot and do not fully ensure, warrant,
        or guarantee the quality or suitability of the services they provide.
      </p>
    </section>

    <section>
      <h2>4. Payments and Fees</h2>
      <p>
        <strong>Direct Payments:</strong> JumaLink does not currently process payments
        for services. All payments for services rendered must be made directly between
        the Customer and the Artisan (e.g., via cash or mobile money).
      </p>
      <p>
        <strong>Customer Fees:</strong> JumaLink is free to use for Customers. We
        do not charge Customers a booking or subscription fee.
      </p>
      <p>
        <strong>Artisan Fees:</strong> Artisans are required to pay a 5% commission
        fee to JumaLink for jobs secured through the Platform.
      </p>
    </section>

    <section>
      <h2>5. Refunds and Compensation</h2>
      <p>
        Because JumaLink is an intermediary and payments are made directly to
        Artisans, we do not inherently offer refunds. However, if a Customer is
        dissatisfied with poorly performed work, they may request assistance
        from JumaLink. Any compensation or refund provided by JumaLink is
        granted solely at our discretion and only following a thorough internal
        investigation.
      </p>
    </section>

    <section>
      <h2>6. Dispute Resolution</h2>
      <p>
        If a disagreement or dispute arises between a Customer and an Artisan,
        JumaLink will step in to mediate the situation. Users agree to cooperate
        fully with JumaLink’s investigation and mediation efforts. While we will
        attempt to resolve the issue fairly, our mediation decisions are final
        as far as Platform operations are concerned.
      </p>
    </section>

    <section>
      <h2>7. User Content and Licensing</h2>
      <p>
        <strong>Ownership:</strong> You retain ownership of all content you upload
        to the Platform, including reviews, profile information, and portfolio photos
        ("User Content").
      </p>
      <p>
        <strong>License to JumaLink:</strong> By uploading User Content, you grant
        JumaLink a non-exclusive, worldwide, royalty-free license to use, display,
        reproduce, and distribute your content for marketing, promotional, and platform-improvement
        purposes.
      </p>
    </section>

    <section>
      <h2>8. Disclaimers and Limitation of Liability</h2>
      <p>
        <strong>Disclaimer:</strong> The Platform is provided on an "AS IS" and "AS
        AVAILABLE" basis. We disclaim all warranties, express or implied, regarding
        the reliability or accuracy of Artisan services.
      </p>
      <p>
        <strong>Liability Cap:</strong> In the event JumaLink is found liable
        for any claim related to the services provided by an Artisan or the use
        of the Platform, JumaLink's total aggregate financial liability shall be
        strictly capped at a maximum of <strong>GHS 1000</strong>. Any payout is
        subject to our internal investigation and absolute discretion.
      </p>
    </section>

    <section>
      <h2>9. Account Termination</h2>
      <p>
        JumaLink reserves the right to suspend or terminate your account and
        your access to the Platform at any time, for any reasonable cause,
        including but not limited to fraud, harassment, violation of these
        Terms, or conduct deemed harmful to the JumaLink community.
      </p>
    </section>

    <section>
      <h2>10. Governing Law</h2>
      <p>
        These Terms, and any disputes arising from them or the use of the
        Platform, shall be governed by and construed in accordance with the laws
        of the Republic of Ghana, without regard to its conflict of law
        provisions.
      </p>
    </section>

    <section>
      <h2>11. Contact Us</h2>
      <p>
        If you have any questions or concerns regarding these Terms of Service,
        please contact us at:<br />
        <strong>Email:</strong>
        <a href="mailto:support@jumalink.com">support@jumalink.com</a>
      </p>
    </section>
  </article>
</main>

<Footer />

<style>
  .legal-main {
    padding-top: calc(var(--nav-height) + 48px + 26px);
    padding-bottom: var(--space-4xl);
    min-height: 60vh;
    background: var(--white);
  }

  .legal-article {
    max-width: 800px;
  }

  .legal-article h1 {
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

  .legal-article h2 {
    font-size: var(--fs-xl);
    font-weight: 600;
    color: var(--text-primary);
    margin-top: var(--space-2xl);
    margin-bottom: var(--space-md);
    line-height: 1.3;
  }

  .legal-article p,
  .legal-article li {
    font-size: var(--fs-base);
    color: var(--text-secondary);
    line-height: 1.65;
  }

  .legal-article p {
    margin-bottom: var(--space-md);
  }

  .legal-article ul {
    margin: var(--space-md) 0;
    padding-left: var(--space-xl);
    list-style: disc;
  }

  .legal-article ul li {
    margin-bottom: var(--space-sm);
  }

  .legal-article a {
    color: var(--green-primary);
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  .legal-article a:hover {
    color: var(--green-accent);
  }

  @media (max-width: 768px) {
    .legal-main {
      padding-top: calc(var(--nav-height) + 32px + 26px);
    }

    .legal-article h1 {
      font-size: var(--fs-2xl);
    }
  }
</style>
