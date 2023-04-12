import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="boxed_wrapper">
  {/*Search Popup*/}
  <div id="search-popup" className="search-popup">
    <div className="popup-inner">
      <div className="upper-box clearfix">
        <figure className="logo-box pull-left">
          <a href="index.html">
            <img src="images/logo.png" alt="" />
          </a>
        </figure>
        <div className="close-search pull-right">
          <span className="far fa-times" />
        </div>
      </div>
      <div className="overlay-layer" />
      <div className="auto-container">
        <div className="search-form">
          <form method="post" action="index.html">
            <div className="form-group">
              <fieldset>
                <input
                  type="search"
                  className="form-control"
                  name="search-input"
                  defaultValue=""
                  placeholder="Type your keyword and hit"
                  required=""
                />
                <button type="submit">
                  <i className="far fa-search" />
                </button>
              </fieldset>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* main header */}
  <header className="main-header header-style-two">
    {/* header-lower */}
    <div className="header-lower">
      <div className="auto-container">
        <div className="outer-box">
          <div className="logo-box">
            <figure className="logo">
              <a href="index.html">
                <img src="images/logo.png" alt="" />
              </a>
            </figure>
          </div>
          <div className="menu-area clearfix">
            {/*Mobile Navigation Toggler*/}
            <div className="mobile-nav-toggler">
              <i className="icon-bar" />
              <i className="icon-bar" />
              <i className="icon-bar" />
            </div>
            <nav className="main-menu navbar-expand-md navbar-light">
              <div
                className="collapse navbar-collapse show clearfix"
                id="navbarSupportedContent"
              >
                <ul className="navigation clearfix">
                  <li className="current dropdown">
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="#">Supplies</a>
                  </li>
                  <li>
                    <a href="#">News</a>
                  </li>
                  <li>
                    <a href="#">Shop</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <ul className="nav-right">
            <li className="search-box-outer search-toggler">
              <i className="icon-3" />
            </li>
            <li className="shop-cart">
              <a href="#">
                <i className="icon-10" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    {/*sticky Header*/}
    <div className="sticky-header">
      <div className="auto-container">
        <div className="outer-box">
          <div className="logo-box">
            <figure className="logo">
              <a href="index.html">
                <img src="images/logo.png" alt="" />
              </a>
            </figure>
          </div>
          <div className="menu-area clearfix">
            <nav className="main-menu clearfix">
              {/*Keep This Empty / Menu will come through Javascript*/}
            </nav>
          </div>
          <ul className="nav-right">
            <li className="search-box-outer search-toggler">
              <i className="icon-3" />
            </li>
            <li className="shop-cart">
              <a href="shop.html">
                <i className="icon-4" />
                <span>3</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
  {/* main-header end */}
  {/* banner-section */}
  <section className="banner-section style-three p_relative centred">
    <div className="banner-carousel owl-theme owl-carousel owl-dots-none">
      <div className="slide-item p_relative">
        <div
          className="image-layer p_absolute"
          style={{ backgroundImage: "url(images/hero01.jpeg)" }}
        />
        <div className="auto-container">
          <div className="content-box p_relative d_block z_5">
            <h2 className="p_relative d_block">
              Fight Food Waste: Shop Sustainable
            </h2>
            <p className="p_relative d_block">
              Shop our curated selection of sustainable food products and
              <br />
              reduce your environmental impact.
            </p>
            <div className="btn-box">
              <a href="#" className="theme-btn-one">
                Sell Excess Food Supplies
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="slide-item p_relative">
        <div
          className="image-layer p_absolute"
          style={{ backgroundImage: "url(images/hero02.jpeg)" }}
        />
        <div className="auto-container">
          <div className="content-box p_relative d_block z_5">
            <h2 className="p_relative d_block">
              Sate Food: Hunger &amp; Planet Satisfied
            </h2>
            <p className="p_relative d_block">
              Satisfy your hunger and help the planet with our
              <br />
              delicious sate food products.
            </p>
            <div className="btn-box">
              <a href="#" className="theme-btn-one">
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="slide-item p_relative">
        <div
          className="image-layer p_absolute"
          style={{ backgroundImage: "url(images/hero03.jpeg)" }}
        />
        <div className="auto-container">
          <div className="content-box p_relative d_block z_5">
            <h2 className="p_relative d_block">Transform Scraps to Compost</h2>
            <p className="p_relative d_block">
              Turn your food scraps into nutrient-rich compost and start making
              a<br />
              positive impact on the environment today.
            </p>
            <div className="btn-box">
              <a href="#" className="theme-btn-one">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* banner-section end */}
</div>

            </div>
        );
    }
}

export default Home;