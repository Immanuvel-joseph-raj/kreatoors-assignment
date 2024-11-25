import React from 'react';
import './Hero.css';
import logo from '../images/Logo-kreatoors.svg';
import Spinner from './spinner';

const Header = () => {
  return (
    <header className="header">
      <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      <div className="logo">
      <img  src={logo} className="logo" />
        <Spinner strokeCount={10}/>
      </div >
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#platform">AI Platform</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
        </div>
      <button className="header-button">Book a Discovery Call</button>
    </header>
  );
};

export default Header;