import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './addAdvertisement.css';
import { useHistory, useParams } from 'react-router-dom';

function RecipeForm() {
  const { recipeId } = useParams();

  const [recipe, setRecipe] = useState({
    recipeId: '',
    title: '',
    content: '',
    author: '',
    images: '',
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/v1/Recipe/${recipeId}`)
      .then((res) => {
        setRecipe(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [recipeId]);

  const history = useHistory();

  const handleClick = () => {
    history.push('/Recipes');
  };

  const handleEdit = () => {
    axios
      .put(`http://localhost:8080/api/v1/Recipe/${recipeId}`, recipe)
      .then(() => {
        alert('Recipe updated successfully');
        history.push('/Recipes');
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="advertisement-form-container">
      <h2>Edit Recipe</h2>
      <form>
        <div className="form-group">
          <label htmlFor="recipeId">Recipe ID:</label>
          <input
            type="text"
            id="recipeId"
            value={recipe.recipeId}
            disabled
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={recipe.title}
            onChange={(e) =>
              setRecipe({ ...recipe, title: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={recipe.content}
            onChange={(e) =>
              setRecipe({ ...recipe, content: e.target.value })
            }
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={recipe.author}
            onChange={(e) =>
              setRecipe({ ...recipe, author: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            id="image"
            value={recipe.images}
            onChange={(e) =>
              setRecipe({ ...recipe, images: e.target.value })
            }
          />
        </div>
        <button onClick={handleClick}>Return</button>
        <button type="button" onClick={handleEdit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default RecipeForm;

