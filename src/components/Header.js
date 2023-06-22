import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { RiInstagramLine } from 'react-icons/ri';



const Header = ({currentUser}) => {
  const location = useLocation();
  const history = useNavigate();

  const handleLogin = () => {
    // Implement your login logic here
    // For example, you can redirect the user to the login page
    history.push('/login');
  };

  const handleSignup = () => {
    // Implement your signup logic here
    // For example, you can redirect the user to the signup page
    history.push('/signup');
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
            <li>
              <Link to="/feed">Feed</Link>
            </li>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleSignup}>Signup</button>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
