import React from 'react';
import '../styles/TermsOfService.css';

const TermsOfService = () => {
  return (
    <div className="terms-container">
      <div className="terms-header">
        <h1>Terms of Service</h1>
        <p className="last-updated">Last Updated: {new Date().toLocaleDateString()}</p>
      </div>

      <div className="terms-content">
        <section className="terms-section">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using Robox, you agree to be bound by these Terms of Service
            and all applicable laws and regulations. If you do not agree with any of these
            terms, you are prohibited from using or accessing this platform.
          </p>
        </section>

        <section className="terms-section">
          <h2>2. User Accounts</h2>
          <div className="terms-subsection">
            <h3>2.1 Account Creation</h3>
            <p>
              To use certain features of our platform, you must create an account. You agree to:
            </p>
            <ul>
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account</li>
              <li>Notify us immediately of any unauthorized use</li>
              <li>Accept responsibility for all activities under your account</li>
            </ul>
          </div>
        </section>

        <section className="terms-section">
          <h2>3. Platform Usage</h2>
          <div className="terms-subsection">
            <h3>3.1 Acceptable Use</h3>
            <p>You agree to use the platform only for lawful purposes and in accordance with these terms.</p>
            <h3>3.2 Prohibited Activities</h3>
            <ul>
              <li>Violating any applicable laws or regulations</li>
              <li>Attempting to gain unauthorized access</li>
              <li>Interfering with platform functionality</li>
              <li>Engaging in fraudulent activities</li>
              <li>Harassing other users</li>
            </ul>
          </div>
        </section>

        <section className="terms-section">
          <h2>4. Intellectual Property</h2>
          <p>
            All content, features, and functionality of the platform, including but not limited to
            text, graphics, logos, and software, are owned by Robox and are protected by
            international copyright, trademark, and other intellectual property laws.
          </p>
        </section>

        <section className="terms-section">
          <h2>5. User Content</h2>
          <p>
            By posting content on our platform, you grant us a worldwide, non-exclusive,
            royalty-free license to use, reproduce, modify, and distribute your content
            in connection with the platform.
          </p>
        </section>

        <section className="terms-section">
          <h2>6. Limitation of Liability</h2>
          <p>
            Robox shall not be liable for any indirect, incidental, special, consequential,
            or punitive damages resulting from your use or inability to use the platform.
          </p>
        </section>

        <section className="terms-section">
          <h2>7. Modifications to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. We will notify users
            of any material changes via email or through the platform.
          </p>
        </section>

        <section className="terms-section">
          <h2>8. Governing Law</h2>
          <p>
            These terms shall be governed by and construed in accordance with the laws
            of the jurisdiction in which Robox operates, without regard to its conflict
            of law provisions.
          </p>
        </section>

        <section className="terms-section">
          <h2>9. Contact Information</h2>
          <p>
            For any questions about these Terms of Service, please contact us at:
            <br />
            Email: legal@robox.com
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService; 