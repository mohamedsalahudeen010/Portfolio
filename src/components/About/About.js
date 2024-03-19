import React from 'react'
import "./About.css"
import react from "../image/logo/logo.svg"
import mern from "../image/logo/mern (2).png"
import expressImg from "../image/logo/node-express.png"
import mongoLogo from "../image/logo/mongodb (1).png"
import nodeLogo from "../image/logo/nodejs1.png"
import {motion} from "framer-motion"

function About() {
  const transition={duration:5,type:"spring"}
  return (
    <div className='container' id='about'>
        <div className='row'>
            <div className=' col-xs-12 col-md-6 about-left' >
            <span>About Me</span>
            <div>Hi, I am Mohamed Salahudeen,</div>
    <span>
          I Graduated as a Mechanical engineer in 2017, I have five plus years of experience in Non IT domain, 
    Throughout my career, I have developed a strong Foundation in Problem Solving,
    Analytical Thinking and Project Management and successfully executing complex projects within deadline
    </span>
    <span>
          I drawn into the dynamic and ever evolving nature of IT and future lies in it,
      As I began exploring the field of IT, 
      I quickly discovered that many of the skills I developed as a mechanical engineer are transferable and valuable in the IT industry.
     </span>
     <span>
           I have embarked on a journey to expand my skill set into the IT domain, 
      so I took proactive steps and completed Full Stack Development Program in 
      GUVI Geeks Which is IIT Madras Incubated Company with 100% task completion.
     </span>
     <span>
      I Have Completed Three months Internship In GUVI Geeks Network As a Tech Support Intern.
    </span>
            </div>
            <div className='col-xs-12 col-md-6 about-right'   style={{width:"50%"}}>
                <motion.div 
                 initial={{rotate:180}}
                 whileInView={{rotate:0}}
                 transition={transition} 
                 viewport={{margin:"-40px"}}
                className='about-right-main-circle'>
                <div className='about-right-secondary-circle'>
                <img src={mongoLogo} alt="mongo"></img>
                </div>
                <div className='about-right-secondary-circle'>
                <img src={expressImg} alt="express"></img>
                </div>
                <div className='about-right-secondary-circle'>
                
                
                <img src={react} alt="react"></img>
                </div>
                <div className='about-right-secondary-circle'>
                <img src={nodeLogo} alt="nodejs"></img>
                </div>
                <div className='about-right-secondary-circle'>
                <img src={mern} alt="mern"></img>
                </div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default About
