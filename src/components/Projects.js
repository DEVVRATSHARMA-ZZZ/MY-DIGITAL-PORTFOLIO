import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'School-Management-API',
    description: 'Used Node.js , Express.js and Javascript.',
    link: 'https://github.com/DEVVRATSHARMA-ZZZ/school-management-api',
  },
  {
    title: 'Weather App',
    description: 'Fetch and display weather using an API like Open Weather Map.',
    link: '#',
  },
  {
    title: 'Quiz App',
    description: 'Multiple-choice questions with a scoring system for different competitive exams like Jee, Neet. Used JSON to store questions.',
    link: '#',
  },
    {
    title: 'Movie Database App',
    description: 'Use TMDB API to fetch and show movies with details and rating.',
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 