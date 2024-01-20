import React from 'react';
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
          <li>Home</li>
          <li>Search</li>
          <li>Contact</li>
        </ul>
        <AuthButton />
      </div>
    </div>
  )
}

export default Header;