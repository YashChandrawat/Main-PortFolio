import React from 'react'
import "../Education/Education.css"
import img from "./ips.jpg"
import img2 from "./sfs.webp"

function Education() {
  return (
    <div className='education'>
        <div className="inside">
            <h2>My Education</h2>
            <p className='para'>Education Is Not The Learning Of Facts, But The Training Of The Mind To Think.</p>
        </div>
        <div className="first">
            <img src={img} alt="" className='ips-img' />
            <div className="first-right">
                <h3>Bachelor of Technology in Computer Science</h3>
                <h4>IPS Academy, Indore</h4>
                <h4>2020-2024 | Pursuing</h4>
            </div>
        </div>
        <div className="second">
            <img src={img2} alt="" className='ips-img'/>
            <div className="second-right">
                <h3>HSC Science</h3>
                <h4>St Francis Higher Secondary School</h4>
                <h4>2019-2020 | Completed</h4>   
            </div>
        </div>

    </div>
  )
}

export default Education