import React, { useState } from "react"
import axios from "axios";
import advertisementService from "../../services/AdvertisementService";
import './addAdvertisement.css';

export default function AdvertismentAdd() {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [image, setImage] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.value);
  };

  function AddAdvertisement(e) {
    e.preventDefault();

    const newAd = {
        title,
        content,
        author,
        image
    }

    advertisementService.addAdvertisement(newAd).then((res) => {
      alert('Advertisement added!', 'New Advertisement successfully added to System', 'success');
    });

    // axios.post('http://localhost:8087/api/v2/Advertisment', newAd).then(() => {
    //     alert("Advertisement added successfully");
    // }).catch((err) => {
    //     alert(err)
    // })
}

  return (
    <form onSubmit={AddAdvertisement} className="item-add-form">
      <center><h2>Add New Advertisement</h2> </center>
      <label htmlFor="item-name">Title</label>
      <input
        type="text"
        placeholder="enter Ad Title"
        id="item-name"
        name="item-name"
        value={title}
        onChange={handleTitleChange}
      />

      <label htmlFor="description">Content</label>
      <textarea
        id="description"
        placeholder="enter content"
        name="content"
        value={content}
        onChange={handleContentChange}
      />

      <label htmlFor="price">Author</label>
      <input
        type="text"
        placeholder="enter Author Name"
        id="price"
        name="price"
        value={author}
        onChange={handleAuthorChange}
      />

      <label htmlFor="image">Image</label>
      <input
        type="text"
        id="image"
        name="image"
        placeholder="paste image URL here"
        value={image}
        onChange={handleImageChange}
      />

      <button type="submit">Add Advertisement</button>
    </form>
  );

};
