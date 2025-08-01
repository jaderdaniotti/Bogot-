import React from "react";
import PromoBanner from "../components/PromoBanner";
import Hero from "../components/Hero";
import Trailer from "../components/Trailer";
import Fidati from "../components/Fidati";
import Convinto from "../components/Convinto";

const Home = () => (
  <div className="w-screen flex flex-col h-full overflow-hidden solo-mobile pb-10">
    <PromoBanner />
    <Hero />
    <Trailer />
    <Fidati />
    <Convinto />
  </div>
);

export default Home;

