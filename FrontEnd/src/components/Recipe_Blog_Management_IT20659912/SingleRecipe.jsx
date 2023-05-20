import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import './singleview.css'; // Import the CSS file for styling

function SingleRecipe(props) {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState({});
  const history = useHistory();

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

  const handleClick = () => {
    history.push("/Recipes");
  };

  return (
    <div className="advertisement-page">
      <h2>{recipe.title}</h2>
      <p>{recipe.content}</p>
      <p>Author: {recipe.author}</p>
      <img src={recipe.images} alt={recipe.title} />
      <button onClick={handleClick}>Back to All Recipes</button>
    </div>
  );
}

export default SingleRecipe;
