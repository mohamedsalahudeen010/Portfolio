import React from 'react'
import Circle from '../circle/Circle'
import "./Skills.css"
import jsLogo from "../image/logo/js-logo.webp"
import htmlLogo from "../image/logo/HTML5.png"
import cssLogo from "../image/logo/CSS.png"
import bootstrapLogo from "../image/logo/bootstrapLogo.jpg"
import react from "../image/logo/logo.svg"
import expressImg from "../image/logo/node-express.png"
import mongoLogo from "../image/logo/mongodb (1).png"
import nodeLogo from "../image/logo/nodeJsCircle.webp"
import githubLogo from "../image/logo/github.svg"
import sqlLogo from "../image/logo/sqlLogo.png"
import FloatingDiv from '../floatingDiv/FloatingDiv'
import {motion} from "framer-motion"
function Skills() {
  const transition={duration:4,type:"spring"}
  return (
    <div className='skills' id="skills">
      <span>Tech Stacks</span>
      <div className='row skills-main'>
        <div className='col-md-6 skills-left '>

        <div className='logo-div'>
            <div className='row'>
            <Circle 
        img={jsLogo}/>
        <Circle 
        img={htmlLogo}/>

       <Circle 
        img={cssLogo}/>

      <Circle 
        img={bootstrapLogo}/>

        <Circle 
        img={react}/>

        

            </div>
            <div className='row'>
            <Circle 
        img={nodeLogo}/>

       <Circle 
        img={mongoLogo}/>
         <Circle 
        img={expressImg}/>
         <Circle 
        img={githubLogo}/>

        <Circle 
        img={sqlLogo}/>
            </div>
        
        </div>
        </div>

        <div className='col-md-6 col-xs-12 float-right'>


          <motion.div className='skills-float1'
          initial={{top:"-10%"}}
          whileInView={{top:"0%"}}
          transition={transition}>
          <FloatingDiv
            img="https://uploads-ssl.webflow.com/60cca9384ff7eaa931a24b69/60ce44133ce5aee0e6c9cac9_Mern.png"
            text1="Web"
            text2="Developer">
            </FloatingDiv>
          </motion.div>
          <motion.div className='skills-float2'
          initial={{left:"40%"}}
          whileInView={{left:"60%"}}
          transition={transition}>
          <FloatingDiv
            img="https://uploads-ssl.webflow.com/60cca9384ff7eaa931a24b69/60ce44133ce5aee0e6c9cac9_Mern.png"
            text1="Front End"
            text2="Developer">
            </FloatingDiv>
          </motion.div>
          <motion.div className='skills-float3'
          initial={{left:"40%"}}
          whileInView={{left:"15%"}}
          transition={transition}>
          <FloatingDiv
            img="https://uploads-ssl.webflow.com/60cca9384ff7eaa931a24b69/60ce44133ce5aee0e6c9cac9_Mern.png"
            text1="Back End"
            text2="Developer">
            </FloatingDiv>
          </motion.div>

          <motion.div className='skills-float4'
          initial={{left:"40%"}}
          whileInView={{left:"55%"}}
          transition={transition}>
          <FloatingDiv
            img="https://uploads-ssl.webflow.com/60cca9384ff7eaa931a24b69/60ce44133ce5aee0e6c9cac9_Mern.png"
            text1="Full Stack"
            text2="Developer">
            </FloatingDiv>
          </motion.div>

         
        
          
          </div>
  
       
        
        </div>
    </div>
  )
}

export default Skills