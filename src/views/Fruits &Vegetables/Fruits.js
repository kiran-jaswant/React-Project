import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import "./Fruits.css";
import Image1 from "./Mango-img.jpg";
import Image2 from "./Fruit-2-png.jpg";
import Image3 from "./Fruit-3-png.jpg";
import Image4 from "./fruit-4-png.jpg";
import Image5 from "./Fruit-5-png.jpg";
import Image6 from "./Tomato-png.png";
import Image7 from "./brinjal-img.jpg";
import Image8 from "./plant-img.jpg";
import Image9 from "./green-tomato-img.jpg";
import Image10 from "./potato-img.jpg";
import Image11 from "./fruit-img.jpg";
import Image12 from "./Sweetpotato-img.jpg";
import Image13 from "./grapes-img.jpg";






function Fruits() {
  return (

    <div>
      <Navbar />
      <div className="fruit-page">
        <header className="head">


          <h1>Fruits and Vegitables</h1>
          <p>Explore the  beauty of Your Garden</p>
          
        </header>

        <h1 className='subheading'>Must See This...</h1>
        <div className="card-row">

          <div className="card">
            <img src={Image1} alt="mango" />
            <h2>Mango</h2>
            <p>At NurseryLive, we take pride in offering you these magnificent Mango Plants.</p>
          
            <h2>price:₹ 1,250</h2>
            <button>Buy Now</button>
          </div>

          <div className="card">
            <img src={Image2} alt="Gauva" />
            <h2> Gauva</h2>
            <p>The guava fruit grows on a small tree with a wide, short canopy and a sturdy single to multi-stemmed trunk.</p>
            <h2>price:₹1,000</h2>
            <button>Buy Now</button>
          </div>

          <div className="card">
            <img src={Image3} alt="apple" />
            <h2>Apple</h2>
            <p> Apple plant buy online at low price from largest fruit plant nursery free pot included with Apple fruit plant.</p>
            <h2>price:₹1,299</h2>
            <button>Buy Now</button>
          </div>

          <div className="card">
            <img src={Image7} alt="brinjal" />
            <h2>Brinjal</h2>
            <p>It is a pure line selection from Varikkathiri.Fruits are slightly oblong having dark purple streaks under  pale green backround without spines on the calyx surface. </p>
            <h2>price:₹1,299</h2>
            <button>Buy Now</button>
          </div>

          <div className="card">
            <img src={Image10} alt="potato" />
            <h2>Potato</h2>
            <p> The potato is a starchy root vegetable native to the Americas that is consumed as a staple food in many parts of the world. Potato plants grow up to 1m tall with hairy stems and leaves divided into around four leaflet pairs.Flowers can be white.Potatoes are also made into a range of foodstuffs </p>
            <h2>price:₹1,299</h2>
            <button>Buy Now</button>
          </div>

          <div className="card">
            <img src={Image13} alt="grapes" />
            <h2>Grapes</h2>
            <p>  Grapes are naturally classified as berries.  The plant’s length can reach over 45 feet. One plant at most can deliver around 35 – 40 bunches of grapes. </p>
            <h2>price:₹1,299</h2>
            <button>Buy Now</button>
          </div>

          <div className="card">
            <img src={Image12} alt="potato" />
            <h2>Sweet Potato</h2>
            <p> Sweet potato is mainly propagated by vine cuttings of 25-30 cm length. Cuttings for planting are multiplied in two nurseries. </p>
            <h2>price:₹1,299</h2>
            <button>Buy Now</button>
          </div>

          <div className="card">
            <img src={Image4} alt="jamun" />
            <h2>Jamun</h2>
            <p> The Jamun is evergreen, fruit plant in Myrataceae family with oblong opposite leaves that are smooth, glossy and having a terpentine smell. </p>
            <h2>price:₹1,299</h2>
            <button>Buy Now</button>
          </div>

          <div className="card">
            <img src={Image3} alt="apple" />
            <h2>Apple</h2>
            <p> Apple plant buy online at low price from largest fruit plant nursery free pot included with Apple fruit plant✓ All India Delivery.  </p>
            <h2>price:₹1,299</h2>
            <button>Buy Now</button>
          </div>

        </div> <hr />
        <div className='subpart'>
          <h2 className='subheading2'>Check out some beautiful nursery inspirations with original nursery themes plus, classics with a twist. Some you've never seen!</h2>
          <img src={Image4} alt="fruits" className='img-size' />
          <img src={Image5} alt="fruits" className='img-size' />
          <img src={Image6} alt="fruits" className='img-size' />
          <img src={Image11} alt="fruits" className='img-size' />
          

        </div> <hr />
    
        <div className='last-container'>
          <h3>Why Choose Us ??? </h3>
         <div className='sub-last-container'>
         <img src={Image1} alt="fun with us" className='service-img' />
         <img src={Image8} alt="we improve your Knowledge" className='service-img' />
         <img src={Image9} alt="fruits " className='service-img' />
         <img src={Image4} alt="fruits" className='service-img' />
         </div>
         <h2>• We love the feeling of fresh soil beneath our feet and we know you do too. That’s why we grow our plants in a nursery, where they can get all the care they need!</h2>

        </div>


      </div>
      <Footer />
    </div>
  )
}

export default Fruits