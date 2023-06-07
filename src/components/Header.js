// src/components/Header.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RiInstagramLine } from 'react-icons/ri';

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="container">
        <Link to={location.pathname || '/'}>
          <RiInstagramLine className="header__logo" />
        </Link>
        <nav>
          <ul>
            <li>
              <Link to={`${location.pathname}/`}>Home</Link>
            </li>
            <li>
              <Link to={`${location.pathname}/create`}>Create Post</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
