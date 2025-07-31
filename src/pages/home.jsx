import React from "react";
import PromoBanner from "../components/PromoBanner";
import Hero from "../components/Hero";
import Trailer from "../components/Trailer";
import Fidati from "../components/Fidati";

const Home = () => (
  <div className="w-screen h-full overflow-hidden">
    <PromoBanner />
    <Hero />
    <Trailer />
    <Fidati />
  </div>
);

export default Home;

