import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.sass';

const Header = () => (
  <header className="header">
    <div className="header_box container">
      <div className="logo t-up">
        <NavLink exact to='/'>Logo</NavLink>
      </div>
      <nav>
        <ul className="nav">
          <li><NavLink exact to='/'>Home</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/contacts'>Contacts</NavLink></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;