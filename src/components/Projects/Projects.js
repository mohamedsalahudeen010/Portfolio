import React, { useEffect, useState } from "react";
import "./Projects.css";
import { Button, Collapse, Modal } from "react-bootstrap";
import {SwiperSlide}  from "swiper/react";
import { Swiper } from "swiper/react";
import "swiper/css";
import { project } from "../../Data/project";
import ProjectModal from "./Modal/ProjectModal";
import { useSwiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper-bundle.min.css'



function Projects() {


  


  const [show, setShow] = useState(false);
  const [index,setIndex]=useState();
  
 
  const handleClose = () => setShow(false);
  const handleShow = (index) => {
    setShow(true)
    setIndex(index)

  };


  return (
    <div className="projects" id="projects"
    >
      <span>Projects</span>
      {/* <h2 style={{ color: "rgb(38, 255, 0)" }}>Swipe to View Projects</h2> */}
      <div className="projects-swipe-box">
        {/* <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}

          spaceBetween={10}

          slidesPerView={3}
         
          grabCursor={true}
          

          navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}

          

          onReachEnd={() => {}}

          className="projects-slider"
        
        >
          {project &&
            project.map((proj, index) => (
              
              <SwiperSlide key={index}>
                <div className="project-card">
                  <img
                    className="slide-image"
                    src={proj.image}
                    alt="projects"
                  ></img>

                  <div className="btn-1">
                    <button className="project-netlify-btn">
                      <a href={proj.netlify} target="_blank">
                        Visit Site
                      </a>
                    </button>

                    <button
                      className="project-netlify-btn"
                      onClick={()=>handleShow(index)}
                    >
                      More
                    </button>
                  </div>

                  <div className="btn-2">
                    <button className="project-github-btn" style={{}}>
                      <a href={proj.frontEnd} target="_blank">
                        FrontEnd Source
                      </a>
                    </button>

                    {proj.backEnd ? (
                      <button className="project-github-btn">
                        <a href={proj.backEnd} target="_blank">
                          BackEnd Source
                        </a>
                      </button>
                    ) : (
                      ""
                    )}
                    
                  </div>
               

                
                </div>

              
               
            
           

              
                </SwiperSlide>
                 
                 
                  


            ))}
          
               
        </Swiper> */}
<div className="row">

{project &&
            project.map((proj, index) => (
              <div className="col-md-2">
              <SwiperSlide key={index}>
                <div className="project-card">
                  <img
                    className="slide-image"
                    src={proj.image}
                    alt="projects"
                  ></img>

                  <div className="btn-1">
                    <button className="project-netlify-btn">
                      <a href={proj.netlify} target="_blank">
                        Visit Site
                      </a>
                    </button>

                    <button
                      className="project-netlify-btn"
                      onClick={()=>handleShow(index)}
                    >
                      More
                    </button>
                  </div>

                  <div className="btn-2">
                    <button className="project-github-btn" style={{}}>
                      <a href={proj.frontEnd} target="_blank">
                        FrontEnd Source
                      </a>
                    </button>

                    {proj.backEnd ? (
                      <button className="project-github-btn">
                        <a href={proj.backEnd} target="_blank">
                          BackEnd Source
                        </a>
                      </button>
                    ) : (
                      ""
                    )}
                    
                  </div>
               

                
                </div>

              
               
            
           

              
                </SwiperSlide>
                 
                 
                  

                </div>
            ))
            }
          

</div>

{(index>=0 || index===0) && (index>=0 || index===0)?<div style={index?{display:"block"}:{display:"none"}}>
        <ProjectModal
             index={index}
             show={show}
             handleClose={handleClose}
             /> 

      </div>:""}


      </div>
     
    </div>
  );
}

export default Projects;
