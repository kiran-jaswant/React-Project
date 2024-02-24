import React from 'react';
import "./FeatureCard.css";

function FeatureCard(props) {
    const{s,icon}=props;

  return (
    <div className='card hover col-4 m-4 w-50'>
        <div className='d-flex justify-content-around '>
        <img src={icon} alt="check" className='myicon'></img>
        <h1 className='feature'>{s}</h1>
        </div>
      
    </div>
  )
}

export default FeatureCard;
