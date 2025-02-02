import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is loaded
import logo from '../images/logo.jpeg'; // Correct import statement

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
      <div className="container"> {/* Changed to container for better width control */}
        {/* Logo with improved spacing */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img 
            src={logo}
            alt="Wiz Freelancers Logo" 
            style={{ 
              height: '45px',
              marginRight: '10px'
            }}
            className="rounded" // Slightly rounded corners for the logo
          />
          <span className="fw-bold">Wiz Freelancers</span> {/* Added company name */}
        </Link>
        
        {/* Hamburger Menu */}
        <button 
          className="navbar-toggler"
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        {/* Navbar items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link px-3 fw-medium" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3 fw-medium" to="/Services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3 fw-medium" to="/About">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3 fw-medium" to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
