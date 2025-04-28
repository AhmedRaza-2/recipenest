import { useState } from "react";
import recipesData from "../data/recipes";
import '../styles/RecipePortfolio.css';

function RecipePortfolio() {
  const [recipes, setRecipes] = useState(recipesData);

  return (
    <div className="recipe-portfolio">

      {recipes.map(recipe => (
        <div key={recipe.id} className="recipe-card">
          <h3>{recipe.title}</h3>
          {recipe.image && <img src={recipe.image} alt={recipe.title} className="recipe-image" />}
          <p><strong>Ingredients:</strong> {recipe.ingredients.join(", ")}</p>
          <p><strong>Instructions:</strong> {recipe.instructions}</p>
        </div>
      ))}
    </div>
  );
}

export default RecipePortfolio;
