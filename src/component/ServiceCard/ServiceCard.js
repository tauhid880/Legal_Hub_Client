import React from "react";

const ServiceCard = ({ service }) => {
  const { name, picture, price, rating, description } = service;
  return (
    <div className="card w-full bg-zinc-700 h-full text-white shadow-2xl">
      <figure className="lg:h-64 h-full w-full">
        <img src={picture} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description.slice(0, 100)}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline btn-error normal-case ">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
