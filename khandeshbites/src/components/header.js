// Header.js
import React from 'react';
import { NavLink } from "react-router-dom";
import '../Style/Header.css';

function Header() {
    return (
        <>
            <div className='slogbox '>
                <div>"रोज नवा अनुभव, रोज नवा स्वाद!"</div>
            </div>
            <div className='row container-fluid mt-4 headerdiv'>
                <div className='col-xl-8  col-md-6 col-sm-6 logo container'>
                <img src="./Assets/Vector.png" alt="No Image" className='yummy'/>
                </div>
                <div className=' col-xl-4  col-md-6 col-sm-6 navbar'>
                    <span className='NavTab'><NavLink className="navigaters" to="/">HOME</NavLink></span>
                    <span className='NavTab'><NavLink className="navigaters" to="/recipes">RECIPES</NavLink></span>
                    <span className='NavTab'><NavLink className="navigaters" to="/about">ABOUT</NavLink></span>
                </div>
             
               
            </div>
            <hr></hr>
           
        </>
    );
}

export default Header;
