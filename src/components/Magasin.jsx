import React, { useState } from "react";
import Button from "./Button";
import FormInput from "./FormInput";
import { Link } from "react-router-dom";
import ItemCard from "./ItemCard";

const Magasin = () => {
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setSearch(value);
  };

  return (
    <div id="magasin" className="magasin py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-10 mx-auto text-center">
            <h1 className="text-capitalize">
              À <strong className="text-primary">commander</strong>
            </h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg mx-auto d-flex justify-content-around sortBtn flex-wrap">
          <Link to="#" className="btn btn-dark text-uppercase m-2">
            Biscuits
          </Link>
          <Link to="#" className="btn btn-dark text-uppercase m-2">
            Beignets
          </Link>
          <Link to="#" className="btn btn-dark text-uppercase m-2">
            Gateaux
          </Link>
          <Link to="#" className="btn btn-dark text-uppercase m-2">
            Petits Gateaux
          </Link>
        </div>
      </div>
      <div className="row my-3">
        <div className="col-10 col-md-6 mx-auto">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text bg-primary">
                <i className="fas fa-search"></i>
              </span>
            </div>
            <FormInput
              id="search-item"
              name="search"
              onChange={(event) => handleChange(event)}
              placeholder="Search"
              type="text"
              value={search}
            />
          </div>
        </div>
      </div>
      <div className="row magasin-items container mx-auto" id="magasin-items">
        <div
          className="col-sm-6 col-10 col-lg-4 mx-auto my-3 magasin-item"
          data-item="patiss"
        >
          <ItemCard
            src={require("../images/800-600-biscuit-avoine.jpg")}
            prix={3}
            nom="3 biscuits d'avoine et chocolat"
          />
        </div>{" "}
        <div
          className="col-sm-6 col-10 col-lg-4 mx-auto my-3 magasin-item"
          data-item="patiss"
        >
          <ItemCard
            src={require("../images/800-600-beignes.jpg")}
            prix={8}
            nom="12 Beignets"
          />
        </div>{" "}
        <div
          className="col-sm-6 col-10 col-lg-4 mx-auto my-3 magasin-item"
          data-item="patiss"
        >
          <ItemCard
            src={require("../images/800-600-petit-gateau-cerise.jpg")}
            prix={6}
            nom="6 petit-gateau-cerise"
          />
        </div>{" "}
        <div
          className="col-sm-6 col-10 col-lg-4 mx-auto my-3 magasin-item"
          data-item="patiss"
        >
          <ItemCard
            src={require("../images/800-600-biscuit-bleu-orange-rose.jpg")}
            prix={15}
            nom="12 Macarons"
          />
        </div>
        <div
          className="col-sm-6 col-10 col-lg-4 mx-auto my-3 magasin-item"
          data-item="patiss"
        >
          <ItemCard
            src={require("../images/800-600-bagels-divers.jpg")}
            prix={30}
            nom="12 Bagels et Fruits"
          />
        </div>
        <div
          className="col-sm-6 col-10 col-lg-4 mx-auto my-3 magasin-item"
          data-item="patiss"
        >
          <ItemCard
            src={require("../images/800-600-gateau-fraise.jpg")}
            prix={40}
            nom="Gateau-fraise"
          />
        </div>
      </div>
    </div>
  );
};

export default Magasin;
