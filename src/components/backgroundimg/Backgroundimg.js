import React from 'react';
import './back.css';
import backgroundImage from './bg.jpg'

function Backgroundimg() {
    const backgroundStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height:'560px'
       
      };
    
      return (
        <div style={backgroundStyle}>
          <h1 className='front-heading text-center'>Gardening Services</h1>
          <div class="tagline">
            <p><u>Design</u>&nbsp;.&nbsp;<u>Create</u> &nbsp;.&nbsp;<u>Maintain</u> </p>
          </div>
        </div>
      );
}

export default Backgroundimg;
