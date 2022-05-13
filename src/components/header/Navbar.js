import React from 'react';
import './Navbar.css';
import logo from '../../images/logo.svg';

const Navbar = ({ children, id }) => {
  return (
    <nav className="navbar" id={id}>
      <img src={logo} className="logo" alt="loopstudios" />
      <div className="navbar-right">{children}</div>
    </nav>
  );
};

export default Navbar;
