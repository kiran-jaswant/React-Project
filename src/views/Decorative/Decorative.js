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
import Image11 from "./img1.jpg";
import Image12 from "./img2.jpg";
import Image13 from "./img3.jpg";
import Image14 from "./img4.jpg";
import Image15 from "./plant4.jpg";
import Image16 from "./plant3.jpg";
import Image17 from "./plant2.jpg";
import Image18 from "./plant1.jpg";
function Decorative() {
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
            <p>Croton is a colorful houseplant .Easy to care for once you have successfully accimilated to your home envirnoment. </p>
            <h2>Price:₹ 550</h2>
            <button>Buy Now</button>
          </div>

          <div className="card">
            <img src={Image2} alt="Dracaena" />
            <h2> Dracaena plant</h2>
            <p>Lucky Bamboo is not bamboo at all ,it is a Dracaena plant .Dracaena plant do well in typical indoor envirnoment and medium to bright.</p>
            <h2>Price:₹450</h2>
            <button>Buy Now</button>
          </div>

          <div className="card">
            <img src={Image3} alt="arboricola" />
            <h2>Arboricola plant</h2>
            <p> This plant is Schefflera Arboricola.This is a braided trunk Arboricola can also have a single trunk and it is very often to grown in bush form</p>
            <h2>Price:₹299</h2>
            <button>Buy Now</button>
          </div>
          <div className="card">
            <img src={Image4} alt="money tree" />
            <h2>Money Tree plant</h2>
            <p> This plant is called by the common name of Money.The Botanicalname is Pachira.Pachira does well in medium to bright indirect light </p>
            <h2>Price:₹270</h2>
            <button>Buy Now</button>
          </div>
          <div className="card">
            <img src={Image5} alt="Mother in law" />
            <h2>Mother in Law plant</h2>
            <p> An easy house plant ,Mother in law Tongue does not require much care .Will do best in very bright lihgt ,even some morning sun . </p>
            <h2>Price:₹309</h2>
            <button>Buy Now</button>
          </div>
          <div className="card">
            <img src={Image6} alt="arboricola" />
            <h2>ZZ plant</h2>
            <p> An easy houseplant the zz plant does not require much care.Will do best in very bright light even some morning sun. Zz -Zamioculcas zamifolia</p>
            <h2>Price:₹299</h2>
            <button>Buy Now</button>
          </div>
          <div className="card">
            <img src={Image7} alt="Golden pathos" />
            <h2>Golden Pathos</h2>
            <p> It might win the award for the most popular houseplant.The scientific name of Golden pathosis Epipremnum Aureum.  </p>
            <h2>Price:₹ 350</h2>
            <button>Buy Now</button>
          </div>
          <div className="card">
            <img src={Image8} alt="croton" />
            <h2>Cast Iron Plant </h2>
            <p>Cast iron plant can be grown indoors and outdoors .It will thin in indoor lights .I grow them on my porch and patio </p>
            <h2>Price:₹ 250</h2>
            <button>Buy Now</button>
          </div>
          <div className="card">
            <img src={Image9} alt="croton" />
            <h2>Nephthytis Plant</h2>
            <p>Nephthytis is an easy house plant to care for and grow .Will do best with bright ,indirected sunlight .Will tolerate lower light level </p>
            <h2>Price:₹ 300</h2>
            <button>Buy Now</button>
          </div>


        </div> <hr />
        <div className='subpart'>
          <h2 className='subheading2'>Check out some beautiful nursery inspirations with original nursery themes plus, classics with a twist. Some you've never seen!</h2>
          <img src={Image11} alt="maharashtra fort" className='img-size' />
          <img src={Image12} alt="maharashtra fort" className='img-size' />
          <img src={Image13} alt="maharashtra fort" className='img-size' />
          <img src={Image14} alt="maharashtra fort" className='img-size' />
        </div> <hr />

        <div className='last-container'>
          <h3>Why Choose Us ??? </h3>
          <div className='sub-last-container'>
            <img src={Image15} alt="fun with us" className='service-img' />
            <img src={Image16} alt="we improve your Knowledge" className='service-img' />
            <img src={Image17} alt="maharashtra fort" className='service-img' />
            <img src={Image18} alt="maharashtra fort" className='service-img' />
          </div>
          <h2> We love the feeling of fresh soil beneath our feet and we know you do too. That’s why we grow our plants in a nursery, where they can get all the care they need!</h2>

        </div>


      </div>
      <Footer />
    </div>
  )
}

export default Decorative