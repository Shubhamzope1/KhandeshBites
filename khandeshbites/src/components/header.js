// Header.js
import React from 'react';
import { NavLink } from "react-router-dom";
import '../Style/home.css';

function Header() {
    return (
        <>
            <div className='slogbox '>
                <div>"रोज नवा अनुभव, रोज नवा स्वाद!"</div>
            </div>
            <nav className='row container-fluid mt-4 headerdiv'>
                <div className='col-xl-8  col-md-8 col-sm-12 logo container'>
                    <span className='logoK'>K</span><span className='logoH'>handesh</span>
                    <span className='logoK'>&nbsp;B</span><span className='logoH'>ites</span>
                </div>
                <div className=' col-xl-4  col-md-2 col-sm-12 navbar'>
                    <span className='NavTab'><NavLink className="navigaters" to="/">HOME</NavLink></span>
                    <span className='NavTab'><NavLink className="navigaters" to="/recipes">RECIPES</NavLink></span>
                    <span className='NavTab'><NavLink className="navigaters" to="/about">ABOUT</NavLink></span>
                    <span className='NavTab'><a className="fas fa-search Hicon-search" href='#search'></a></span>
                </div>
             
               
            </nav>
            <hr></hr>
           
        </>
    );
}

export default Header;
