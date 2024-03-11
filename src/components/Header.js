import React from 'react';
import { Link } from 'react-router-dom';
import { LOGO } from '../utils/constant';
import AuthButton from './AuthButton';

const Header = () => {
  console.log('header rendered');

  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO} alt="logo" className="logo" />
      </div>
      <div className="navigation">
        <ul className="nav-items">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
          <li>
            <Link to="cart">Cart</Link>
          </li>
        </ul>
        <AuthButton />
      </div>
    </div>
  )
}

export default Header;