import React from 'react';
import '../works/works.css';


function Props(props){
    return(
        <div className='props1'>
            <ul className='ul1'>
                <li className='li1'>
                    <a className='no'>{props.no}</a>
                </li>
                <li className='li1'>
                    {props.h3}
                    {props.p}
                </li>
            </ul>
        </div>
    )
}
export default Props;