import React from 'react'
import "./IntroPage.css"
import avatar from "../image/avatar2.jpg"

import Blur from '../blur/Blur'
import Card from '../card/Card'

import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
import Github from '@iconscout/react-unicons/icons/uil-github'

function IntroPage() {
  return (
    <div className='introduction' id='home'>
        <div className='intro-left'>
       <Blur
       clr="rgb(49, 155, 208)"
       />
       
                <div className='intro-name'>
                  
                    <span>Hello! I am</span>
                    <span> Mohamed Salahudeen</span>
                    <span> To leverage my engineering background and transferable skills to build a successful career in the field of Information Technology (IT). Seeking a challenging role that enables me to apply my analytical, problem-solving, and project management skills to develop innovative solutions and contribute to the growth of the organization. I aim to continuously enhance my knowledge and skills in IT through learning, collaboration, and hands-on experience, while embracing new technologies and trends.</span>
                </div>
                <button className='btn intro-btn'><a style={{textDecoration:"none",color:"black"}} 
                href='https://drive.google.com/file/d/1yjfCAsriwDUOIsBCkGc7iqflySl1L_Qj/view?usp=sharing' target='_blank'>
                  Resume</a></button>
                <div className='intro-icons'>
                <a href='https://www.linkedin.com/in/mohamed-salahudeen-j-598789265/' target={'_blank'}>
                  <Linkedin color="orange" size="4rem" />
                </a> 
                <a href='https://github.com/mohamedsalahudeen010' target={'_blank'} >
                     <Github color="orange" size="4rem" /> </a>
                         </div>
        </div>
        <div className='intro-right'>
                <div className='avatar'>
                    <img src={avatar} alt="avatar"></img>
                    </div>
        </div>
        <div className='blur2'>
        <Blur
       clr="rgb(235, 176, 225)"
       />
        </div>
        
       
    </div>
  )
}

export default IntroPage
