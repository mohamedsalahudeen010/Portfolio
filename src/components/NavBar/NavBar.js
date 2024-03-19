import React, { useContext, useState } from 'react'
import "./NavBar.css"
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Toggle from './Toggle/Toggle';
import {Link} from "react-scroll"
import Collapse from 'react-bootstrap/Collapse';
import Dot from "@iconscout/react-unicons/icons/uil-ellipsis-v"
import { themeContext } from '../../context';

function NavBar() {
   const[open,setOpen]=useState(false)
   const theme=useContext(themeContext)
  const lightMode=theme.state.lightTheme;
  return (
   
 <div className='nav-wrapper'
 style={
    color:lightMode?"White":""}}>
        <div className='nav-left'>
            <div className='nav-name'>
                Salahudeen
            </div>
            
            <span>
               <Toggle/>
               </span>
        </div>
        <div className='nav-right'>
                <div className='nav-list'>
                     <ul>
                        <Link spy={true} to="home" smooth={true} activeClass='activeClass'>
                        <li>
                            Home
                        </li>
                        </Link>
                        <Link spy={true} to="about" smooth={true} activeClass='activeClass'>
                        <li>
                           About
                        </li>
                        </Link>
                        <Link spy={true} to="skills" smooth={true} activeClass='activeClass'>
                        <li>
                           Skills
                        </li>
                        </Link>
                        <Link spy={true} to="projects" smooth={true} activeClass='activeClass'>
                        <li>
                           Projects
                        </li>
                        </Link>
                     </ul>
                     
                </div>
         
                <Link spy={true} to="contacts" smooth={true} activeClass='activeClass'>
                    <button className='btn nav-btn'>
                        Contact
                     </button>
                     </Link>
        </div>
        <div className='nav-check'>
          <input type="checkbox" id="check-land" name="" value="" style={{display:"none"}}></input>
          <label htmlFor='check-land' className='check-label'
          style={open?{transform:"rotate(90deg)",transition:"all 0.6s"}:
          {transform:"rotate(0deg)",transition:"all 0.6s"}}><Dot
          onClick={()=>setOpen(!open)} size={"2.5rem"}/></label>
        </div>

        <div className='land-dot-list'>
        <Collapse in={open}>
        <div id="example-collapse-text" className='view-nav-list'>
          <ul>
          <Link spy={true} to="home" smooth={true} activeClass='activeClass'>
          <li><span onClick={()=>setOpen(!open)}>Home</span></li>
              </Link>

              <Link spy={true} to="about" smooth={true} activeClass='activeClass'>  
              <li><span onClick={()=>setOpen(!open)}>About</span></li>
            </Link>

            <Link spy={true} to="skills" smooth={true} activeClass='activeClass'>
            <li><span onClick={()=>setOpen(!open)}>Skills</span></li>
            </Link>

            <Link spy={true} to="projects" smooth={true} activeClass='activeClass'>
            <li><span onClick={()=>setOpen(!open)}>Projects</span></li>
            </Link>
            
            <Link spy={true} to="contacts" smooth={true} activeClass='activeClass'>
            
            <li><span onClick={()=>setOpen(!open)}>Contact</span></li>
            </Link>
            
          </ul>
        </div>
      </Collapse>
      </div>

       
    </div>
  
   
  )
}

export default NavBar
