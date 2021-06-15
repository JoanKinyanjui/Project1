import React from 'react';
import './Navbar.css';
import {NavItems} from "./Navitems";
import {Link} from "react-router-dom";

function Nav (){
    return(
        <div className='Nav'>
            <nav className='navbar navbar-light bg-light'>
                <div className='nav'>
                    <h1 className='navbar-brand'>HOME SPUR</h1>
                    <i className="fas fa-bars fa-2x hamburger"></i>
                </div>
                <ul className='nav-items'>
                    {NavItems.map((item,id)=>{
                        return(
                           <Link to={item.path} className={item.cName}> <li>{item.title}</li></Link>
                        )
                        }
                    )}

                    <li className='items'><i className="fas fa-user-circle fa-1.5x"></i></li>
                </ul>
            </nav>
        </div>
    )
}
export default Nav;