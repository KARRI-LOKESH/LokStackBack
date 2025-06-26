import React from 'react';
import './Legal.css';

const PrivacyPolicy = () => {
  return (
    <div className="legal-page">
      <h1 className="legal-title">Privacy Policy</h1>
      <p className="legal-text">
        At LOKSTACK, we respect your privacy and are committed to protecting your personal information.
        This Privacy Policy explains how we collect, use, and safeguard your data.
      </p>

      <h2 className="legal-subtitle">1. Information We Collect</h2>
      <p className="legal-text">
        We may collect information such as your name, email address, and phone number when you contact us or fill out a form.
        We also collect anonymous usage data to improve the user experience.
      </p>

      <h2 className="legal-subtitle">2. How We Use Your Information</h2>
      <p className="legal-text">
        - To respond to your queries or provide services<br />
        - To improve our website and services<br />
        - To send occasional emails about updates or offers
      </p>

      <h2 className="legal-subtitle">3. Data Protection</h2>
      <p className="legal-text">
        We use secure methods and encrypted channels to store and transmit any sensitive data you may provide.
      </p>

      <h2 className="legal-subtitle">4. Third-Party Sharing</h2>
      <p className="legal-text">
        We do not sell, trade, or share your personal information with third parties, except as required by law.
      </p>

      <h2 className="legal-subtitle">5. Contact Us</h2>
      <p className="legal-text">
        If you have any questions about this Privacy Policy, contact us at: <br />
        📧 karrilokesh108@gmail.com
      </p>
    </div>
  );
};

export default PrivacyPolicy;
