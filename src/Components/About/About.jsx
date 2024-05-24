import React from "react";
import "./About.css";
import mountainImg from "./img.webp";

function About() {
  return (
    <div className="about" id="about">
      <div className="about-left-part">
        <img src={mountainImg} alt="Mountain" className="about-img" />
        <div className="about-right-part">
          <h2 className="about-head">Let me tell you about myself</h2>
          <p>
            Hi, I'm Yash Chandrawat, a MERN Stack developer passionate about web
            development and exploring the digital world. Currently, I'm actively
            developing new projects to enhance my skills and contribute to the
            web development community.
          </p>
          <p>
            When I'm not coding, I enjoy playing cricket and engaging in
            volunteer work. I believe in combining my technical skills with my
            passion for giving back to the community. 
          </p>
          <p>
            Let's connect and explore the digital and natural worlds together!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
