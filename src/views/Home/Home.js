import React from 'react';
import './Home.css';
import ShowPlantsCardsContainer from '../../components/ShowPlantsCardsContainer/ShowPlantsCardsContainer';
import FlowersCardsContainer from '../../components/FlowersCardsContainer/FlowersCardsContainer';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

function Home() {
  return (
    <div>
      <Navbar />
      <div className='containers'>
        <h1 className='container-title'>Show Plants</h1>
        <ShowPlantsCardsContainer />
      </div>
      <hr />
      <div className='containers'>
        <h1 className='container-title'> Flowers </h1>
        <FlowersCardsContainer />
      </div>
      <hr />
      <Footer />
    </div>
  )
}

export default Home