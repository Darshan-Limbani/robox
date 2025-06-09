import React from 'react';
import '../styles/PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <div className="privacy-header">
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last Updated: {new Date().toLocaleDateString()}</p>
      </div>

      <div className="privacy-content">
        <section className="policy-section">
          <h2>Introduction</h2>
          <p>
            At Robox, we take your privacy seriously. This Privacy Policy explains how we collect,
            use, disclose, and safeguard your information when you use our gaming platform.
            Please read this privacy policy carefully. If you do not agree with the terms of this
            privacy policy, please do not access the platform.
          </p>
        </section>

        <section className="policy-section">
          <h2>Information We Collect</h2>
          <div className="info-types">
            <div className="info-type">
              <h3>Personal Information</h3>
              <ul>
                <li>Name and email address</li>
                <li>Account credentials</li>
                <li>Profile information</li>
                <li>Payment information</li>
              </ul>
            </div>
            <div className="info-type">
              <h3>Usage Information</h3>
              <ul>
                <li>Game preferences and history</li>
                <li>Device information</li>
                <li>IP address and location data</li>
                <li>Interaction with our platform</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="policy-section">
          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide and maintain our gaming services</li>
            <li>Process your transactions</li>
            <li>Send you updates and marketing communications</li>
            <li>Improve our platform and user experience</li>
            <li>Ensure platform security and prevent fraud</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational security measures to protect
            your personal information. However, no method of transmission over the Internet
            is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section className="policy-section">
          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to data processing</li>
            <li>Data portability</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
            <br />
            Email: privacy@robox.com
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 