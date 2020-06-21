import React from "react";

const Services = () => {
  return (
    <section id="services" className="services py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 text-center my-3">
            <img src={require("../images/donut.png")} alt="" />
            <h6 className="text-uppercase my-3 service-title">Beignets</h6>
            <p className="w-75 mx-auto text-left service-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              similique qui fuga dicta temporibus tenetur iusto modi, aut
              laboriosam! Ipsam, praesentium delectus omnis adipisci optio eaque
              sint neque commodi. Error consequuntur obcaecati veniam vero
              molestias reprehenderit blanditiis accusantium, mollitia
              excepturi.
            </p>
          </div>
          <div className="col-md-4 text-center my-3">
            <img src={require("../images/cupcake.png")} alt="" />
            <h6 className="text-uppercase my-3 service-title">Petit Gateaux</h6>
            <p className="w-75 mx-auto text-left service-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              similique qui fuga dicta temporibus tenetur iusto modi, aut
              laboriosam! Ipsam, praesentium delectus omnis adipisci optio eaque
              sint neque commodi. Error consequuntur obcaecati veniam vero
              molestias reprehenderit blanditiis accusantium, mollitia
              excepturi.
            </p>
          </div>
          <div className="col-md-4 text-center my-3">
            <img src={require("../images/bread.png")} alt="" />
            <h6 className="text-uppercase my-3 service-title">Pain</h6>
            <p className="w-75 mx-auto text-left service-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              similique qui fuga dicta temporibus tenetur iusto modi, aut
              laboriosam! Ipsam, praesentium delectus omnis adipisci optio eaque
              sint neque commodi. Error consequuntur obcaecati veniam vero
              molestias reprehenderit blanditiis accusantium, mollitia
              excepturi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
