import React from "react";
import { Helmet } from "react-helmet-async";
import ContactUs from "../ContactUs/ContactUs";
import Hero from "../Hero/Hero";
import Services from "../Services/Services";
import Statistics from "../Statistics/Statistics";

const Home = () => {
  return (
    <div className="bg-zinc-600">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Hero></Hero>
      <Services></Services>
      <ContactUs></ContactUs>
      <Statistics></Statistics>
    </div>
  );
};

export default Home;
