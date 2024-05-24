import React from "react";
import "./Project.css"; // Import your CSS file for styling
import StudyNotion from "./Images/StudyNotion.png";
import yflix from "./Images/yflix.png";
import connectify from "./Images/connectify.png";
import pizzahut from "./Images/pizzahut.png";

const projectsData = [
  {
    name: "YFlix",
    url: "https://yflix.netlify.app/",
    description:
      "Yflix is a Movie data display website created using ReactJS. The website has a stunning UI and UX, designed to help users gather information about movies and TV shows worldwide.",
    image: yflix, // Add image URL here
  },
  {
    name: "Study Notion",
    url: "https://studynotion-ed-tech.netlify.app/",
    description:
      "An online learning platform facilitating diverse course content, interactive features, and user-friendly interface for seamless education experience.",
    image: StudyNotion, // Add image URL here
  },
  {
    name: "Connectify",
    url: "https://socialsonnectify.netlify.app/",
    description:
      "Connectify is a social networking platform developed with ReactJS, NodeJS, MongoDB, and ExpressJS.",
    image: connectify, // Add image URL here
  },
  {
    name: "Pizza Hut",
    url: "https://pizza-hut-yash-chandrawat.netlify.app/",
    description:
      "Pizza website built entirely with React JS and Redux. In which the cart funcionality is being added such that user can add orders.",
    image: pizzahut, // Add image URL here
  },
];

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <section className="projects-container">
        <h2 className="projects-title">My Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.name}</h3>
              <img
                src={project.image}
                alt={project.name}
                className="project-image"
              />
              <p className="project-desc">{project.description}</p>
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
