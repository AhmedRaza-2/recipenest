import { useParams, Link } from "react-router-dom"; 
import { useState } from "react";
import chefs from "../data/chefs";
import recipes from "../data/recipes";
import '../styles/ChefProfile.css';

function ChefProfile() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("recipes");

  const chef = chefs.find(c => c.id === parseInt(id));
  const chefRecipes = recipes.filter(r => r.chefId === parseInt(id));

  if (!chef) return <h2 className="not-found">Chef not found</h2>;

  return (
    <div className="chef-profile-container">
      <div className="chef-header">
        <div className="chef-image-placeholder">
          {chef.image ? <img src={chef.image} alt={chef.name} /> : <div className="placeholder-circle"></div>}
        </div>
        <div className="chef-info">
          <h1>{chef.name}</h1>
          <h3>{chef.specialty}</h3>
          <p>{chef.bio}</p>

          <div className="chef-buttons">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <button>Follow on IG</button>
            </a>
            <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
              <button>Website</button>
            </a>
            <a href="mailto:231570@gmail.com">
              <button>Contact by Email</button>
            </a>
          </div>
        </div>
      </div>

      <div className="chef-tabs">
        <button 
          className={activeTab === "recipes" ? "active-tab" : ""} 
          onClick={() => setActiveTab("recipes")}
        >
          Recipes
        </button>
        <button 
          className={activeTab === "about" ? "active-tab" : ""} 
          onClick={() => setActiveTab("about")}
        >
          About
        </button>
      </div>

      <div className="chef-tab-content">
        {activeTab === "recipes" ? (
          <div className="chef-recipes">
            {chefRecipes.length > 0 ? (
              chefRecipes.map(recipe => (
                <div key={recipe.id} className="recipe-card">
                  <h4>{recipe.title}</h4>
                  <Link to={`/recipe/${recipe.id}`} className="view-recipe-link">
                    <button>View Recipe</button>
                  </Link>
                </div>
              ))
            ) : (
              <p>No recipes available.</p>
            )}
          </div>
        ) : (
          <div className="chef-about">
            <h2>About {chef.name}</h2>
            <img src={chef.image} alt={chef.name} className="about-chef-image" />
            <p><strong>Specialty:</strong> {chef.specialty}</p>
            <p><strong>Rating:</strong> {chef.rating} ⭐</p>
            <p><strong>Bio:</strong> {chef.bio}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ChefProfile;
