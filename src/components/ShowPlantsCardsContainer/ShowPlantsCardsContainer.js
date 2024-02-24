import React from 'react';
import Card from '../Card/Card';
import './ShowPlantsCardsContainer.css';
import { SHOW_PLANTS } from '../../config/ShowPlantsConfig';

function ShowPlantsCardsContainer() {
  return (
    <div className='d-flex justify-content-around flex-wrap'>
      {
        SHOW_PLANTS.map((plant , index) => {
          const {id, name, src, botName, description, price} = plant;

          return <Card key={index} id={id} name={name} src={src} botName={botName} description={description} price={price} />
        })
      }
    </div>
  )
}

export default ShowPlantsCardsContainer;