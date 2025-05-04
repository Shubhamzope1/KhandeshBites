import React from 'react';
import { NavLink } from "react-router-dom";
import '../Style/footer.css';

function Footer() {
    return (
        
        <div className='slogbox-foot g-0'>
            <div className="row g-0 container-fluid pos">
                <div className="col-lg-4 col-sm-4 high" >
                    <h3 className='maintxt'>Nav</h3>
                    <ul>
                        <li id="footer"><NavLink className="navigao" to="/">home</NavLink></li>
                        <li id="footer"><NavLink className="navigao" to="/recipes">Recipes</NavLink></li>
                        <li id="footer"><NavLink className="navigao" to="/about">About</NavLink></li>
                    </ul>

                </div>
                <div className="col-lg-4 col-sm-4 high">
                    <h3 className='maintxt'>FOR YOU</h3>
                    <ul>
                        <li id="footer"><NavLink className="navigao" to="/contact">ContactUs</NavLink></li>
                        <li id="footer"><NavLink className="navigao" to="/privacy">Privacy policy</NavLink></li>
                        
                    </ul>
                </div>
                <div className="col-lg-4  col-sm-4 fly " >
                    <h3 className="touch">KEEP IN TOUCH</h3>
                    <div className="g-0 container fly">Project By:<a href="mailto:shubhamzope1@gmail.com" className="mail"  > KhandeshBites </a>
                    <a href="https://www.instagram.com/shubhamzope1" target="_blank" rel="noreferrer">
                                <i class="fab fa-instagram fontawesome-style text-white start"></i>
                            </a>
                    </div>
                    <div className="text-start">
                    

                
                            
                  



                    </div>
                </div>
            </div>
            <div>"copyright@Khandesh Bites"</div>
        </div>
       
    );
}

export default Footer;
