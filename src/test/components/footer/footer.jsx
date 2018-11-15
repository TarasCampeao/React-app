import React from 'react';
import { NavLink } from 'react-router-dom';
import './footer.sass';

const Footer = () => (
  <footer className="footer t-up">
  	<div className="footer_box container">
  		<h4>React app!</h4>
        <nav>
          <ul className="nav">
            <li><NavLink exact to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/contacts'>Contacts</NavLink></li>
          </ul>
      </nav>
  	</div>
  </footer>
);

export default Footer;