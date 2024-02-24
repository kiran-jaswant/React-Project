import React from 'react';
import Card from '../Card/Card';
import './FlowersCardsContainer.css';
import {FLOWER_PLANTS} from '../../config/FlowerPlantsConfig';

function FlowersCardsContainer() {
  return (
    <div className='d-flex justify-content-around flex-wrap'>
      {
        FLOWER_PLANTS.map((flower , index) => {
          const {id, name, src, botName, description, price} = flower;

          return <Card key={index} id={id} name={name} src={src} botName={botName} description={description} price={price} />
        })
      }
    </div>
  )
}

export default FlowersCardsContainer;