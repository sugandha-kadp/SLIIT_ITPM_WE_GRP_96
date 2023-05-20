// ListEmployeeComponent.jsx
import React, { useEffect, useState } from 'react';
import '../../App.css';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function ListEmployeeComponent(props) {
  const [recipes, setRecipes] = useState([]);
  

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/v1/RecipeRepository')
      .then((response) => {
        console.log(response.data);
        setRecipes(response.data);
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data);
        }
      });
  }, []);

  const history = useHistory();

  const handlePrint = () => {
      window.print();
  };
  const handleClick1 = () => {
      history.push("/Recipes");
  }

  const handleClick = (recipeId) => {
    history.push(`/View/${recipeId}`);
  }
  const handleEdit = (recipeId) => {
    history.push(`/EditRecipe/${recipeId}`);
  }
  const handleDelete = (recipeId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this recipe?');
    axios
      .delete(`http://localhost:8080/api/v1/Recipe/${recipeId}`)
      .then((response) => {
        console.log(response.data);
        alert('Recipe deleted successfully');
        window.location.reload();
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data);
        }
      });
  }

  return (
    <div>
      <h1 className="text-center">Recipes Blogs</h1>
      <button onClick={handlePrint}>Generate Report</button><button onClick={handleClick1}>Return</button>
      <div className="col mt-4 mb-5">
        <div id="div3" className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th className="text-center">RecipeId</th>
                <th className="text-center">Title</th>
                <th className="text-center">Content</th>
                <th className="text-center">Author</th>
                <th className="text-center"></th>
              </tr>
            </thead>
            <tbody>
              {recipes.map((recipe) => (
                <tr key={recipe.recipeId}>
                  <td className="text-center">{recipe.recipeId}</td>
                  <td>{recipe.title}</td>
                  <td>{recipe.content}</td>
                  <td>{recipe.author}</td>
                  <td>
                    <button onClick={()=>handleClick(recipe.recipeId)}>View</button>
                    <button onClick={()=>handleEdit(recipe.recipeId)}>Edit</button>
                    <button onClick={()=>handleDelete(recipe.recipeId)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ListEmployeeComponent;
