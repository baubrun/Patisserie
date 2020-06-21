import React from "react";
import NavBar from "./Navbar";

const Header = () => {
  return (
    <header id="header">
      <NavBar />
      <div className="container-fluid">
        <div className="row banner-height justify-content-center align-items-center">
          <div className="col-10 mx-auto banner text-center">
            <h1 className="text-capitalize">
              La <span>Pattis<strong className="banner-title">er</strong>ie</span>
            </h1>
            {/* <Link
              className="btn banner-link text-uppercase my-2"
              to="magasin"
            ></Link> */}
          </div>
        </div>
      </div> 
    </header>
  );
};

export default Header;
