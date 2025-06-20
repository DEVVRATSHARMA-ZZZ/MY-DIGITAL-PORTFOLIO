import React from 'react';
import './Skills.css';

const skills = ['Node.js', 'Express.js', 'JavaScript', 'React', 'Redux Toolkit', 'MySQL', 'Java', 'Spring Boot', 'AI/ML'];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <span key={index} className="skill-item">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills; 