import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

import "./Footer.css"; // Import your CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-contact">
          <h3>Contact Information</h3>
          <p>Name: Yash Chandrawat</p>
          <p>Email: yashchandrawat52@gmail.com</p>
          <p>Contact Number: 7772839465</p>
          <p>Location: Indore</p>
        </div>
        <div className="footer-social">
          <h3>Connect with Me</h3>
          <div className="social-links">
            <a href="https://github.com/YashChandrawat" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/yash-chandrawat-1y1/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/yash.chandrawat/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Yash Chandrawat. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
