import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { FLOWER_PLANTS } from '../../config/FlowerPlantsConfig';
import { SHOW_PLANTS } from '../../config/ShowPlantsConfig';
import './Plant.css'
import Navbar from '../../components/Navbar/Navbar';

function Plant() {
    const {id} = useParams();
    const [plant, setPlant] = useState({});

    useEffect(() => {
        if(id >=1  && id < 9){
            SHOW_PLANTS.forEach((plant)=>{
                if(plant.id == id)
                    setPlant(plant);
            })
        }
        else if (id >= 9 && id < 17){
            FLOWER_PLANTS.forEach((plant)=>{
                if(plant.id == id)
                    setPlant(plant);
            })
        }
            
        },[id]);

  return (
    <div>
        <Navbar/>
        <div className='container plant-details'> 
            <div className='details-container'>
                <img src={`${plant.src}`} alt={plant.name} className='plant-img'/>
                <div className='details-div'>
                    <p className='details-name'>Name : {plant.name}</p>
                    <p className='details-bot-name'>Botanical Name : {plant.botName}</p>
                    <p className='details-price'>Price : {plant.price}</p>
                </div>
            </div>
            <p className='plant-description'>{plant.description}</p>
            
        </div>
    </div>
  )
}

export default Plant