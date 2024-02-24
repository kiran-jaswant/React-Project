import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import "./Decorative.css"
import Image1 from "./croton.jpg";
import Image2 from "./dracaena.jpg";
import Image3 from "./arboricola.jpg";
import Image4 from "./pachira-indoor-house-plant300250.jpg";
import Image5 from "./sansevieria.jpg";
import Image6 from "./zz-plant.jpg";
import Image7 from "./pothos.jpg";
import Image8 from "./cast.jpg";
import Image9 from "./nephthytis.jpg";
import Image10 from "./neoregelia.jpg";
import Image11 from "./amazon.jpg";






function Decorative(){
  return (

    <div>
      <Navbar />
      <div className="fruit-page">
        <header className="head">


          <h1>DecorativePlants</h1>
          <p>Explore the  beauty of Your Garden</p>
          
        </header>

        <h1 className='subheading'>Must See This...</h1>
        <div className="card-row">

          <div className="card">
            <img src={Image1} alt="croton" />
            <h2>Croton plant</h2>
            <p>croton is a colorful houseplant .Easy to care for once you have successfully accimilated to your home envirnoment. </p>
            <h2>Price:₹ 550/piece</h2>
            <button>Buy Now</button>
          </div>

          <div className="card">
            <img src={Image2} alt="Dracaena" />
            <h2> Dracaena plant</h2>
            <p>Lucky Bamboo is not bamboo at all ,it is a Dracaena plant .Dracaena plant do well in typical indoor envirnoment and medium to bright.</p>
            <h2>Price:₹450/piece</h2>
            <button>Buy Now</button>
          </div>

          <div className="card">
            <img src={Image3} alt="arboricola" />
            <h2>Arboricola plant</h2>
            <p> This plant is Schefflera Arboricola.This is a braided trunk Arboricola can also have a single trunk and it is very often to grown in bush form</p>
            <h2>Price:₹299/piece</h2>
            <button>Buy Now</button>
          </div>
          <div className="card">
            <img src={Image3} alt="arboricola" />
            <h2>Arboricola plant</h2>
            <p> This plant is Schefflera Arboricola.This is a braided trunk Arboricola can also have a single trunk and it is very often to grown in bush form</p>
            <h2>Price:₹299/piece</h2>
            <button>Buy Now</button>
          </div>
          <div className="card">
            <img src={Image3} alt="arboricola" />
            <h2>Arboricola plant</h2>
            <p> This plant is Schefflera Arboricola.This is a braided trunk Arboricola can also have a single trunk and it is very often to grown in bush form</p>
            <h2>Price:₹299/piece</h2>
            <button>Buy Now</button>
          </div>
          <div className="card">
            <img src={Image3} alt="arboricola" />
            <h2>Arboricola plant</h2>
            <p> This plant is Schefflera Arboricola.This is a braided trunk Arboricola can also have a single trunk and it is very often to grown in bush form</p>
            <h2>Price:₹299/piece</h2>
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

export default Decorative