import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p>
        You can reach me via email or connect with me on LinkedIn and GitHub.
      </p>
      <div className="contact-links">
        <a href="mailto:dev1234567zzz@gmail.com">dev1234567zzz@gmail.com</a>
        <span>&nbsp;||&nbsp;</span>
        <a href="https://www.linkedin.com/in/devvrat-sharma-01a262315/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <span>&nbsp;||&nbsp;</span>
        <a href="https://github.com/DEVVRATSHARMA-ZZZ" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </section>
  );
};

export default Contact; 