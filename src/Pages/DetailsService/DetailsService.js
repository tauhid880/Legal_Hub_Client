import React from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Review from "../../component/Review/Review";

const DetailsService = () => {
  const service = useLoaderData();
  const { name, picture, price, rating, description } = service;
  return (
    <div>
      <Helmet>
        <title>Service Details</title>
      </Helmet>
      <div className="grid lg:grid-cols-2 grid-cols-1 justify-around  pt-28 bg-slate-600">
        <div className="service-section flex justify-center w-full h-full bg-slate-600">
          <div className="lg:p-10 p-5 text-white">
            <figure>
              <img src={picture} alt="" className="w-full h-full" />
            </figure>
            <div className="card-body p-0 pt-5">
              <h2 className="card-title">{name}</h2>
              <p>{description}</p>
              <div className="badge bg-slate-900 p-4 font-semibold">
                Service Fee : {price}
              </div>
              <div className="badge bg-stone-700 p-4 font-semibold">
                Ratting : {rating}
              </div>
            </div>
          </div>
        </div>
        <div className="review-section w-full h-full">
          <Review></Review>
        </div>
      </div>
    </div>
  );
};

export default DetailsService;
