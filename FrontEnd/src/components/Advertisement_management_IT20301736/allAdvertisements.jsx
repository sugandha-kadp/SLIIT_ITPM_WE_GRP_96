import React, { useState, useEffect } from "react"
import axios from "axios";
import './allAds.css';

function AdvertisementGrid() {

  const [advertisements, setitems] = useState([])

  useEffect(() => {
    function getAdvertisements() {
      axios.get("http://localhost:8087/api/v2/Advertisment").then((res) => {
        console.log(res.data);
        setitems(res.data);
      }).catch((err) => {
        alert(err.message)
      })
    }
    getAdvertisements();
  }, [])

  return (


    <div className="item-grid-view">
      {advertisements && advertisements.map((advertisement, key) => (
        <div key={advertisement.id} className="item-card">
          <img src={advertisement.adImage} alt={advertisement.adTitle} className="item-image" />
          <h3 className="item-name">{advertisement.adTitle}</h3>
          <p className="item-price">${advertisement.adContent}</p>
          <p>Author: {advertisement.adAuthor}</p>
          <button className="add-to-cart-button" style={{ backgroundColor: '#97FFFF' }}><a href={'/edititem/' + advertisement.id}>View</a></button><br />
        </div>
      ))}
    </div>

  );
};

export default AdvertisementGrid;
