import React, {Component} from 'react';
import Logo from '../src/images/Logo_new.png';
import {FaFacebookSquare} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';

export default class Footer extends Component{
  render() {
    return(
    <div className="footer_div">
<footer>
<div className="footerCenter">
<img src={Logo} alt="site_logo" className="footerLogo" />
<ul className="ulFooter">
<li className="contactUs"><h2> Contact Us</h2> </li>
<li className="FAQ"> FAQ</li>
<li className="footerHelp"> Help</li>
</ul>
<h3 className="emailFooter"> Email: libbydylan@gmail.com</h3>
<h3 className="numberFooter"> Phone Number: 401-678-9618</h3>

<div className="divIconFooter">
<FaFacebookSquare className="facebookIconFooter"/>
<FaInstagram className="instageamIconFooter"/>
<FaTwitter className="twitterIconFooter"/>
</div>
</div>
</footer>
    </div>
    )

  }
}
