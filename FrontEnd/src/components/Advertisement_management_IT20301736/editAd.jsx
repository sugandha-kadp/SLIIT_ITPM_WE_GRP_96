import React, { useState, useEffect } from "react"
import axios from "axios";
import './addAdvertisement.css';
import { useParams } from "react-router";

function SouvenirEdits(props) {

    const {id}=useParams();
    console.log("my id "+id);
    
    const [adTitle, setTitle] = useState('');
    const [adContent, setContent] = useState('');
    const [adAuthor, setAuthor] = useState('');
    const [adImage, setImage] = useState('');
    const [adId, setID] = useState('');
  
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

    useEffect(() => {
        axios.get(`http://localhost:8087/api/v2/Advertisment/${id}`).then(res => {

            setTitle(res.data.adTitle);
            setContent(res.data.adContent);
            setAuthor(res.data.adAuthor);
            setImage(res.data.adImage);

        }).catch((err) => {
            alert(err.message)
        })
    }, [id])

    function sendUpdate(e) {
        e.preventDefault();

        const newAd = {
            adId,
            adTitle,
            adAuthor,
            adContent,
            adImage
          }
          axios.put(`http://localhost:8087/api/v2/Advertisment/${id}`, { newAd })
            .then(() => {
                alert("Advertisement Updated Successfully");
            }).catch((err) => {
                alert(err)
                console.log(err.response.data);
            })
    }

    return (
<form onSubmit={sendUpdate} className="item-add-form">
      <center><h2>Update Advertisement</h2> </center>
      <label htmlFor="item-name">Title</label>
      <input
        type="text"
        placeholder="enter Ad Title"
        id="item-name"
        name="item-name"
        value={adTitle}
        onChange={handleTitleChange}
      />

      <label htmlFor="description">Content</label>
      <textarea
        id="description"
        placeholder="enter content"
        name="content"
        value={adContent}
        onChange={handleContentChange}
      />

      <label htmlFor="price">Author</label>
      <input
        type="text"
        placeholder="enter Author Name"
        id="price"
        name="price"
        value={adAuthor}
        onChange={handleAuthorChange}
      />

      <label htmlFor="image">Image</label>
      <input
        type="text"
        id="image"
        name="image"
        placeholder="paste image URL here"
        value={adImage}
        onChange={handleImageChange}
      />

      <button type="submit">Update Advertisement</button>
    </form>
    );

};

export default SouvenirEdits