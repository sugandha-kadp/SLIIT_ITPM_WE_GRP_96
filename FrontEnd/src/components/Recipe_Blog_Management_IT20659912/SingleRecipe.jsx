import React, { useState, useEffect } from "react"
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import './singleview.css'; // Import the CSS file for styling


// const SingleRecipe = ({ recipe }) => {
  

function SingleRecipe(props) {
  const {id}=useParams();
    console.log("item id "+id);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const [image, setImages] = useState('');

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
        axios.get(`http://localhost:8080/api/v2/Recipe/${id}`).then(res => {

            setTitle(res.data.title);
            setContent(res.data.content);
            setAuthor(res.data.author);
            setImages(res.data.images);

        }).catch((err) => {
            alert(err.message)
        })
    }, [])

    const history = useHistory();

    const handleClick = () => {
      history.push("/Recipes");
    };

  return (
    <div className="advertisement-page">
      <h2>{title}</h2>
      <p>{content}</p>
      <p>Author: {author}</p>
      <img src={image} alt={title}></img>
      <button onClick={handleClick}>Back to All Recipes</button>
    </div>
  );
};


export default SingleRecipe;
