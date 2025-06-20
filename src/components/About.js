import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <img src="/profile-photo.jpg" alt="Devvrat Sharma" className="profile-pic" />
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          Dedicated and detail-oriented B. Tech student with a strong passion for DEVELOPMENT, PROBLEM SOLVING and emerging technologies.
        </p>
      </div>
    </section>
  );
};

export default About; 