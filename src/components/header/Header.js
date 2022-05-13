import React from 'react';
import './Header.css';
import Navbar from './Navbar';
import NavLink from './NavLink';
import hamburger from '../../images/icon-hamburger.svg';

const Header = ({ onDropdownOpen }) => {
  return (
    <div className="header">
      <Navbar>
        <NavLink className={'collapse'}>About</NavLink>
        <NavLink className={'collapse'}>Careers</NavLink>
        <NavLink className={'collapse'}>Events</NavLink>
        <NavLink className={'collapse'}>Products</NavLink>
        <NavLink className={'collapse'}>Support</NavLink>
        <NavLink className="mobile navlink-mobile" onClick={onDropdownOpen}>
          <img src={hamburger} alt={'Hamburger icon'} />
        </NavLink>
      </Navbar>
      <div className="header-text">
        <p>
          Immersive
          <br />
          experience
          <br />
          that delivers
          <br />
        </p>
      </div>
    </div>
  );
};

export default Header;
