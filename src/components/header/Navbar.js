import React from 'react';
import './Navbar.css';
import logo from '../../images/logo.svg';

const Navbar = ({ children }) => {
  return (
    <nav className="navbar" id="navbar">
      <img src={logo} className="logo" alt="loopstudios" />
      <div className="navbar-right">{children}</div>
    </nav>
  );
};

export default Navbar;
