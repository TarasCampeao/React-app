import React from 'react';
import { NavLink } from 'react-router-dom';
import './footer.sass';

const Footer = () => (
  <footer className="footer">
  	<div className="footer_box container">
  		<p className="copy_cell">React app</p>
      <nav>
        <ul className="nav t-up">
          <li><NavLink exact to='/'>Home</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/contacts'>Contacts</NavLink></li>
        </ul>
      </nav>
  	</div>
  </footer>
);

export default Footer;