import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import mainimg from './logo.png';
import './About.css';
import img1 from './about1.jpg';
import img2 from './about2.jpg';
import {special,features} from "./../../config/about/aboutconfig";
import SpecialCard from '../../components/about/SpecialCard';
import FeatureCard from '../../components/about/FeatureCard';
import Footer from "../../components/Footer/Footer"

function About() {
  return (
    <>
      <Navbar />
      <h3 className='heads'>Bringing Nature's Beauty to Your Doorstep: Your Trusted Online Plant Nursery</h3>
      <img src={mainimg} className='img'></img>
      <div className='row sec'>
        <div className='col-6'>
          <h2 className='text-center about-head dm-serif'>About Us</h2>
          <div className='detail lora-1'>
            <p>At Green Heaven, we are specialise in landscape design and implementation across Mumbai and its surrounding region. This work includes residential projects such as balcony and terrace garden design to commercial large scale projects such as vertical gardens and landscape design for restaurants, resorts, corporate offices, hospitals and hotels, among others.</p>
              <p>
              We also take care of the maintenance of your space once the garden has been set up. This ensures that your garden stays lush and in bloom through the seasons. Over the years we have invested heavily in researching and developing landscape designs, green spaces, terrace gardens and vertical gardens that are suitable for the climate of the area.
              </p>
              <p>
              Our landscape designs are custom made to suit the needs of our individual clients. We understand that no two projects are the same, thus we strive to uniquely enhance the overall aesthetic of each site we have the pleasure of working with.

              </p>
              <p>
              No project is too small or large for us to take on, whether its a herb vertical garden for your apartment balcony or landscape design for a golf resort; our team of experts would be happy to walk you step by step through every stage of the process.
              </p>
              <p>Get in touch with us today and allow us to create a garden, green wall or terrace that you can enjoy with your friends and family for years to come.</p>
          </div>
        </div>
        <img src={img1} className='col-3 img1 w-45 height'></img>
        <img src={img2} className='col-3 w-45'></img>
        </div>
        <div>
          <h2 className='text-center dm-serif my-5 about-head'>Our Best Specialities</h2>
          <div className='d-flex flex-wrap justify-content-center'>
          {
            special.map((specialobj,i)=>{
              const{img,head,info}=specialobj;
              return(<SpecialCard img={img} head={head} info={info} key={i} />)

            }

            )
          }
          </div>
          <div>
            <h2 className='text-center dm-serif my-5 about-head'>Why Green Heaven?</h2>
            <h4 className='description text-center'>Select us for our commitment to quality, reliability, and customer satisfaction.</h4>
            <div className='d-flex flex-wrap justify-content-center mx-5'>
            {
              features.map((feature,i)=>{
                const{s,icon}=feature;
                return(<FeatureCard s={s} icon={icon} key={i}/>)
              }

              )
            }
            </div>
          </div>

        </div>
        <Footer />
    </>
  )
}

export default About;