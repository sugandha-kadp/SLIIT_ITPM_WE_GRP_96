import React, { useState, useEffect } from "react"
import axios from "axios";
import { useParams } from "react-router";
import './singleview.css'; // Import the CSS file for styling


function AdvertisementPage(props) {
  const {id}=useParams();
    console.log("item id "+id);

    const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [image, setImage] = useState('');

  // const handleTitleChange = (event) => {
  //   setTitle(event.target.value);
  // };

  // const handleContentChange = (event) => {
  //   setContent(event.target.value);
  // };

  // const handleAuthorChange = (event) => {
  //   setAuthor(event.target.value);
  // };

  // const handleImageChange = (event) => {
  //   setImage(event.target.value);
  // };

    useEffect(() => {
        axios.get(`http://localhost:8087/api/v2/Advertisment/${id}`).then(res => {

            setTitle(res.data.adTitle);
            setContent(res.data.adContent);
            setAuthor(res.data.adAuthor);
            setImage(res.data.adImage);

        }).catch((err) => {
            alert(err.message)
        })
    }, [])

  return (
    <div className="advertisement-page">
      <h2>{title}</h2>
      <p>{content}</p>
      <p>Author: {author}</p>
      <img src={image} alt={title} />
      <button>Back to All Advertisements</button>
    </div>
  );
};

export default AdvertisementPage;

