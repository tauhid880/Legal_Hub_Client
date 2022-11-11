import React, { useEffect } from "react";
import { useState } from "react";
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
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5  p-28">
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
