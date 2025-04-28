import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router for navigation
import '../styles/Navbar.css';  // Correct path to Navbar.css in the styles folder

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">RecipeNest</Link>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/chefs" className="navbar-link">Chefs</Link>
        <Link to="/portfolio" className="navbar-link">Portfolio</Link>
        <Link to="/dashboard" className="navbar-link">Dashboard</Link>
        <Link to="/login" className="navbar-link">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
