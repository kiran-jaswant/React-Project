import React from 'react';
import "./service.css";
import {Link} from "react-router-dom";

function ServiceCard(props) {
 const{id,img,service}=props;
    return (
        <>
        
            <div className=' m-2 my-card'>
                <img src={img} className='ser-img'></img>
                <h4 className='text-center service-card-heading '><Link className="LINK" to={`/services/${id}`}>{service}</Link></h4>
            </div>

        </>
    )
}

export default ServiceCard;
