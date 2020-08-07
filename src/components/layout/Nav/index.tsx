import React from 'react';
import logo from '../../../images/love-energy-savings-logo.png';
import './index.css';

function Nav() {
  return (
    <header className="nav">
      <div className="nav-content">
        <div className="nav-content nav-left">
          <nav className="nav-content navigation">
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon"></span>
            </label>
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
          </nav>
        </div>
        <div className="nav-right">
          <a href="tel:08009888375" className="nav-phone">
            <span className="phone-number">0800 9888 375</span>
            <span className="phone-icon">
              <i className="fa fa-phone"></i>
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Nav;
