import { useParams } from "react-router-dom";
import recipes from "../data/recipes";
import '../styles/RecipePage.css';

function RecipePage() {
  const { recipeId } = useParams();
  const recipe = recipes.find(r => r.id === parseInt(recipeId));

  if (!recipe) return <h2>Recipe not found</h2>;

  return (
    <div className="recipe-page">
      <h2>{recipe.title}</h2>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <p>{recipe.instructions}</p>
    </div>
  );
}

export default RecipePage;
