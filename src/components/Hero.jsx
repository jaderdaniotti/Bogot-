import BackgroundHero from "../assets/immagini/backgroundHero.png";
import pablohero from "../assets/immagini/pablohero.svg";

export default function Hero() {
  return (
    <div 
      id="hero" 
      className="w-full h-screen relative pt-5 pb-0 mb-0"
      style={{
        backgroundImage: `url(${BackgroundHero})`
      }}
    >
      <div className="h-5 flex flex-col items-center justify-center relative">
      </div>
      <div className="w-full h-full flex flex-col items-center justify-center relative ">
        <img src={pablohero} alt="pablohero" className="w-full h-full object-cover z-3" />
        <h1 className="text-white  text-8xl  absolute top-6 left-1/2 transform -translate-x-1/2 z-2 anton">BOGOTÀ</h1>
        <p className="text-white z-4 text-2xl absolute top-3/4 left-1/2 transform -translate-x-1/2 w-100 text-center text-sm font-semibold italic montserrat">La polvere del Patron 
        <strong> pura al 100%</strong>
        <button className="not-italic text-black px-3 py-2 z-4 text-2xl absolute top-3/5 translate-y-2/3 left-1/2 transform -translate-x-1/2 w-max text-center text-md font-bold btn-gold">
          Scopri Bogotà!
        </button>
        </p>
      </div>
    </div>
  );
}