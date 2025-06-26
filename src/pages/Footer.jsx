import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/terms-of-service">Terms of Service</Link>
        <a href="mailto:karrilokesh108@gmail.com">Contact</a>
      </div>

      <div className="social-icons">
        <a href="https://instagram.com/karri_lokesh_1" target="_blank" rel="noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://facebook.com/karri_lokesh/" target="_blank" rel="noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/KARRI-LOKESH" target="_blank" rel="noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="mailto:karrilokesh108@gmail.com">
          <i className="fas fa-envelope"></i>
        </a>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} LokStack. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
