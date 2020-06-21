import React from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="nav navbar navbar-expand-lg px-4" id="navBar">
        <Link to="#" className="navbar-brand">
          <i className="fas fa-birthday-cake fa-2x text-dark"></i>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navMenu"
        >
          <span className="navbar-icon text-success">
            <i className="fas fa-bars fa-2x text-primary"></i>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav text-capitalize mx-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#header">Accueil</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#commandes">Commandes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#magasin">Magasin</a>
            </li>
          </ul>
          <div className="nav-info d-none d-lg-flex">
            <div className="nav-info d-flex align-items-center justify-content-between mx-lg-5">
              <span className="info-icon mx-lg-3">
                <i className="fas fa-phone"></i>
              </span>
              <p className="mb-0 ">(514) 000-0000</p>
            </div>
            <div
              id=""
              className="nav-info cart-info d-flex justify-content-between mx-lg-5 align-items-center"
            >
              <span className="cart-info-icon mr-lg-3">
                <i className="fas fa-shopping-cart"></i>
              </span>
              <p className="mb-0 text-capitalize">
                <span id="item-count">2 </span>
                 Articles - $
                <span className="item-total">10.49</span>
              </p>
            </div>
          </div>
        </div>
      </nav>    )
}

export default NavBar
