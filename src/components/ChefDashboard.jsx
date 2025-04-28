import { useState } from "react";
import recipesData from "../data/recipes";
import '../styles/ChefDashboard.css';

function ChefDashboard() {
  const [recipes, setRecipes] = useState(recipesData);
  const [newRecipe, setNewRecipe] = useState({ title: "", ingredients: "", instructions: "" });

  const addRecipe = () => {
    setRecipes([...recipes, {
      id: recipes.length + 1,
      chefId: 1, // hardcoded chefId
      title: newRecipe.title,
      ingredients: newRecipe.ingredients.split(","),
      instructions: newRecipe.instructions,
    }]);
    setNewRecipe({ title: "", ingredients: "", instructions: "" });
  };

  const deleteRecipe = id => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      setRecipes(recipes.filter(r => r.id !== id));
    }
  };

  const editRecipe = id => {
    const recipeToEdit = recipes.find(r => r.id === id);
    setNewRecipe({
      title: recipeToEdit.title,
      ingredients: recipeToEdit.ingredients.join(","),
      instructions: recipeToEdit.instructions,
    });
  };

  return (
    <div className="dashboard">
      <h2>Chef Dashboard</h2>

      <form>
        <input 
          type="text" 
          placeholder="Recipe Title" 
          value={newRecipe.title} 
          onChange={e => setNewRecipe({ ...newRecipe, title: e.target.value })} 
        />
        <input 
          type="text" 
          placeholder="Ingredients (comma separated)" 
          value={newRecipe.ingredients} 
          onChange={e => setNewRecipe({ ...newRecipe, ingredients: e.target.value })} 
        />
        <textarea 
          placeholder="Instructions" 
          value={newRecipe.instructions} 
          onChange={e => setNewRecipe({ ...newRecipe, instructions: e.target.value })} 
        />
        <button type="button" onClick={addRecipe}>Add Recipe</button>
      </form>

      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            <div>
              <h3>{recipe.title}</h3>
              <p><strong>Ingredients:</strong> {recipe.ingredients.join(", ")}</p>
              <p>{recipe.instructions}</p>
            </div>
            <div>
              <button onClick={() => editRecipe(recipe.id)}>Edit</button>
              <button onClick={() => deleteRecipe(recipe.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChefDashboard;
