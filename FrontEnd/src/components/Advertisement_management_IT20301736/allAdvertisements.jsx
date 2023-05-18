import React, { useState, useEffect } from "react"
import './allAds.css';
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import advertisementService from "../../services/AdvertisementService";

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


  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  return (
    <div>
         <div className="carousel-wrapper">
      <Slider {...settings}>
        {advertisements.map((advertisement) => (
          <div key={advertisement.id} className="item-card">
            <center>
             
            <img
              src={advertisement.adImage}
              alt={advertisement.adTitle}
              className="item-image"
            />
            <h3 className="item-name">{advertisement.adTitle}</h3>
            <p className="item-price">${advertisement.adContent}</p>
            <p>Author: {advertisement.adAuthor}</p>
            <button
              className="add-to-cart-button"
              style={{ backgroundColor: "#97FFFF" }}
            >
              <a href={"/edititem/" + advertisement.id}>View</a>
            </button>
            <br /> 
            </center>
          </div>
        ))}
      </Slider>
    </div>
<div className="item-grid-view">
      {advertisements && advertisements.map((advertisement, key) => (
        <div key={advertisement.id} className="item-card">
          <img src={advertisement.adImage} alt={advertisement.adTitle} className="item-image" />
          <h3 className="item-name">{advertisement.adTitle}</h3>
          <p className="item-price">${advertisement.adContent}</p>
          <p>Author: {advertisement.adAuthor}</p>
          <button className="add-to-cart-button" style={{ backgroundColor: '#97FFFF' }}><a href={'/editAd/' + advertisement.id}>View</a></button><br />
          {console.log(key)}
        </div>
      ))}
    </div>
    </div>
  );
};

export default AdvertisementGrid;
