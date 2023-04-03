import React from 'react'
import "./Circle.css"
function Circle({img}) {
  return (
    <div className='circle'>
        <div>
        <img src={img} alt="circle-logo"></img>
        </div>
        
    </div>
  )
}

export default Circle