import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import "./Flowers.css";
import Image1 from "./plant.jpg";
import Image2 from "./plumeria-alba-plant.webp";
import Image3 from "./pentas-any-color-plant.webp";
import Image4 from "./lantana-camara-any-color-plant-.webp";
import Image5 from "./calla-lily-random.webp";
import Image6 from "././hyacinth-blue-pearl-4-flower.webp";
import Image7 from "./portulaca-9-o-clock-pink-plant.webp";
import Image8 from "./ranjai-plant-clematis-heynei-plant.webp";
import Image9 from "./rose-white-plant-.webp";
import Image10 from "./lantana-camara-any-color-plant-.webp";
import Image11 from "./ixia.webp";
import Image12 from "./parijat-tree.jpg";
import Image13 from "./nurserylive-g-tulip.webp";





function Flowers() {
  return (

    <div>
      <Navbar />
      <header className='head'>
        <h1>Decorative Plants</h1>
        <p>Explore the  beauty of Your Garden</p>
      </header>
      <div className="fruit-page">
  
        <h1 className='subheading'>Must See This...</h1>
        <div className="card-row">

          <div className="card">
            <img src={Image1} alt="mango"  className="card-img" />
            <h2>Flowers plant</h2>
            <p className='text-dark'>Flowers consist of a combination of vegetative organs – sepals that enclose .</p>
            <h2>price:₹ 400</h2>
            <button>Buy Now</button>
          </div>

          <div className="card">
            <img src={Image2} alt="Gauva"  className="card-img" />
            <h2>Plumeria-alba-plant</h2>
            <p className='text-dark'>Plumeria blossoms are fragrant and appealing additions to the house or garden.</p>
            <h2>price:₹ 300</h2>
            <button>Buy Now</button>
          </div>

          <div className="card">
            <img src={Image3} alt="apple"  className="card-img"/>
            <h2>Pentas plant</h2>
            <p className='text-dark'> The genus Pentas belongs to the Rubiaceae family, which contains approximately 40 species.</p>
            <h2>price:₹ 350</h2>
            <button>Buy Now</button>
          </div>



          <div className="card">
            <img src={Image4} alt="mango"  className="card-img" />
            <h2>lantana plants</h2>
            <p className='text-dark'>Lantana camara is supplement that is used to treat a variety of ailments, including digestive issues.</p>
            <h2>price:₹ 550</h2>
            <button>Buy Now</button>
          </div>

          <div className="card">
            <img src={Image5} alt="Gauva"  className="card-img" />
            <h2>lily plant</h2>
            <p className='text-dark'>In Chinese culture, lilies are known to symbolize good luck and long lasting love</p>
            <h2>price:₹ 450</h2>
            <button>Buy Now</button>
          </div>

          <div className="card">
            <img src={Image6} alt="apple"  className="card-img"/>
            <h2>Hyacinth blue Plant</h2>
            <p className='text-dark'> Place pre-chilled bulb, root down, into the vase so the bottom of the bulb is touching the water.</p>
            <h2>price:₹ 200</h2>
            <button>Buy Now</button>
          </div>

          <div className="card">
            <img src={Image11} alt="mango"  className="card-img" />
            <h2>Portulaca pink plant</h2>
            <p className='text-dark'>PPortulaca pilosa is a species of flowering succulent plant in the purslane family, Portulacaceae.</p>
            <h2>price:₹ 300</h2>
            <button>Buy Now</button>
          </div>

          <div className="card">
            <img src={Image8} alt="Gauva"  className="card-img" />
            <h2> Ranjai plant</h2>
            <p className='text-dark'>In addition to their ornamental value, Ranjai plants are also known to have medicinal properties.</p>
            <h2>price:₹ 450</h2>
            <button className='btn'>Buy Now</button>
          </div>

          <div className="card">
            <img src={Image12} alt="apple"  className="card-img"/>
            <h2>Parijat plant</h2>
            <p className='text-dark'> Nyctanthes arbor-tristis is a species of Nyctanthes native to South Asia and Southeast Asia.</p>
            <h2>price:₹250</h2>
            <button>Buy Now</button>
          </div>

        </div> <hr />
        <div className='subpart'>
          <h2 className='subheading2'>Check out some beautiful nursery inspirations with original nursery themes plus, classics with a twist. Some you've never seen!</h2>
          <img src={Image3} alt="maharashtra fort" className='img-size' />
          <img src={Image13} alt="maharashtra fort" className='img-size' />
          <img src={Image1} alt="maharashtra fort" className='img-size' />

        </div> <hr />
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

export default Flowers