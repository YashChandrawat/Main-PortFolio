import React, { useEffect, useState } from 'react';
import '../Home/Home.css';
import image from '../Home/Profile 2.png';

function Home() {
  const [name, setName] = useState('');
  const fullName = 'YASH CHANDRAWAT';

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullName.length) {
        setName(fullName.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 100); // Adjust typing speed by changing the interval
  }, []);

  const handleHireMeClick = () => {
    // Scroll to the contact component with the ID "contact"
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      const yOffset = contactElement.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: yOffset, behavior: 'smooth' });
    }
  };

  return (
    <section className='section'>
      <div className='leftPart'>
        <h2 className='fade-in-text greet-head'>Hello, I'm</h2>
        <h1 className='home-heading'>
          <span className='fade-in-text'>
            {name}
          </span>
        </h1>
        <h3 className='fade-in-text heading-three'>FRONTEND WEB DEVELOPER</h3>
        <div className='fade-in-text'>
          <button className='btn btn-hover' onClick={handleHireMeClick}>
            HIRE ME
          </button>
          <button className='btn btn-hover'><a href="https://drive.google.com/file/d/1VPcrERALQqZppg4ZHpEHC6t6RQx55aET/view" target='blank'>GET CV</a></button>
        </div>
      </div>
      <div className='rightPart'>
        <img src={image} alt='Profile' className='profile-image' />
      </div>
    </section>
  );
}

export default Home;
