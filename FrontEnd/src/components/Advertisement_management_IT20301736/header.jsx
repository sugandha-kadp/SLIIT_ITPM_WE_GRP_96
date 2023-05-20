import React from 'react';
import './header.css';
import { Link } from "react-router-dom"

const AdvertisementPage = () => {
  return (
    <div>
      <header className="header">
        <div className="logo">
          <img src="https://img.favpng.com/6/1/2/logo-food-waste-organization-png-favpng-wA4HPzwnrFCYa4UjTvYcNFfvF.jpg" alt="Logo" />
        </div>
        <nav className="navbar">
          <ul className="navbar-list">
            <li className="navbar-item">
            <Link to={`/advertisementadd`}>
        <button>Add Advertisment</button>
      </Link>
            </li>
            <li className="navbar-item">
            <Link to={`/allAdvertisments`}>
        <button>View Advertisment</button>
      </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="content">
        {/* Your advertisement management content goes here */}
      </main>
    </div>
  );
};

export default AdvertisementPage;
