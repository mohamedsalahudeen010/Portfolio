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
          "I am a mechanical engineer with 5 years of experience in the industry, but I am currently transitioning to a career in IT.
           During my time as a mechanical engineer, I developed a strong foundation in problem-solving, analytical thinking, and 
           project management. However, I realized that my passion lies in the ever-evolving world of technology.
       </span>

          <span>
          As I began exploring the field of IT, I quickly discovered that many of the skills I developed as a mechanical engineer 
          are transferable and valuable in the IT industry.
          I took online Full stack developer program in Zen Class by GUVI and I completed successfully . 
       

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
