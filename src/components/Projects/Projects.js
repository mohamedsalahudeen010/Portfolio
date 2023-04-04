import React from 'react'
import "./Projects.css"

import {SwiperSlide,Swiper} from "swiper/react"
import "swiper/css"

import { project } from '../../Data/project'



function Projects() {
  return (
    <div className='projects' id='projects'>
        <span>Projects</span>
        <h2  style={{color: "rgb(38, 255, 0)"}}>Swipe to View Projects</h2>
        <div className='projects-swipe-box'>
        <Swiper spaceBetween={30}
        slidesPerView={2}
        grabCursor={true}
        className="projects-slider">
            
            {project && project.map((project,index)=>(
                    <SwiperSlide  key={index}>
                    <div className='project-card'>
                    <img src={project.image} alt="projects"></img>
                    <button className='project-netlify-btn'><a href={project.netlify} target="_blank">Visit Site</a></button>
                    <button className='project-github-btn'><a href={project.frontEnd} target="_blank">FrontEnd Source</a></button>
                    {project.backEnd?<button className='project-github-btn'><a href={project.backEnd} target="_blank">BackEnd Source</a></button>:""}
                    </div>
        
                     
                </SwiperSlide>
            ))}        
        
        

        </Swiper>
        </div>
        
        </div>
       
  
  )
}

export default Projects 
