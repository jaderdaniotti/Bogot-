import React from "react";
import PromoBanner from "../components/PromoBanner";
import Hero from "../components/Hero";
import Trailer from "../components/Trailer";
import Fidati from "../components/Fidati";
import Convinto from "../components/Convinto";
import ComparisonTable from "../components/ComparisonTable";
import Descrizione from "../components/Descrizione";
import Capelli from "../components/Capelli";
import Unisciti from "../components/Unisciti";
import Acquista from "../components/Acquista";
import Footer from "../components/footer";

const Home = () => (
  <>
  <div className="w-screen flex flex-col h-full solo-mobile pb-10">
    <PromoBanner />
    <Hero />
    <Trailer />
    <Fidati />
    <Convinto />
    <ComparisonTable />
    <br />
    <br />
    <br />
    <Descrizione />
    <Capelli />
    <Unisciti />
    <Acquista />
    <br />
    <Footer />
  </div>
  <div className="overmobile">
    
  </div>
  </>
);

export default Home;

