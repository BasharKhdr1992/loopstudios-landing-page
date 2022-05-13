import React from 'react';
import Navbar from '../header/Navbar';
import { NavLink } from '../header/NavLink';
import facebook from '../../images/icon-facebook.svg';
import instagram from '../../images/icon-instagram.svg';
import pinterest from '../../images/icon-pinterest.svg';
import twitter from '../../images/icon-twitter.svg';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <Navbar>
          <NavLink>About</NavLink>
          <NavLink>Careers</NavLink>
          <NavLink>Events</NavLink>
          <NavLink>Products</NavLink>
          <NavLink>Support</NavLink>
        </Navbar>
        <div className="social-copyright">
          <div className="social">
            <NavLink>{<img src={facebook} alt="Facebook" />}</NavLink>
            <NavLink>{<img src={instagram} alt="Instagram" />}</NavLink>
            <NavLink>{<img src={pinterest} alt="Pinterest" />}</NavLink>
            <NavLink>{<img src={twitter} alt="Twitter" />}</NavLink>
          </div>
          <p className="copyright">© 2021 Loopstudios. All rights reserved.</p>
        </div>
      </div>
      <div className="attribution">
        Challenge by{' '}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          rel="noreferrer"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by <button>Bashar Khdr</button>.
      </div>
    </footer>
  );
};

export default Footer;
