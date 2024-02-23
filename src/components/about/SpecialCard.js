import React from 'react';
import "./Specialcard.css";

function SpecialCard(props) {
    const { img, head, info } = props;
    return (
        <div className='card col-4 s-card m-5'>

            <div className='d-flex'>
                <img src={img} className='s-img'></img>
                <div>
                    <h3 className='s-head'>{head}</h3>
                    <p className='s-height'>{info}</p>
                </div>

            </div>

        </div>
    )
}

export default SpecialCard;
