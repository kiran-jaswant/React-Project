import React, { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Plant.css';
import { FLOWER_PLANTS } from '../../config/FlowerPlantsConfig';
import { SHOW_PLANTS } from '../../config/ShowPlantsConfig';

function Plant() {

  const {id} = useParams();
  const [plant, setPlant] = useState({});

  useEffect(() => {
    if(id >=1 && id < 9){
      SHOW_PLANTS.forEach((plant) => {
        if(plant.id === id)
          setPlant(plant);
      })
    }
    else if ( id >= 9 && id < 17){
      FLOWER_PLANTS.forEach((plant) => {
        if(plant.id === id)
          setPlant(plant);
      })
    }
  })

  return (
    <div className='plant-details container'>
      
        <h1 className='details-name '>{plant.name}</h1>
        <div className='details-section'>
          <img src={`${plant.src}`} alt={plant.name} className='details-img'/>
          <div>
            <p> Name : {plant.name}</p>
            <p> Botanical name : {plant.botName}</p>
            <p> Price : {plant.price}</p>
          </div>
        </div>
          <p className='long-desc'>{plant.description}</p>
          
    </div>
  )
}

export default Plant;