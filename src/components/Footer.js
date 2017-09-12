import React, { Component } from 'react';
import '../scss/Footer.scss';
import Logo from '../assets/axiom-logo-small.png';
import Facebook from '../assets/fb-icon.png';
import Twitter from '../assets/twitter-icon.png';


class Footer extends Component {
  render(){
     return(
       <div className="Footer">
         <div className="container">
           <div className="row">
             <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
               <img src={Logo} alt="Small Logo"/>
             </div>
             <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 footer-links">
               <a href="#">About Us</a>
               <a href="#">Contact Us</a>
               <a href="#">Privacy Policy</a>
               <a href="#">Terms of Service</a>
               <a href="#">Site Map</a>
               <a href="#"><img src={Facebook} alt="Facebook"/></a>
               <a href="#"><img src={Twitter} alt="Twitter"/></a>
             </div>
           </div>
         </div>
       </div>
     )
  }
}

export default Footer;
