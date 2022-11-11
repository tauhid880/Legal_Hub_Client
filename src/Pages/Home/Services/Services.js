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
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 p-10">
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
