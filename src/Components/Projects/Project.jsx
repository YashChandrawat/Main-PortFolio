import React from 'react';
import './Project.css'; // Import your CSS file for styling

const projectsData = [
  {
    name: 'YFlix',
    url: 'https://yflix.netlify.app/',
    description:
      'Yflix is a Movie data display website created using ReactJS. The website has a stunning UI and UX, designed to help users gather information about movies and TV shows worldwide.',
  },
  {
    name: 'Weather App',
    url: 'https://weather-application001.netlify.app/',
    description: 'The Weather App provides real-time weather information for various locations. Stay updated with weather conditions and forecasts.',
  },
  {
    name: 'Todo-list',
    url: 'https://todo-list-yash.netlify.app/',
    description: 'A simple Todo-list application built to help you manage your tasks and stay organized. Add, edit, and complete tasks with ease.',
  },
  {
    name: 'TextWise',
    url: 'https://textwise.netlify.app/',
    description: 'TextWise is a text analysis tool that provides insights into the sentiment, keywords, and other properties of text content.',
  },
];

const Projects = () => {
  return (
    <div className="projects" id='projects'>
    <section className="projects-container">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.name}</h3>
            <p className='project-desc'>{project.description}</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              Visit Project
            </a>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default Projects;
