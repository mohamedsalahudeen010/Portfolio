import React from 'react'
import "./Card.css"
function CardBox({img,heading,detail}) {
  return (
    <div className='card'>
        <img src={img} alt=''></img>
        <span>{heading}</span>
        <span>{detail}</span>
    </div>
  )
}

export default CardBox