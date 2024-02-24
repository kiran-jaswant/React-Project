import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { FLOWER_PLANTS } from '../../config/FlowerPlantsConfig';
import { SHOW_PLANTS } from '../../config/ShowPlantsConfig';
import './Plant.css'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer'

function Plant() {
    const {id} = useParams();
    const [plant, setPlant] = useState({});

    useEffect(() => {
        if(id >=1  && id < 9){
            SHOW_PLANTS.forEach((plantL)=>{
                if(plantL.id == id){
                    setPlant(plantL);
                }
            })
        }
        else if (id >= 9 && id < 17){
            FLOWER_PLANTS.forEach((plantL)=>{
                if(plantL.id == id){
                    setPlant(plantL);
                }
            })
        }
            
        },[id]);

    const addToCart = () => {
        const plantsInLS = JSON.parse(localStorage.getItem('plantIdInLS')) || [];
        const newPlantInLs = [...plantsInLS, plant.id];
        localStorage.setItem('plantIdInLS', JSON.stringify(newPlantInLs));
    } 

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
                    <button type='button' className='buy-now-btn' onClick={addToCart}>Buy Now</button>
                </div>
            </div>
            <p className='plant-description'>{plant.description}</p>
            <p> <Link to='/cart' className='buy-now-btn'> View Cart </Link></p>
        </div>
        <Footer/>
    </div>
  )
}

export default Plant