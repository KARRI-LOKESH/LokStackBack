import React from 'react';
import '../pages/Projects.css';
import { Helmet } from 'react-helmet';
import { useNavigate } from "react-router-dom";

const Projects = () => {
  // Project data
  const projects = [
    {
      title: "Hotel Voice Command App",
      techIcons: ["/Spring-boot.png", "/react-logo.png", "/ms.png"],
      demoUrl: "https://your-demo-link-hotel-app.com",
      githubUrl: "https://github.com/yourusername/hotel-voice-command-app"
    },
    {
      title: "Social Media Application",
      techIcons: ["/react-logo.png", "/django-logo-negativ.png"],
      demoUrl: "https://ivallap.onrender.com/users/entry/",
      githubUrl: "https://github.com/KARRI-LOKESH/ivallap"
    },
    {
      title: "Student Portal Web Application",
      techIcons: ["/python.png", "/react-logo.png", "/django-logo-negativ.png"],
      demoUrl: "https://v0-student-portal-karri-lokeshs-projects.vercel.app",
      githubUrl: "https://github.com/KARRI-LOKESH/Student_Portal"
    }
  ];

  // Scroll to projects section
  const scrollToProjects = () => {
    const section = document.querySelector('.projects-section');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="projects-page">
      <Helmet>
        <title>LOKSTACK</title>
        <meta name="description" content="LOKSTACK builds modern full-stack solutions using React, Django, and Spring Boot." />
      </Helmet>

      <section className="hero-section">
        <h1 className="hero-title">LokStack</h1>
        <p className="hero-subtitle">Building Future-Ready Web Solutions</p>
        <div className="hero-buttons">
          <button className="primary-btn" onClick={scrollToProjects}>
            Explore Projects
          </button>

          <a
            href="https://wa.me/917993549539?text=Hi%20Lokstack!%20I%20want%20a%20free%20consultation.%20Please%20contact%20me%20at%20karrilokesh108@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="secondary-btn">Get a Free Consultation</button>
          </a>
        </div>
      </section>

      <section className="projects-section">
        <h2 className="section-heading">Projects</h2>
        <div className="project-cards">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <div className="tech-icons">
                {project.techIcons.map((icon, i) => (
                  <img key={i} src={icon} alt="Tech Icon" />
                ))}
              </div>
              <div className="project-links">
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <button className="project-btn">Demo</button>
                </a>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <button className="project-btn">GitHub</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="features-section">
        <div className="feature">
          <i className="fas fa-code"></i>
          <p>Custom Web Apps</p>
        </div>
        <div className="feature">
          <i className="fas fa-microphone"></i>
          <p>Voice-Enabled Interfaces</p>
        </div>
        <div className="feature">
          <i className="fas fa-network-wired"></i>
          <p>Microservices Architecture</p>
        </div>
        <div className="feature">
          <i className="fas fa-cloud"></i>
          <p>Scalable Cloud Deployments</p>
        </div>
      </section>
    </div>
  );
};

export default Projects;
