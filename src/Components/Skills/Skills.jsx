import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaJs,
  FaReact,
  FaNodeJs,
  FaCogs,
  FaDatabase,
} from "react-icons/fa";

import { TbBrandCpp } from "react-icons/tb";
import { DiMongodb } from "react-icons/di";

import "./Skills.css"; // Import your CSS file for styling

const skillsData = [
  { name: "HTML", icon: <FaHtml5 size={64} /> },
  { name: "CSS", icon: <FaCss3 size={64} /> },
  { name: "Bootstrap", icon: <FaBootstrap size={64} /> },
  { name: "JavaScript", icon: <FaJs size={64} /> },
  { name: "ReactJS", icon: <FaReact size={64} /> },
  { name: "NodeJS", icon: <FaNodeJs size={64} /> },
  { name: "ExpressJS", icon: <FaCogs size={64} /> },
  { name: "MongoDB", icon: <DiMongodb size={64} /> },
  { name: "C++", icon: <TbBrandCpp size={64} /> },
  { name: "MySQL", icon: <FaDatabase size={64} /> },
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill.icon}
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
