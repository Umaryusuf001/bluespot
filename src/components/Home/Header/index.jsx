import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className='home-header'>
    <h2>Umar Yusuf’s</h2>
    <h1>
      <span>“</span> Blog <span>”</span>
    </h1>
    
    <p>
      awesome place to make oneself <br /> productive and entertained through
      daily updates.
    </p>

    <div className="about">
      <button><Link className='blogItem-link' to={'/about'}>About me</Link></button>
    </div>
  </header>
);

export default Header;
