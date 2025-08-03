import React from "react";
import PromoBanner from "../components/PromoBanner";
import Hero from "../components/Hero";
import Trailer from "../components/Trailer";
import Fidati from "../components/Fidati";
import Convinto from "../components/Convinto";
import ComparisonTable from "../components/ComparisonTable";
import Descrizione from "../components/Descrizione";
import Capelli from "../components/capelli";
import Unisciti from "../components/unisciti";
import Acquista from "../components/acquista";
import Footer from "../components/footer";
import qrcode from "../assets/immagini/qrcode.jpg";

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
  <div className="overmobile h-screen w-screen flex justify-center bg-white items-center ">
    <div className="my-auto flex flex-col gap-10">
    <h1 className="text-black text-5xl relative translate-y-1/2 text-center anton font-bold">
      Scansiona il QR code per accedere al nostro sito
    </h1>
    <img src={qrcode} alt="qrcode" className="object-contain mx-auto my-auto" />
    </div>
  </div>
  </>
);

export default Home;

