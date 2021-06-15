import React from 'react';
import '../Jumbotron/Jumbotron.css';
import {Jumbotron} from "react-bootstrap";
function Box(){
    return(
        <>
        <div className='box1'>
            <Jumbotron fluid className='box1'>
                <h2 className='h2'>Get Expert   HAIR   BEAUTY  $   MASSAGE services from Home

                    <a href='#'><button className='btn btn-dark btn-lg'>Book Now</button></a>
                </h2>
            </Jumbotron>
        </div>
            <img  className='girl1' src='/images/girl1.JPG' />
            <img  className='girl1' src='/images/girl1.JPG' />
           </>
    )
}
export default Box;