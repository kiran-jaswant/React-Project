import React from 'react';
import './Home.css';
import ShowPlantsCardsContainer from '../../components/ShowPlantsCardsContainer/ShowPlantsCardsContainer';
import FlowersCardsContainer from '../../components/FlowersCardsContainer/FlowersCardsContainer';
import Navbar from '../../components/Navbar/Navbar'

function Home() {
  return (
    <div>
      <Navbar />

      <div className='containers'>
        <h1 classNagme='container-title'>Show Plants</h1>
        <ShowPlantsCardsContainer />
      </div>
      <div className='containers'>
        <h1 className='container-title'> Flowers </h1>
        <FlowersCardsContainer />
      </div>
      

      <div className='footer'> Footer </div>
    </div>
  )
}

export default Home