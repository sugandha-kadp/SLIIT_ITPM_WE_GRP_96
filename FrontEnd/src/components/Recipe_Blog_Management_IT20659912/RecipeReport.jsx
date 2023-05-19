import React, { useEffect, useState } from 'react';
import '../../App.css';
import RecipeService from '../../services/RecipeService';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function RecipeReport() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    RecipeService.getRecipe()
      .then((res) => {
        setRecipes(res.data);
      })
      .catch((error) => {
        console.error('Error fetching recipes:', error);
      });
  }, []);

  const history = useHistory();

    const handleClick = () => {
      
    };
    const handleClick1 = () => {
    }

  return (
    <div>
      <h1 className="text-center">Recipes Blogs</h1>
      <button onClick={handleClick}>Generate Report</button>
      <div className="col mt-4 mb-5">
        <div id="div3" className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th className="text-center">RecipeId</th>
                <th className="text-center">Title</th>
                <th className="text-center">Content</th>
                <th className="text-center">Author</th>
              </tr>
            </thead>
            <tbody>
              {recipes.map((recipe) => (
                <tr key={recipe.recipeId}>
                  <td className="text-center">{recipe.recipeId}</td>
                  <td>{recipe.title}</td>
                  <td>{recipe.content}</td>
                  <td>{recipe.author}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}


export default RecipeReport;
