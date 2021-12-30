import React from 'react';
import { Link } from 'react-router-dom';
import Me from "../../../config/me.jpeg";
import "./about.css";

const Header = () => (
  <div className='home-header abt'>
    <h2>About me</h2>
    <img src={Me} alt="Umar" className='me-img'/>
    <h3 className="c-me">Contact me</h3>
    <ul className='c-links'>
      <li>Email: <a href="mailto:umarymd@gmail.com">umarymd@gmail.com</a></li>
      <li>Instagram: <a href="https://instagram.com/Umaryusuf_">@Umaryusuf_</a></li>
      <li>Twitter: <a href="https://twitter.com/umarr_yusuf">@umarr_yusuf</a></li>
      <li>Whatsapp/Phone no: <a href="tel:+2347035851359">07035851359</a></li>
    </ul>
    <div className="about">
      <button ><Link to={"/"} className="abt-link">Go Home</Link></button>
    </div>
  </div>
);

export default Header;
