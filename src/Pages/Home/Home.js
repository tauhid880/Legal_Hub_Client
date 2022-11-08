import React from "react";
import ContactUs from "./ContactUs/ContactUs";
import Hero from "./Hero/Hero";
import Statistics from "./Statistics/Statistics";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <ContactUs></ContactUs>
      <Statistics></Statistics>
    </div>
  );
};

export default Home;
