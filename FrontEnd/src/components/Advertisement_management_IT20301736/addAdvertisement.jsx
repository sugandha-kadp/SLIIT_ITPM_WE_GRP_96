import React, { useState } from 'react';
import './addAdvertisement.css';// Import the CSS file for styling

function AdvertisementForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [image, setImage] = useState('');

  const handleTitleChange = (event) => {
    setItemName(event.target.value);
  };

  const handleContentChange = (event) => {
    setDescription(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setPrice(event.target.value);
  };

  const handleImageChange = (event) => {
    setCategory(event.target.value);
  };

  function Addadvertisement(e) {
    e.preventDefault();

    const newItem = {
      title,
      content,
      author,
      image,
    }

    axios.post('http://localhost:8070/souvenir/itemadd', newItem).then(() => {
        alert("Souvenir added successfully");
    }).catch((err) => {
        alert(err)
    })

  return (
    <div className="advertisement-form-container">
      <h2>Create an Advertisement</h2>
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
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AdvertisementForm;
