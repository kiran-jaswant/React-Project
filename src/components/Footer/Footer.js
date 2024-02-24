import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin  } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';
import logo from "./logo.png";

function Footer() {
  return (
    <div>
      <div className='footer-container'>
        <div className='footer-sections'>
          <h5 className='footer-shop-title'>
            <img src={logo} alt='logo' className='footer-img' />
            <Link to='/' className='footer-anchor' style={{color:'#00b300'}}>Green Heaven</Link>
            
          </h5>
          <div className='section-div'>
            <p>
              Having plants in our homes or in our offices doesn't just look good, it also boosts our mood, makes us more productive, and cleans the air around us by absorbing toxins.
            </p>
          </div>

        </div>
        <div className='footer-sections'>
          <h5 className='section-title'> Main Menu</h5>
          <div className='section-div'>
            <Link className='nav-link menu footer-anchor'> Home </Link>
            <Link className='nav-link menu footer-anchor'> Login </Link>
            <Link className='nav-link menu footer-anchor'> Blog </Link>
            <Link className='nav-link menu footer-anchor'> About us </Link>
            <Link className='nav-link menu footer-anchor'> Contact us </Link>
          </div>
        </div>
        <div className='footer-sections'>
          <h5 className='section-title'> Follow Us</h5>
          <div className='section-div'>

            <Link className='nav-link menu footer-anchor'> <FontAwesomeIcon icon={faLinkedin} /> LinkedIn </Link>

            <Link className='nav-link menu footer-anchor'> <FontAwesomeIcon icon={faInstagram} /> Instagram </Link>

            <Link className='nav-link menu footer-anchor'> <FontAwesomeIcon icon={faFacebook} /> Facebook </Link>

            <Link className='nav-link menu footer-anchor'> <FontAwesomeIcon icon={faTwitter} /> Twitter </Link>

          </div>
        </div>
        <div className='footer-sections'>
          <h5 className='section-title'> Contact Us</h5>
          <div className='section-div'>

            <Link to='https://maps.app.goo.gl/N3ngnED1vBDYVvj19' target='black' className='nav-link menu footer-anchor' >B.D. College of Engineering</Link>

            <Link to='mailto:ashishgore393@gmail.com' className='nav-link men footer-anchoru'>ashishgore393@gmail.com</Link>
            <Link to='tel:+918975004427' className='nav-link menu footer-anchor'> +91-8975004427</Link>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;