<<<<<<< HEAD
import React from 'react';
import {Link} from 'react-router-dom';
import './Card.css';

function Card({id, name, src, botName, description, price}) {
  return (
    <div className='plants-card'>
      <img src={src} alt={name} className='card-img'/>
      <p className='card-name'>Name : {name.substring(0, 20)}{(name.length > 20) ? '...' : null}</p>
      <p className='card-bot-name'>Botanical : {botName.substring(0, 20)} {(botName.length > 20) ? '...' : null}</p>
      <p className='card-desc'>{description.substring(0, 80)}{(description.length > 80) ? '...' : null}</p>
      <p className='card-price'>Rs. {price}</p>
      <button type='button' className='know-more-btn'>
        <Link to={`/plant/${id}`} className='link-btn'> Detail... </Link> 
      </button>
    </div>
=======
import React from 'react'
import "./Card.css"

function Card({title, thumbnail,description,author,date,content}) {
  return (
    <div className='blog-card'>
      <img src={thumbnail} alt={title}/>
        <h1>{title}</h1>
        <p>{description}</p>
      
       </div>
>>>>>>> 258eaea9bfff6f47c364b36b014c4b988afa19d2
  )
}

export default Card;