// Header.js
import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import '../Style/Header.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

class Header extends Component {
  componentDidMount() {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }

  render() {
    return (
      <div className='Nav-bar' data-aos="zoom-in">
        <img   className='Hchef-img' src="./Assets/cheflog.png" alt="Logo" />

        <div className='nav-links'>
          <div className="nav-item">
            <NavLink to="/" className='hover-box'>Home</NavLink>
            <img src="./Assets/headhover.png" className="hover-img" alt="Home" />
          </div>
          <div className="nav-item">
            <NavLink to="/recipes" className='hover-box'>Recipe</NavLink>
            <img src="./Assets/headhover.png" className="hover-img" alt="Recipe" />
          </div>
          <div className="nav-item">
            <NavLink to="/about" className='hover-box'>About</NavLink>
            <img src="./Assets/headhover.png" className="hover-img" alt="About" />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
