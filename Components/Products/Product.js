import React from 'react';
import './shop.css';

function Product(props){
    return(
        <div className='BigBox'>
            <div className='SmallBox'>
                <img className='SmallBoxImg' src={props.src} alt={props.alt}/>
                <div className='SmallBoxLabel'>{props.alt}</div>
                <div className='SmallBoxPrice'>{props.price}</div>
            </div>
        </div>
    )
}
export default Product;