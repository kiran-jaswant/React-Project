import React from 'react';
import ServiceCard from '../../components/Gardening-services/ServiceCard';
import { services } from '../../config/gardening/gardenconfig';
import "./Gardening.css";
import Navbar from '../../components/Navbar/Navbar';

function Gardening() {
  return (
    <>
      <Navbar />
      <h1 className='text-center'>Gardening services</h1>

      <div className='contain d-flex flex-wrap justify-content-center'>
        {
          services.map((serviceobj, i) => {
            const { img, service } = serviceobj;
            return (
              <div className='col-lg-3 col-md-6 col-sm-6 mb-4 ' key={i}>
                <ServiceCard img={img} service={service} />
              </div>)
          }

          )
        }

      </div>



    </>

  )
}

export default Gardening;