import trailer from "../assets/immagini/trailer.png";
export default function Trailer() {
  return (
    <div className="w-full mt-0 bg-black">
      <h4 className="text-white text-lg font-bold text-center">Guarda ora il trailer ufficiale:</h4>
      <img src={trailer} alt="trailer" className="mt-3 object-contain" />
    </div>
  );
}