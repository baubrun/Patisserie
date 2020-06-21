import React from "react";

const ItemCard = ({ src, prix, nom }) => {
  return (
    <div className="card card-item" >
      <div className="img-container">
        <img className="card-img-top magasin-img" src={src} alt="item" />
        <span className="magasin-item-icon">
          <i className="fas fa-shopping-cart"></i>
        </span>
      </div>

      <div className="card-body">
        <div className="card-text d-flex justify-content-between text-capitalize">
          <h5 id="magasin-item-nom">{nom}</h5>
          <h5 className="magasin-item-prix">
            ${" "}
            <strong id="store-item-prix" className="font-weight-bold"></strong>{prix}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
