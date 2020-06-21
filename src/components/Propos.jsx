import React from "react";

const Propos = () => {
  return (
    <div id="services" className="about py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-5">
            <h1 className="text-capitalize">
              Nos <strong className="text-primary">Services</strong>
            </h1>
            <div className="text-muted my-4 w-75">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              distinctio voluptates voluptate, veritatis pariatur tempore
              suscipit dolorum magni sint iure sit non ducimus facilis labore
              ipsa blanditiis est eum aliquid? Deserunt est aliquam, delectus
              debitis ullam accusantium asperiores totam quasi.
            </div>
          </div>
          <div className="col-10 mx-auto col-md-6 my-5 align-self-center">
            <div className="about-img-container">
              <img
                src={require("../images/petit-gateau-bleuet.jpg")}
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Propos;
