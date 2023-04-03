import React from 'react'
import "./NavBar.css"
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Toggle from './Toggle/Toggle';
import {Link} from "react-scroll"

function NavBar() {
  return (
   
 <div className='nav-wrapper'>
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
        <DropdownButton
         className='dropDown'
            as={ButtonGroup}
            title={"..."}
            id={`dropdown-variants-warning`}
            
          >
            <Link spy={true} to="home" smooth={true} activeClass='activeClass'>
              <Dropdown.Item eventKey="1" active>Home</Dropdown.Item>
              </Link>

            <Link spy={true} to="about" smooth={true} activeClass='activeClass'>  
            <Dropdown.Item eventKey="2">About</Dropdown.Item>
            </Link>

            <Link spy={true} to="skills" smooth={true} activeClass='activeClass'>
            <Dropdown.Item eventKey="3" >Skills</Dropdown.Item>
            </Link>

            <Link spy={true} to="projects" smooth={true} activeClass='activeClass'>
            <Dropdown.Item eventKey="4" >Projects</Dropdown.Item>
            </Link>
            <Dropdown.Divider />

            <Link spy={true} to="contacts" smooth={true} activeClass='activeClass'>
            <Dropdown.Item eventKey="4">Contact</Dropdown.Item>
            </Link>
          </DropdownButton>
    </div>
  
   
  )
}

export default NavBar