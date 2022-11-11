import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const ServiceCard = ({ service }) => {
  const { _id, name, picture, price, rating, description } = service;
  return (
    <div className="card w-full bg-zinc-600 h-full text-white shadow-2xl">
      <PhotoProvider>
        <PhotoView src={picture}>
          <img
            src={picture}
            style={{ objectFit: "cover" }}
            className="lg:h-64 h-full w-full"
            alt=""
          />
        </PhotoView>
      </PhotoProvider>
      <div className="card-body p-5">
        <h2 className="card-title">{name}</h2>
        <p>
          {description.slice(0, 100)}
          <br />{" "}
          <Link to={`/services/${_id}`} className="underline">
            Read more...
          </Link>
        </p>
        <div className="badge bg-slate-900 p-4 font-semibold">
          Service Fee : {price}
        </div>
        <div className="badge bg-stone-700 p-4 font-semibold">
          Ratting : {rating}
        </div>
      </div>
      <div className="card-actions pl-5 pr-5 pb-5">
        <Link
          to={`/services/${_id}`}
          className="btn btn-outline btn-error normal-case "
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
