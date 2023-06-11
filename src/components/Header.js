import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RiInstagramLine } from 'react-icons/ri';


const Header = ({currentUser}) => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="header__logo">
          <RiInstagramLine />
        </Link>
        <nav>
          <ul>
            <li>
              <Link
                to="/"
                className={location.pathname === '/' ? 'active' : ''}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/create"
                className={location.pathname === '/create' ? 'active' : ''}
              >
                Create Post
              </Link>
            </li>
            <li>
            <Link to={`/profile/${currentUser.id}`}>My Profile</Link>

            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
