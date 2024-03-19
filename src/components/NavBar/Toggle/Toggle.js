import React from 'react'
import "./Toggle.css"
import Sun from "@iconscout/react-unicons/icons/uil-sun"
import Moon from "@iconscout/react-unicons/icons/uil-moon"
import { themeContext } from '../../../context'
import { useContext } from 'react'
function Toggle() {
    const theme=useContext(themeContext);
    const darkMode=theme.state.lightTheme;

    const handleClick=()=>{
        theme.dispatch({type : "toggle"})
    }

  return (
    <div className='toggle' onClick={handleClick}
    style={{border:darkMode?"3px solid white":"" }}>
            <Moon/>
            <Sun/>
            <div className='toggle-btn'
            style={darkMode?{left:"2.2px", backgroundColor:"whitesmoke"}:{right:"2.2px"}}>

            </div>
    </div>
  )
}

export default Toggle
