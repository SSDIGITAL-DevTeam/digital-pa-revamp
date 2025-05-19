export default function PrivacyPolicy() {
  return (
    <main className="px-10 py-8 max-w-4xl mx-auto text-gray-900 text-sm sm:text-base leading-relaxed">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Privacy Policy</h1>

      <p className="mb-4">
        Great Sales Pte. Ltd. (trading as Digital PA, “we”, “our”, or “us”) is committed to
        protecting your privacy and personal data in accordance with the Personal Data Protection Act 2012 (PDPA) of Singapore.
      </p>

      <p className="mb-4">
        This Privacy Policy explains how we collect, use, disclose, and protect your personal data when you visit our website, submit a form, engage our services, or communicate with us.
      </p>

      <hr className="my-6 border-gray-300" />

      <Section title="1. Information We Collect">
        <ul className="list-disc pl-5 space-y-1">
          <li>Full Name</li>
          <li>Contact Number</li>
          <li>Email Address</li>
          <li>Company Name & Website</li>
          <li>Business Industry or Service Needs</li>
          <li>Appointment Preferences</li>
          <li>Communications or Feedback from You</li>
          <li>Other data you submit via forms, WhatsApp, or email</li>
        </ul>
        <p className="mt-3">
          We may also collect non-personal data such as browser type, IP address, device info, and cookies.
        </p>
      </Section>

      <Section title="2. Purpose of Data Collection">
        <ul className="list-disc pl-5 space-y-1">
          <li>Follow-up on enquiries or demo requests</li>
          <li>Contact via WhatsApp, email, or phone</li>
          <li>Provide CRM, marketing, or web services</li>
          <li>Improve your experience with our platform</li>
          <li>Send updates, promotions, or recommendations</li>
          <li>Fulfill legal or contractual obligations</li>
        </ul>
      </Section>

      <Section title="3. Consent">
        <p>
          By submitting your info, you consent to our collection and use of your data as described here.
          You can withdraw consent at any time by contacting us (see Section 7).
        </p>
      </Section>

      <Section title="4. Disclosure of Data">
        <p>We may disclose your data to:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Our internal team (e.g. account managers)</li>
          <li>Trusted third parties (e.g. hosting providers)</li>
          <li>Legal authorities when required</li>
        </ul>
        <p className="mt-2">
          All third parties are required to keep your data secure.
        </p>
      </Section>

      <Section title="5. Data Protection and Security">
        <p>
          We use technical and administrative measures to safeguard your data from unauthorised access or misuse.
        </p>
      </Section>

      <Section title="6. Retention of Data">
        <p>
          We keep your data as long as needed to meet the purposes above or as required by law.
        </p>
      </Section>

      <Section title="7. Access, Correction & Withdrawal">
        <p>If you wish to:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Access or correct your data</li>
          <li>Withdraw your consent</li>
          <li>Make a data-related complaint</li>
        </ul>
        <p className="mt-2">
          Please email us at: <a href="mailto:support@digital-pa.com.sg" className="text-blue-600 underline">support@digital-pa.com.sg</a>
        </p>
      </Section>

      <Section title="8. Cookies and Tracking">
        <p>
          We use cookies and similar tech for analytics and marketing. You can control this via browser settings.
        </p>
      </Section>

      <Section title="9. Third-Party Links">
        <p>
          Our site may link to external sites. We&apos;re not responsible for their privacy practices.
        </p>
      </Section>

      <Section title="10. Policy Updates">
        <p>
          We may update this policy. Latest version is always available at:&nbsp;
          <a href="https://digital-pa.com.sg/privacy-policy" className="text-blue-600 underline">
            digital-pa.com.sg/privacy-policy
          </a>
        </p>
      </Section>
    </main>
  );
}

// Section Component
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="text-lg sm:text-xl font-semibold mb-3">{title}</h2>
      {children}
    </section>
  );
}
