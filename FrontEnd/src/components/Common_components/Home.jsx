import React, { Component } from 'react';
import '../../bootstrap.min.css'
import '../../lib/animate/animate.css'
import '../../lib/animate/animate.min.css'
import '../../home.css'
import '../../home.js'



class Home extends Component {
    render() {
        return (
            <div>
                <>
                  {/* Navbar & Hero Start */}
                  <div className="container-fluid position-relative p-0">
                    <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                      <a href="" className="navbar-brand p-0">
                        <img src="../logo.png" alt="Logo" />
                      </a>
                      <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse"
                      >
                        <span className="fa fa-bars" />
                      </button>
                      <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0">
                          <a href="index.html" className="nav-item nav-link active">
                            Home
                          </a>
                          <a href="about.html" className="nav-item nav-link">
                            Supplies
                          </a>
                          <a href="service.html" className="nav-item nav-link">
                            Shop
                          </a>
                          <a href="package.html" className="nav-item nav-link">
                            News
                          </a>
                          <a href="contact.html" className="nav-item nav-link">
                            Blog
                          </a>
                        </div>
                        <a href="" className="btn btn-primary rounded-pill py-2 px-4">
                          Register
                        </a>
                        <a href="" className="btn btn-primary rounded-pill py-2 px-4">
                          Register
                        </a>
                      </div>
                    </nav>
                    <div className="container-fluid bg-primary py-5 mb-5 hero-header">
                      <div className="container py-5">
                        <div className="row justify-content-center py-5">
                          <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                            <h1 className="display-3 text-white mb-3 animated slideInDown">
                              Fight Food Waste: Shop Sustainable
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Navbar & Hero End */}
                </>
            </div>
        );
    }
}

export default Home;