import React, {useState, useEffect} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer'
import { FLOWER_PLANTS } from '../../config/FlowerPlantsConfig';
import { SHOW_PLANTS } from '../../config/ShowPlantsConfig';
import './Cart.css';
import Card from '../../components/Card/Card';


function Cart() {
  
  const idsFromLS = JSON.parse(localStorage.getItem('plantIdInLS'));
  const [plantsInCart, setPlantsInCart] = useState([]);

  let plantObjects = [] ;
  if(idsFromLS)
    {
      for(let i=0 ; i < idsFromLS.length; i++){

        if(idsFromLS[i] < 9){
          SHOW_PLANTS.forEach((plant) => {
            if(plant.id == idsFromLS[i]){
                plantObjects.push(plant);
            }
          })
        }
        else if(idsFromLS[i] >= 9 && idsFromLS[i] < 17){
          FLOWER_PLANTS.forEach((plant) => {
            if(plant.id == idsFromLS[i]){
                plantObjects.push(plant);
              }
            })
        }
      }
    }

    
      let totalPrice = 0;
      plantObjects.forEach((plant)=>{
        totalPrice += (parseInt(plant.price)) ;
        parseInt(totalPrice);
      })


  return (
    <div>
        <Navbar/>
        <div className='container'>
        <h1 className='text-center py-4'> Cart </h1> 
        <div className='cart-cards-section'>
        {
          plantObjects.map((plant, index)=>{
            const {id , name, src, botName, description, price } = plant;
          
            return < Card key={index} id={id} name={name} src={src} botName={botName} description={description} price={price}/>
          })
        }
        </div>  

        </div>
        <div className='paymen-details'>
          <p>Total is : 
            <span>{totalPrice}</span>
          </p>
        </div>
        <Footer/>
    </div>
    
  )
}
export default Cart