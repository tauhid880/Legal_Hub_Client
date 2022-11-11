import React, { useEffect } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import AllServiceCard from "../../component/AllServiceCard/AllServiceCard";

const AllServices = () => {
  const [allServices, setAllServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allServices")
      .then((res) => res.json())
      .then((data) => setAllServices(data));
  }, []);
  // const { name, picture, price, rating, description } = allServices;
  return (
    <div className="bg-gray-600">
      <Helmet>
        <title>Services</title>
      </Helmet>
      <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-5 gap-8 pt-28 px-10 pb-10 ">
        {allServices.map((allService) => (
          <AllServiceCard
            key={allService._id}
            allService={allService}
          ></AllServiceCard>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
