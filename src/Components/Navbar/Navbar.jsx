import React, { useState } from 'react';
import '../Navbar/Navbar.css';
import { FaBars } from 'react-icons/fa';

function Navbar() {
  const [menu, setMenu] = useState(false); // Start with the menu closed

  function handleClick() {
    setMenu(!menu);
  }

  return (
    <nav className={`navbar`}>
      <div className={`head-nav`}>
        <h2>YASH</h2>
      </div>
      <div className={`nav-links `}>
        <ul className={`${menu ? 'show-ul-links' : 'ul-links'}`}>
          <li><a href="/">HOME</a></li>
          <li><a href="/#about">ABOUT</a></li>
          <li><a href="/#projects">PROJECTS</a></li>
          <li><a href="/#contact">CONTACT</a></li>
          <li><a href="https://drive.google.com/file/d/1VPcrERALQqZppg4ZHpEHC6t6RQx55aET/view" target='blank'>RESUME</a></li>
        </ul>
      </div>
      <FaBars className={`bars ${menu ? '' : 'bars-design'}`} onClick={handleClick} />
    </nav>
  );
}

export default Navbar;
