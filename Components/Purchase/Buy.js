import React from 'react';
import '../Purchase/Buy.css'
import {Link} from "react-router-dom";

function Buy(){
    return(
        <>
            <div className='Socials'>
                <ul className='Socials1'>
        <li href='#' className='Social-accounts'>
            <i className="fab fa-facebook fa-2x"></i>
        </li>
        <li href='#' className='Social-accounts'>
            <i className="fab fa-instagram fa-2x"></i>
        </li>
        <li href='#'className='Social-accounts'>
            <i className="fab fa-twitter-square fa-2x"></i>
        </li>
    </ul>
            </div>
<div className='Socials'>
    <ul className='Socials1'>
        <li href='#' className='Social-accounts'>
            1,000<br />
CUSTOMER REVIEWS
        </li>
        <li href='#' className='Social-accounts'>
2,500<br />
SERVICES COMPLETED
        </li>
        <li href='#'className='Social-accounts'>
4.8<br />
AVERAGE RATING
        </li>
    </ul>
</div>
            <div className='Buy'>
 <h5 className='buyh5'>
     Shop for the best beauty products for your SkinCare Routine,braids,wigs,body lotion ,full makeup pallet and MORE!
 </h5>
                <div className='Buy1'>
                    <img className='buy' src='https://i.pinimg.com/236x/a6/64/0e/a6640ea96e497b4e9c2ffde4dc7b0435.jpg'/>
                    <img className='buy' src='https://i.pinimg.com/564x/e8/f2/79/e8f27999d83b16a160f7af79253be381.jpg'/>
                    <img className='buy' src='https://cdn.shopify.com/s/files/1/0023/9648/7716/files/trip_cc3fb104-7492-4f9d-bfa6-1081bea84a03_large.jpg?v=1556174681'/>
                    <img className='buy' src='https://i.pinimg.com/236x/05/6b/a2/056ba208ea2dbe00f1734448daba6991.jpg'/>
                    <img className='buy'src='https://i.pinimg.com/236x/0b/8a/da/0b8ada757145e0e85e7e36b96ff0c962.jpg'/>
                    <img className='buy' src='https://i.pinimg.com/236x/1f/60/0a/1f600a50bb0d99357587169a05e2249e.jpg'/>
                    <img className='buy' src='https://i.pinimg.com/236x/ea/62/8f/ea628fd7a815f15f75179f7125a2e226.jpg'/>

                </div>

                <Link to='/shop'><button className='btn btn-lg'>Shop Now</button></Link>
        </div>
        </>
    )
}
export default Buy;