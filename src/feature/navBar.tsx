import React from 'react';
import logo from '../images/benny.png';

export const NavBar: React.FC = () => {
    return (
      <nav className="nav-bar">
        <ul className="nav-bar__list">
          <li><a href="#" className="nav-bar__logo" id="logo"><img src={logo} height="50" width="100" /></a></li>
            <div className="nav-bar__item-list">
              <li><a href="#" className="nav-bar__item" id="aboutUs">About Us</a></li>
              <li><a href="#" className="nav-bar__item" id="workOut">Work Out</a></li>
              <li><a href="#" className="nav-bar__item" id="nutrition">Nutrition</a></li>
              <li><a href="#" className="nav-bar__item" id="pricing">Pricing</a></li>
              <li><a href="#" className="nav-bar__item" id="contactUs">Contact Us</a></li>
            </div>
        </ul>
      </nav>  
    )
}
