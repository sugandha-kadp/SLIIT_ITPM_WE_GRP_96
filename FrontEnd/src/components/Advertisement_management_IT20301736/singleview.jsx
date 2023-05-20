import React, { useState, useEffect } from "react"
import axios from "axios";
import { useParams } from "react-router";
import { Link } from "react-router-dom"
import './singleview.css'; // Import the CSS file for styling


function AdvertisementPage(props) {
  const {id}=useParams();
    console.log("item id "+id);

    const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [image, setImage] = useState('');

  //const backgroundImageUrl = 'D:\ITPM96\SLIIT_ITPM_WE_GRP_96\FrontEnd\src\images\Bg ad advertisement.jpg';

  console.log("item id "+title);
  console.log("item id "+content);
  console.log("item id "+author);
  console.log("item id "+image);
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

{/* style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }} */}

      <h2>{title}</h2>
      <p>{content}</p>
      <p>Author: {author}</p>
      <img src={image} alt={title} />
      <Link to={`/allAdvertisments`}>
        <button>Back to All Advertisements</button>
      </Link>
    </div>
  );
};

export default AdvertisementPage;

