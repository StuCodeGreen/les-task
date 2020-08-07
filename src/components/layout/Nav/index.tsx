import React from 'react';
import logo from '../../../images/love-energy-savings-logo.png';
function Nav() {
  return (
    <nav className="nav">
      <div className="nav-content">
        <div className="nav-left">
          <div className="nav-logo">
            <img src={logo} alt="Logo" />
          </div>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <a href="#business-energy">Business Energy</a>
            </li>
            <li className="nav-menu-item">
              <a href="#home-energy">Home Energy</a>
            </li>
            <li className="nav-menu-item">
              <a href="#other-services">Other Services</a>
            </li>
            <li className="nav-menu-item">
              <a href="#about-us">About us</a>
            </li>
          </ul>
        </div>
        <div className="nav-right">
          <a href="tel:08009888375" className="nav-phone">
            0800 9888 375
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
