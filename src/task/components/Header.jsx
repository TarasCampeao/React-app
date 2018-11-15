import React from 'react';
import { NavLink } from 'react-router-dom';
//import './header.css';

const Header = () => (
  <header className="header">
    <nav>
      <ul className="nav">
        <li><NavLink exact to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/contacts'>Contacts</NavLink></li>
        <li>123</li>
      </ul>
    </nav>
  </header>
);

export default Header;