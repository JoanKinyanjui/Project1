import React from 'react';
import Props from '../works/props';
import '../works/works.css';

function Works(){
    return(
        < div className='works1'>
        <div className='works2'>
                How It Works:
        </div>
            <div className='works3'>
        <Props  no='1' h3='Choose Your Service' p='Choose from our range of expert hair,beauty and wellness services.'/>
        <Props no='2' h3='Pick A Day And Time' p='Appointments available on-demand 7 days a week,(7a.m-6p.m)'/>
        <Props no='3' h3='Make A deposit(50%)' p='Which is refundable incase the service is cancelled 12hrs before the service Day'/>
        </div>
            </div>
    )

}
export default Works;