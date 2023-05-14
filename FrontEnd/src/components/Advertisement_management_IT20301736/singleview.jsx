import React from 'react';
import './singleview.css'; // Import the CSS file for styling

const AdvertisementPage = ({ advertisement }) => {
  return (
    <div className="advertisement-page">
      <h2>{advertisement.title}</h2>
      <p>{advertisement.content}</p>
      <p>Author: {advertisement.author}</p>
      <img src={advertisement.image} alt={advertisement.title} />
      <button>Back to All Advertisements</button>
    </div>
  );
};

export default AdvertisementPage;

