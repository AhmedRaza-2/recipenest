// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Login from './components/LoginSignup';
import Signup from './components/Signup';
import ChefList from './components/ChefList';
import ChefProfile from './components/ChefProfile';
import RecipePortfolio from './components/RecipePortfolio';
import ChefDashboard from './components/ChefDashboard';
import RecipePage from './components/RecipePage';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if user is authenticated
  useEffect(() => {
    const user = localStorage.getItem("user"); // Or use context for global state
    if (user) {
      setIsAuthenticated(true);
    }
  }, []);

  // Function to handle login success (called after successful login)
  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    localStorage.setItem("user", "logged_in"); // Store user state
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("user"); // Remove user state on logout
  };

  return (
    <Router>
      {isAuthenticated && <Navbar onLogout={handleLogout} />} {/* Show Navbar only if logged in */}
      <Routes>
        {/* Conditional Route for HomePage */}
        <Route path="/" element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />} />
        
        {/* Login and Signup Routes */}
        <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
        <Route path="/signup" element={<Signup />} />
        
        {/* Other Routes (Available after Login) */}
        <Route path="/chefs" element={isAuthenticated ? <ChefList /> : <Navigate to="/login" />} />
        <Route path="/profile/:id" element={isAuthenticated ? <ChefProfile /> : <Navigate to="/login" />} />
        <Route path="/portfolio" element={isAuthenticated ? <RecipePortfolio /> : <Navigate to="/login" />} />
        <Route path="/dashboard" element={isAuthenticated ? <ChefDashboard /> : <Navigate to="/login" />} />
        <Route path="/recipe/:recipeId" element={isAuthenticated ? <RecipePage /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
