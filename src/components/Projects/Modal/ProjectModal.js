import React from 'react'
import { Button, Modal } from "react-bootstrap";
import { project } from '../../../Data/project';
import "./ProjectModal.css"
import Circle from '../../circle/Circle';
function ProjectModal({index,show,handleClose}) {
   
  return (
     <div className='project-modal' 
     style={show?{ display:'block'}:{display:"none"}}>

<Modal
     show={show} onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
     
    >
      <Modal.Header closeButton
      className='modal-header'>
        <Modal.Title id="contained-modal-title-vcenter">
          {project[index].title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body  className='modal-body' >
        <div className='row'>

          <div className='col-6 modal-body-left'>
        <img src= {project[index].image} alt='project-image'></img>
          </div>

          <div className='col-6 modal-body-right'>
            <div className='modal-description'>

            </div>
            <div className='modal-techs'>
              <h5> Tech Stacks Used </h5>
            {project[index].tech.map((tech)=>(
                          <div className='row techs'>
                          
                              <li style={{display:"inline"}}>
                                {tech}
                              </li>
                             

                          </div>
                        ))}
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-12 btn-div'>

          <div className="btn-1">
                    <button className="project-netlify-modal-btn">
                      <a href={project[index].netlify} target="_blank">
                        Visit Site
                      </a>
                    </button>

                    
                    
                 

                 
                    <button className="project-github-modal-btn" style={{}}>
                      <a href={project[index].frontEnd} target="_blank">
                        FrontEnd Source
                      </a>
                    </button>

                    {project[index].backEnd ? (
                      <button className="project-github-modal-btn">
                        <a href={project[index].backEnd} target="_blank">
                          BackEnd Source
                        </a>
                      </button>
                    ) : (
                      ""
                    )}
                    </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer
      className='modal-footer'>
        <Button onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
          
          {/* <Modal show={show} onHide={handleClose} key={index}
          size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
         >
                  <Modal.Header closeButton>
                    <Modal.Title>{project[index].title}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div className="flex-container modal-main">
                      <div className="w-100 ">
                        <img
                          className="image-fluid img-model"
                          style={{ height: "25vh", width: "65%" ,marginLeft:"10%"}}
                          src={project[index].image}
                          alt="pizza"
                        ></img>
                      </div>
                      <div className='m-2'>
                        <b>TechStacks Used</b> : {project[index].tech.map((tech)=>(
                          <div className='row'>
                            
                              <li style={{display:"inline"}}>
                                {tech}
                              </li>
                             

                          </div>
                        ))}
                      </div>
                    </div>
                  </Modal.Body>
                  <p style={{ width: "90%", marginLeft: "0.5rem" }}>
                    {project.description}
                  </p>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal> */}
            
     </div>
  )
}

export default ProjectModal
