import React from 'react';
import logo from '../images/benny.png';

export const NavBar: React.FC = () => {
    return (
      <nav className="nav-bar">
        <ul className="nav-bar__list">
          <li><a href="#" className="nav-bar__logo" id="logo"><img src={logo} height="70" width="130" /></a></li>
            <div className="nav-bar__item-list">
              <li><a href="#" className="nav-bar__item" id="whyUs">WHY US?</a></li>
              <li><a href="#" className="nav-bar__item" id="memberships">MEMBERSHIPS</a></li>
              <li><a href="#" className="nav-bar__item" id="classTime">CLASS TIMETABLES</a></li>
              <li><a href="#" className="nav-bar__item" id="training">TRAINING</a></li>
              <li><a href="#" className="nav-bar__item" id="contactUs">CONTACT US</a></li>
            </div>
        </ul>
      </nav>  
    )
}
