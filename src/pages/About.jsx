import React from 'react';
import './About.css';
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <>
      <Helmet>
        <title>LOKSTACK</title>
        <meta name="description" content="LOKSTACK builds modern full-stack solutions using React, Django, and Spring Boot." />
      </Helmet>

      <div className="about-page">
        <div className="about-container">
          <h1 className="about-title">About LOKSTACK</h1>
          <p className="about-desc">
            A modern web solutions company founded by Lokesh Karri, a passionate developer building
            full-stack apps using React, Django, Spring Boot, and microservices.
          </p>

          <div className="about-boxes">
            <div className="about-box">
              <h3>What We Do</h3>
              <ul>
                <li>Custom Web Application Development</li>
                <li>Voice-enabled Hotel Service Platforms</li>
                <li>AI-powered Object Detection Projects</li>
                <li>End-to-End Microservices Architecture</li>
              </ul>
            </div>

            <div className="about-box">
              <h3>Our Values</h3>
              <ul>
                <li>Innovation and Creativity</li>
                <li>User-Centric Design</li>
                <li>Performance & Scalability</li>
                <li>Secure Coding Practices</li>
              </ul>
            </div>

            <div className="about-box">
              <h3>Our Vision</h3>
              <p>
                To be a trusted tech partner for businesses by delivering powerful digital solutions that solve real-world problems and make life easier.
              </p>
            </div>
          </div>

          <p className="about-desc">
            Our mission is to build powerful, scalable, and user-friendly applications that create impact.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
