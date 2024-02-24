import React from 'react';
import ServiceCard from '../../components/Gardening-services/ServiceCard';
import { services } from '../../config/gardening/gardenconfig';
import "./Gardening.css";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Backgroundimg from '../../components/backgroundimg/Backgroundimg';
import Bookbtn from '../../components/Gardening-services/Bookbtn';

function Gardening() {
  return (
    <>
    <Navbar />
       <Backgroundimg />
      <h2 className='text-center service-head'>Gardening Services We Offer</h2>

      <div className='contain d-flex flex-wrap justify-content-center'>
        {
          services.map((serviceobj, i) => {
            const { id,img, service } = serviceobj;
            return (
              <div className='col-lg-3 col-md-6 col-sm-6 mb-4 ' key={i}>
                <ServiceCard id={id} img={img} service={service} />
              </div>)
          }

          )
        }
        <div className='information-block'>
          <h1>Gardening Setup Services</h1>
          <p>Starting @ ₹ 6999</p><br></br>
          <p>You are just a phone call away from us!!</p>
          <p>Let our expert convert your space into dream garden.</p>
          <Bookbtn />
        </div>

      </div>
      <Footer />



    </>

  )
}

export default Gardening;