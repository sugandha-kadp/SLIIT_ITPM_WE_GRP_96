import React, { useState } from 'react';
import axios from 'axios';
import './addAdvertisement.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function RecipeForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [images, setImages] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      title,
      content,
      author,
      images,
    };

    axios.post('http://localhost:8080/api/v1/Recipe', newItem)
      .then(() => {
        alert('Recipe added successfully');
        window.location.reload(); // Refresh the page
      })
      .catch((err) => {
        alert(err);
      });
  };

  const history = useHistory();

    const handleClick = () => {
      history.push("/Recipes");
    };

  return (
    <div className="advertisement-form-container">
      <h2>Create a Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            id="image"
            value={images}
            onChange={(e) => setImages(e.target.value)}
          />
        </div>
        <button onClick={handleClick}>Return</button>
        <button type="submit">Submit</button>

      </form>
    </div>
  );
}

export default RecipeForm;
