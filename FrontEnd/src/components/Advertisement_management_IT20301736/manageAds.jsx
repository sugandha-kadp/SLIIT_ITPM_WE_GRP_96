import React, { useState, useEffect } from "react"
import './allAds.css';
import axios from "axios";

function AdvertisementGrid() {

  const [advertisements, setitems] = useState([])

  useEffect(() => {
    function getAdvertisements() {
      axios.get("http://localhost:8087/api/v2/Advertisment").then((res) => {
        setitems(res.data);
      }).catch((err) => {
        alert(err.message)
      })

      // const url=advertisementService.getallAdvertisement;
      // axios.get(url).then((res) => {
      //   console.log(res.data);
      //   setitems(res.data);
      // }).catch((err) => {
      //   alert(err.message)
      // })

      //   advertisementService.getallAdvertisement().then((res) => {
      //     setitems(res.data);
      //     console.log(res.data);
      // });
      // console.log(advertisementService.getallAdvertisement);
    }
    getAdvertisements();
  }, [])

  async function deleteitem(id) {
    await fetch(`http://localhost:8087/api/v2/Advertisment/${id}`, {
        method: "DELETE",
    });

    const newdata = advertisements.filter((el) => el.adId !== id);
    setitems(newdata)
}

  return (
    <div>
      <center>
        <h3>Edit Or Delete Aded Advertisement</h3>
      </center>
      <div className="item-grid-view">
        {advertisements && advertisements.map((advertisement, key) => (
          <div key={advertisement.adId} className="item-card">
            <img src={advertisement.adImage} alt={advertisement.adTitle} className="item-image" />
            <h3 className="item-name">{advertisement.adTitle}</h3>
            <p className="item-price">${advertisement.adContent}</p>
            <p>Author: {advertisement.adAuthor}</p>
            <button className="add-to-cart-button" style={{ backgroundColor: '#97FFFF' }}><a href={'/editAd/' + advertisement.adId}>Edit</a></button><br />
            <button className="add-to-cart-button" style={{ backgroundColor: '#e85a5a' }} onClick={() => { deleteitem(advertisement.adId); }}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvertisementGrid;
