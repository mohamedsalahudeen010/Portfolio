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
          "I am a mechanical engineer with 5 years of experience in the industry, but I am currently transitioning to a career in IT. During my time as a mechanical engineer, I developed a strong foundation in problem-solving, analytical thinking, and project management. However, I realized that my passion lies in the ever-evolving world of technology.
       </span>

          <span>
          As I began exploring the field of IT, I quickly discovered that many of the skills I developed as a mechanical engineer are transferable and valuable in the IT industry. I am currently taking online courses and attending boot camps to learn new skills and stay up-to-date with the latest technology trends.

          </span>
          <span>
          I am excited to use my skills and experience to make a positive impact in the field of IT. I am particularly interested in developing innovative solutions to complex problems and collaborating with others to create meaningful change.

          </span>
          <span>
          In my free time, I enjoy exploring new technologies and experimenting with coding. I am always eager to learn new things and take on new challenges. I believe that my combination of technical and problem-solving skills, as well as my passion for technology, make me a strong candidate for a career in IT."
          </span>
          <span>
            
As I make this transition into IT, I'm excited to bring my problem-solving skills, attention to detail, and strong work ethic to a new industry. I'm committed to continuously learning and growing in my new career and am excited about the opportunities ahead.
   
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