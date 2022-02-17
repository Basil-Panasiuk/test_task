/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Header = ({ isAuth }) => (
  <div>
    <Link to="/main">Main</Link>
    <br />
    {
      isAuth && (
        <Link to="/profile">Profile</Link>
      )
    }
    <br />
    <Link to="/login">Login</Link>
  </div>
);

export default Header;
