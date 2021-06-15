import React from 'react';
import '../Gallery/Gallery.css';
function Box(props){
    return(
     <div className='gallery'>
         <img  className='Boximg'  src={props.src} alt={props.alt}/>
         <div className='Boxlabel' >{props.label}</div>
     </div>
    )
}
export default Box;