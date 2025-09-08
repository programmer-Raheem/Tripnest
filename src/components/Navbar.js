import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.module.css'; // Using regular CSS instead of CSS modules

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav id="Home" className="tripnest-navbar navbar navbar-expand-lg navbar-dark py-3 fixed-top bg-transparent-custom">
      <div className="tripnest-container container">
        {/* Logo + Brand */}
        <Link className="navbar-brand d-flex align-items-center fw-bold fs-3" to="/">
          <img src="/tripnest-new-logo.png" alt="TripNest Logo" className="tripnest-logo me-2" />
          <span className="text-white">TripNest</span>
        </Link>

        {/* Toggler */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"  
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        {/* Links */}
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav ms-lg-auto gap-3">
            <li className="nav-item">
              <a className="fs-5 btn btn-primary rounded-pill"  href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="tripnest-nav-link nav-link fs-5" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="tripnest-nav-link nav-link fs-5" href="#Services">Services</a>
            </li>
            <li className="nav-item">
              <a className="tripnest-nav-link nav-link fs-5" href="#testimonials">Testimonial</a>
            </li>
            <li className="nav-item">
              <a className="tripnest-nav-link nav-link fs-5" href="#feedback">Feedback</a>
            </li>
            <li className="nav-item">
              <a className="tripnest-nav-link nav-link fs-5" href="#contact">Contact us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;