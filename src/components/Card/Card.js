import React from 'react'
import "./Card.css"

function Card({title, thumbnail,description,author,date,content}) {
  return (
    <div className='blog-card'>
      <img src={thumbnail} alt={title}/>
        <h1>{title}</h1>
        <p>{description}</p>
      
       </div>
  )
}

export default Card