import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import "./Flowers.css";
import Image1 from "./portulaca-9-o-clock-pink-plant.webp";
import Image2 from "./plumeria-alba-plant.webp";
import Image3 from "./pentas-any-color-plant.webp";
import Image4 from "./lantana-camara-any-color-plant-.webp";
import Image5 from "./pentas-any-color-plant.webp";
import Image6 from "././plumeria-alba-plant.webp";
import Image7 from "./portulaca-9-o-clock-pink-plant.webp";
import Image8 from "./ranjai-plant-clematis-heynei-plant.webp";
import Image9 from "./rose-white-plant-.webp";
import Image10 from "./lantana-camara-any-color-plant-.webp";






function Flowers() {
  return (

    <div>
      <Navbar />
      <div className="fruit-page">
      <header className="head">

<h1>Flowers</h1>
  <p>Explore the  beauty of Your Garden</p>

</header>
        <h1 className='subheading'>Must Visit This...💜💜</h1>
        <div className="card-row">

          <div className="card">
            <img src={Image1} alt="mango"  className="card-img" />
            <h2>Pink-plant</h2>
            <p className='text-dark'>Product Detail :- Supported by the well-informed team, we are providing Mango Plants.</p>
            <h2>price:₹ 1,250/piece</h2>
            <button>Buy Now</button>
          </div>

          <div className="card">
            <img src={Image2} alt="Gauva"  className="card-img" />
            <h2>Plumeria-alba-plant</h2>
            <p className='text-dark'>Taiwan Pink Guava is a tropical fruit rich in high-profile nutrients originally from Taiwan.</p>
            <h2>price:1,000/piece</h2>
            <button>Buy Now</button>
          </div>

          <div className="card">
            <img src={Image3} alt="apple"  className="card-img"/>
            <h2>Pentas plant</h2>
            <p className='text-dark'> Apple plant buy online at low price from largest fruit plant nursery free pot included with Apple fruit plant.</p>
            <h2>1,299/piece</h2>
            <button>Buy Now</button>
          </div>



          <div className="card">
            <img src={Image1} alt="mango"  className="card-img" />
            <h2>Pink-plant</h2>
            <p className='text-dark'>Product Detail :- Supported by the well-informed team, we are providing Mango Plants.</p>
            <h2>price:₹ 1,250/piece</h2>
            <button>Buy Now</button>
          </div>

          <div className="card">
            <img src={Image2} alt="Gauva"  className="card-img" />
            <h2>Plumeria-alba-plant</h2>
            <p className='text-dark'>Taiwan Pink Guava is a tropical fruit rich in high-profile nutrients originally from Taiwan.</p>
            <h2>price:1,000/piece</h2>
            <button>Buy Now</button>
          </div>

          <div className="card">
            <img src={Image3} alt="apple"  className="card-img"/>
            <h2>Pentas plant</h2>
            <p className='text-dark'> Apple plant buy online at low price from largest fruit plant nursery free pot included with Apple fruit plant.</p>
            <h2>1,299/piece</h2>
            <button>Buy Now</button>
          </div>

          <div className="card">
            <img src={Image1} alt="mango"  className="card-img" />
            <h2>Pink-plant</h2>
            <p className='text-dark'>Product Detail :- Supported by the well-informed team, we are providing Mango Plants.</p>
            <h2>price:₹ 1,250/piece</h2>
            <button>Buy Now</button>
          </div>

          <div className="card">
            <img src={Image2} alt="Gauva"  className="card-img" />
            <h2>Plumeria-alba-plant</h2>
            <p className='text-dark'>Taiwan Pink Guava is a tropical fruit rich in high-profile nutrients originally from Taiwan.</p>
            <h2>price:1,000/piece</h2>
            <button>Buy Now</button>
          </div>

          <div className="card">
            <img src={Image3} alt="apple"  className="card-img"/>
            <h2>Pentas plant</h2>
            <p className='text-dark'> Apple plant buy online at low price from largest fruit plant nursery free pot included with Apple fruit plant.</p>
            <h2>1,299/piece</h2>
            <button>Buy Now</button>
          </div>

        </div> <hr />
        <div className='subpart'>
          <h2 className='subheading2'>Check out some beautiful nursery inspirations with original nursery themes plus, classics with a twist. Some you've never seen!</h2>
          <img src={Image3} alt="maharashtra fort" className='img-size' />
          <img src={Image2} alt="maharashtra fort" className='img-size' />
          <img src={Image1} alt="maharashtra fort" className='img-size' />
        </div> <hr />
        <div className='service-card'>
          <h3>We Are Providing Different Green Sanctuary That You May Like..</h3>
          <div><img src={Image5} alt="maharashtra fort" className='img-service' />
            <img src={Image6} alt="maharashtra fort" className='img-service' />
            <img src={Image4} alt="maharashtra fort" className='img-service' /></div>
         
        </div>
        <div className='last-container'>
          <h3>Why Choose Us ??? </h3>
         <div className='sub-last-container'>
           <div className='card'> 
          <p className='card-body'>we improve your Knowledge</p> 
           </div>
           <img src={Image7} alt="fun with us" className='service-img' />
         <img src={Image8} alt="we improve your Knowledge" className='service-img' />
         <img src={Image9} alt="maharashtra fort" className='service-img' />
         <img src={Image10} alt="maharashtra fort" className='service-img' />
         </div>
         <h2>• We love the feeling of fresh soil beneath our feet and we know you do too. That’s why we grow our plants in a nursery, where they can get all the care they need!</h2>

        </div>


      </div>
      <Footer />
    </div>
  )
}

export default Flowers