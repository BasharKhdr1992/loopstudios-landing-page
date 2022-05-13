import React from 'react';
import logo from '../../images/logo.svg';
import close from '../../images/icon-close.svg';
import './DropDown.css';

const DropDown = ({ onDropdownClose }) => {
  return (
    <div className="dropdown">
      <div className="dropdown-header">
        <img src={logo} alt="logo" />
        <img
          src={close}
          onClick={onDropdownClose}
          className="close"
          alt="close icon"
        />
      </div>
      <div className="navbar-dropdown">
        <button className="dd-link">
          About
          <span className="dd-link-underline" />
        </button>
        <button className="dd-link">
          Careers
          <span className="dd-link-underline" />
        </button>
        <button className="dd-link">
          Events
          <span className="dd-link-underline" />
        </button>
        <button className="dd-link">
          Products
          <span className="dd-link-underline" />
        </button>
        <button className="dd-link">
          Support
          <span className="dd-link-underline" />
        </button>
      </div>
    </div>
  );
};

export default DropDown;
