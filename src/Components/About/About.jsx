import React from 'react'
import img from "./img.webp"
import "../About/About.css"

function About() {
  return (
    <div className='about' id='about'>
        <div className="about-left-part">
            <img src={img} alt="About" className='about-img' />
            <div className="about-right-part">
                <h2 className='about-head'>Let me tell you about myself</h2>
                <p>Hi, I'm Yash Chandrawat, a computer science engineering student on a journey to sharpen my web development skills. When I'm not coding, I'm a fitness enthusiast, a volunteer, and a mountain explorer. I believe in combining my technical skills with a passion for giving back to the community and exploring the world's stunning landscapes. Join me as I share my web development journey and experiences from the mountains. Let's connect and explore the digital and natural worlds together!</p>
            </div>
        </div>
    </div>
  )
}

export default About