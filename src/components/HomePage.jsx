import React from 'react';
import '../styles/Home.css';  // Correct path to Home.css in the styles folder

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>Welcome to RecipeNest</h1>
        <p>Your favorite place to explore and share delicious recipes</p>
        <button className="cta-button" onClick={() => window.location.href = '/chefs'}>
          Explore Chefs
        </button>
      </div>
      <div className="intro-section">
        <h2>About RecipeNest</h2>
        <p>RecipeNest is a platform where chefs can share their unique recipes with the world. Connect with talented chefs and find your next favorite dish.</p>
      </div>
    </div>
  );
};

export default HomePage;
