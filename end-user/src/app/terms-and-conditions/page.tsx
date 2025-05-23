import React from "react";

export default function TermsPage() {
  return (
    <main className="px-10 py-8 max-w-4xl mx-auto text-gray-900 text-sm sm:text-base leading-relaxed">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Terms and Conditions</h1>
      <p className="text-gray-500 mb-6 text-center">Last Updated: May 2025</p>

      <Section title="1. Company Details">
        <p>
          Legal Entity: Great Sales Pte Ltd<br />
          UEN: 202304094D<br />
          Registered Address: 1100 Lower Delta Rd #02-02B EPL Building Singapore 169206<br />
          Support Email: <a href="mailto:support@digital-pa.com.sg" className="text-blue-600 underline">support@digital-pa.com.sg</a><br />
          Privacy Policy: <a href="https://www.digital-pa.com.sg/privacy-policy" className="text-blue-600 underline">https://www.digital-pa.com.sg/privacy-policy</a>
        </p>
      </Section>

      <Section title="2. Acceptance of Terms">
        <p>
          By using DPA Leads, you acknowledge that you have read, understood, and agree to be bound by these Terms, including any additional terms and policies referenced herein.
        </p>
      </Section>

      <Section title="3. Eligibility">
        <p>
          You must be at least 18 years old to use the Services. If you are using the Services on behalf of an organisation, you confirm that you are authorised to bind that organisation.
        </p>
      </Section>

      <Section title="4. Account Registration and Security">
        <ul className="list-disc list-inside">
          <li>Provide accurate, complete information</li>
          <li>Maintain the confidentiality of your login credentials</li>
          <li>Be responsible for all activities under your account</li>
        </ul>
      </Section>

      <Section title="5. User Conduct and Responsibilities">
        <ul className="list-disc list-inside">
          <li>Violate any applicable laws, including Singapore’s PDPA and Spam Control Act</li>
          <li>Post or transmit any unlawful, harmful, or obscene content</li>
          <li>Access or tamper with non-public areas of the system</li>
          <li>Reverse-engineer, decompile, or disassemble any part of the Services</li>
        </ul>
      </Section>

      <Section title="6. Payment, Subscriptions, and Billing">
        <ul className="list-disc list-inside">
          <li>Pay all applicable fees</li>
          <li>Acknowledge that subscriptions auto-renew unless cancelled</li>
          <li>Understand that failed payments may result in suspension</li>
        </ul>
        <p>
          Refunds, if any, will be handled on a case-by-case basis at the discretion of Great Sales Pte Ltd.
        </p>
      </Section>

      <Section title="7. Termination">
        <p>
          We reserve the right to terminate or suspend your access for violation of these Terms or applicable laws. Upon termination, your right to use the Services immediately ceases.
        </p>
      </Section>

      <Section title="8. Intellectual Property">
        <p>
          All content, designs, text, graphics, software, and trademarks are the intellectual property of Great Sales Pte Ltd or its licensors. You may not copy, modify, distribute, or exploit any part without express written consent.
        </p>
      </Section>

      <Section title="9. Disclaimers">
        <p>
          DPA Leads is provided “as is” and “as available”. We make no warranties, express or implied, regarding reliability, availability, or fitness for a particular purpose. You use the Services at your own risk.
        </p>
      </Section>

      <Section title="10. Limitation of Liability">
        <ul className="list-disc list-inside">
          <li>Indirect, incidental, special, or consequential damages</li>
          <li>Loss of data or revenue</li>
          <li>Business interruption</li>
        </ul>
      </Section>

      <Section title="11. Privacy and Data">
        <p>
          All personal data collected is governed by our Privacy Policy: <a href="https://www.digital-pa.com.sg/privacy-policy" className="text-blue-600 underline">https://www.digital-pa.com.sg/privacy-policy</a>. By using the Services, you consent to the collection, use, and disclosure of your personal data as outlined in that policy.
        </p>
      </Section>

      <Section title="12. Mobile App Terms (Apple App Store & Google Play)">
        <ul className="list-disc list-inside">
          <li>You agree to comply with their respective Terms of Service</li>
          <li>You understand that the app is licensed, not sold</li>
          <li>Apple/Google are not responsible for support, liability, or maintenance</li>
          <li>You agree to report any issues directly to support@digital-pa.com.sg</li>
        </ul>
      </Section>

      <Section title="13. Changes to the Terms">
        <p>
          We reserve the right to update or modify these Terms at any time. Continued use of the Services after any changes constitutes acceptance of those changes.
        </p>
      </Section>

      <Section title="14. Governing Law and Jurisdiction">
        <p>
          These Terms are governed by the laws of the Republic of Singapore. Any disputes will be subject to the exclusive jurisdiction of the courts of Singapore.
        </p>
      </Section>

      <Section title="15. Contact Us">
        <p>
          If you have questions, contact:<br />
          Great Sales Pte Ltd<br />
          1100 Lower Delta Rd #02-02B EPL Building Singapore 169206<br />
          Email: <a href="mailto:support@digital-pa.com.sg" className="text-blue-600 underline">support@digital-pa.com.sg</a>
        </p>
      </Section>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="text-lg sm:text-xl font-semibold mb-3">{title}</h2>
      {children}
    </section>
  );
}
