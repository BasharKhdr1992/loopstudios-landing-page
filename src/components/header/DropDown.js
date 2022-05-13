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
          <div className="dd-link-underline" />
        </button>
        <button className="dd-link">
          Careers
          <div className="dd-link-underline" />
        </button>
        <button className="dd-link">
          Events
          <div className="dd-link-underline" />
        </button>
        <button className="dd-link">
          Products
          <div className="dd-link-underline" />
        </button>
        <button className="dd-link">
          Support
          <div className="dd-link-underline" />
        </button>
      </div>
    </div>
  );
};

export default DropDown;
