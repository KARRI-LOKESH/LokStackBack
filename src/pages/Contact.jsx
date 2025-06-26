import React, { useState } from 'react';
import './Contact.css';
import { Helmet } from 'react-helmet';

<Helmet>
  <title>LOKSTACK</title>
  <meta name="description" content="LOKSTACK builds modern full-stack solutions using React, Django, and Spring Boot." />
</Helmet>

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      const data = await response.json();
      console.log("Response:", data);
      setStatus("Message sent successfully!");

      // Clear form
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error("Error:", error);
      setStatus("Failed to send message");
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1 className="contact-title">Contact Us</h1>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            className="contact-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="contact-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Your Message"
            className="contact-textarea"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button type="submit" className="contact-button">Send Message</button>
        </form>

        {status && <p className="contact-status">{status}</p>}

        <div className="contact-socials">
          <p>Or reach out on:</p>
          <div className="social-links">
            <a href="https://github.com/KARRI-LOKESH" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/lokesh-karri-06532427a" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="mailto:karrilokesh108@gmail.com">Email</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
