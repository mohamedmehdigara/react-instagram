import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { RiInstagramLine } from 'react-icons/ri';

const Header = ({ currentUser }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="header__logo">
          <RiInstagramLine />
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/create" className={location.pathname === '/create' ? 'active' : ''}>
                Create Post
              </Link>
            </li>
            <li>
              <Link to={`/profile/${currentUser.id}`}>My Profile</Link>
            </li>
            <li>
              <Link to="/feed">Feed</Link>
            </li>
            <li>
              <button onClick={handleLogin}>Login</button>
            </li>
            <li>
              <button onClick={handleSignup}>Signup</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
