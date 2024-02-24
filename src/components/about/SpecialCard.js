import React from 'react';
import "./Specialcard.css";

function SpecialCard(props) {
    const { img, head, info } = props;
    return (
        <div className=' col-6 s-card '>

            <div className='d-flex'>
                <img src={img} className='s-img'></img>
                <div>
                    <h3 className='s-head'>{head}</h3>
                    <p className='s-info'>{info}</p>
                </div>

            </div>

        </div>
    )
}

export default SpecialCard;
