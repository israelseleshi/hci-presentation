import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-light shadow-sm">
      <nav className="container-fluid navbar navbar-expand-lg navbar-light px-5">
        <Link className="navbar-brand fw-bold" to="/">Addis GigFind</Link>
        <div className="collapse navbar-collapse justify-content-center">
          <ul className="navbar-nav">
            <li className="nav-item mx-3"><Link to="/search" className="nav-link fs-5">Search</Link></li>
            <li className="nav-item mx-3"><Link to="/services" className="nav-link fs-5">Services</Link></li>
            <li className="nav-item mx-3"><Link to="/about" className="nav-link fs-5">About Us</Link></li>
          </ul>
        </div>
        <div>
          <Link to="/login" className="btn btn-danger me-3 fs-5">Log In</Link>
          <Link to="/signup" className="btn btn-primary fs-5">Sign Up</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;