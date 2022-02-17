/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Header = ({ isAuth, setIsAuth }) => {
  const q = 'login';

  return (
    <div>
      <Link to="/main">Main</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/login">{q}</Link>
    </div>
  );
};

export default Header;
