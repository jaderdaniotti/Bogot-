import convinto1 from "../assets/immagini/convinto1.png";
import convinto2 from "../assets/immagini/convinto2.png";
import convinto3 from "../assets/immagini/convinto3.png";

export default function Convinto() {
    const immagini = [convinto1, convinto2, convinto3];
    return (
        <div className="flex flex-col gap-3 items-center">
            <div className="flex flex-col">

                <h1 className="text-white text-2xl montserrat font-extrabold text-center">Ancora non sei convinto?</h1>
                <p className="text-white text-lg montserrat font-medium text-center ">Guarda questi look:</p>
            </div>

            <div className="relative w-full py-6">
                {/* Sfondo con linea dorata */}
                <div className="absolute inset-0 bg-black">
                    {/* Sfumatura centrale dorata */}
                    <div className="absolute left-1/2 top-1/3 w-screen h-[2px]  bg-gradient-to-b from-yellow-400 via-yellow-500 to-yellow-400 opacity-80 blur-[0px] -translate-x-1/2"></div>
                    <div className="absolute left-1/2 top-1 h-full w-full  bg-[#403219] opacity- blur-[0px] -translate-x-1/2"></div>
                    {/* Sfocatura ai lati */}
                    <div className="absolute inset-0 bg-gradient-to-l from-black/0 via-black/30 to-black"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/0 via-black/30 to-black"></div>
                </div>

                {/* Carosello */}
                <div className="relative z-10 flex overflow-x-auto carosello-tipo  gap-5 px-5 no-scrollbar">
                    {immagini.map((immagine, index) => (
                        <div key={index} className="flex-shrink-0 justify-center items-center flex w-[100vw] p-5 ">
                            <img
                                src={immagine}
                                alt={`look-${index}`}
                                className="h-[380px] object-cover rounded-xl  shadow-lg"
                            />
                        </div>
                    ))}
                </div>
            </div>


        </div>
    )
}