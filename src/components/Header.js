import React, { Component } from 'react';
import '../scss/Header.scss';
import Logo from '../assets/axiom-logo-main.png'
import Facebook from '../assets/fb-icon.png';
import Twitter from '../assets/twitter-icon.png';

class Header extends Component {
  render(){
    return (
      <div className="Header">
        <div className="container">
          <div className="logo col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <img src={Logo} alt="Axiom Logo"/>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 clickables">
            <div className="search">
              <input type="text" className="search-bar" placeholder="SEARCH FOR GEAR"/>
            </div>
            <div className="header-links">
              <a className="socials" href="#"><img src={Facebook} alt="Facebook"/></a>
              <a className="socials" href="#"><img src={Twitter} alt="Twitter"/></a>
              <a className="account" href="#">My Account</a>
              <a className="cart" href="#">Cart</a>
              <a className="logout" href="#">Logout</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
