import React from 'react';
import "./service.css"

function ServiceCard(props) {
 const{img,service}=props;
    return (
        <>
        
            <div className='card m-2 my-card'>
                <img src={img} className='ser-img'></img>
                <h4 className='text-center head'>{service}</h4>
            </div>

        </>
    )
}

export default ServiceCard;
