import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import "./Fruits.css";
import Image1 from "./mango-fruit-plant.jpeg";
import Image2 from "./Fruit-2-png.jpg";
import Image3 from "./Fruit-3-png.jpg";
import Image4 from "./fruit-4-png.jpg";
import Image5 from "./Fruit-5-png.jpg";
import Image6 from "./Tomato-png.png";
import Image7 from "./brinjal-img.jpg";
import Image8 from "./plant-img.jpg";
import Image9 from "./green-tomato-img.jpg";
import Image10 from "./potato-img.jpg";






function Fruits() {
  return (

    <div>
      <Navbar />
      <div className="fruit-page">
        <header className="head">


          <h1>Fruits and Vegitables</h1>
          <p>Explore the  beauty of Your Garden</p>
          
        </header>

        <h1 className='subheading'>Must Visit This...💜💜</h1>
        <div className="card-row">

          <div className="card">
            <img src={Image1} alt="mango" />
            <h2>Mango</h2>
            <p>Product Detail :- Supported by the well-informed team, we are providing Mango Plants. The mango is a juicy stone fruit belonging to the genus Mangifera, consisting of numerous tropical fruiting trees, cultivated mostly for edible fruit. The majority of these species are found in nature as wild mangoes. They all belong to the flowering plant family Anacardiaceous. “Indian mango” is the only mango tree commonly cultivated in many tropical and subtropical regions.</p>
            <h2>price:₹ 1,250/piece</h2>
            <button>Buy Now</button>
          </div>

          <div className="card">
            <img src={Image2} alt="Gauva" />
            <h2> Gauva</h2>
            <p>Taiwan Pink Guava is a tropical fruit rich in high-profile nutrients originally from Taiwan. With unique flavor, taste, and health-promoting qualities, these fruits easily fit into the category of new functional foods, often labeled as a super-fruit</p>
            <h2>price:1,000/piece</h2>
            <button>Buy Now</button>
          </div>

          <div className="card">
            <img src={Image3} alt="apple" />
            <h2>Apple</h2>
            <p> Apple plant buy online at low price from largest fruit plant nursery free pot included with Apple fruit plant✓ All India Delivery.An apple tree needs a certain amount of attention from its caregivers to ensure that it grows in a healthy way. For instance, an apple tree needs to be planted in a place where it will receive enough sunlight to grow. Furthermore, the spot should have adequate drainage so the apple tree will not absorb more water than it needs to live </p>
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
         <img src={Image1} alt="fun with us" className='service-img' />
         <img src={Image8} alt="we improve your Knowledge" className='service-img' />
         <img src={Image9} alt="maharashtra fort" className='service-img' />
         <img src={Image4} alt="maharashtra fort" className='service-img' />
         </div>
         <h2>• We love the feeling of fresh soil beneath our feet and we know you do too. That’s why we grow our plants in a nursery, where they can get all the care they need!</h2>

        </div>


      </div>
      <Footer />
    </div>
  )
}

export default Fruits