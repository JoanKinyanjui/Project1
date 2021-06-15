import React from 'react';
import './Email.css';
function Email(){
    return(
        <div className='Email'>
            <div className='logo'>
                <img src='/images/best1.png'/>
            </div>
            <div className='Email1'>
              <h5>
                New to Home Spur?
              </h5>
                <p>Subscribe to our newsletter to get updates on the trends,what's new and offers and discounts</p>
        </div>
    <div className='Email1'>
            <form>
                <label>Email Address</label>
                <input type='text' name='email' placeholder='@gmail.com'/>
                <button className='btn' type='submit'>Male</button>
                <button  className='btn' type='submit'>Female</button>
            </form>
        </div>
    </div>
    )
}
export default  Email;