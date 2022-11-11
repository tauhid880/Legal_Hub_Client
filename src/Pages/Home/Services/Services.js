import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../../../component/ServiceCard/ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="bg-gray-600 shadow-xl">
      <div className="text-center p-2 text-white">
        <h1 className=" text-5xl ">Our Services</h1>
        <p className="m-3">
          Headed by one of the most distinguished and experienced lawyers in the
          country, George Hilton, our firm have a sound base in the law
          fraternity, and we aim to put our resources to effective use for the
          success of our clients. Backed by hundreds of successful cases in
          different fields of law, and having being the preferred law firm for
          many Fortune 500 companies, you can rest assured that your case is in
          safe hands with us.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-5 gap-8 p-10">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="flex justify-end p-5">
        <Link
          to="/services"
          className="btn text-white btn-outline  normal-case"
        >
          See more...
        </Link>
      </div>
    </div>
  );
};

export default Services;
