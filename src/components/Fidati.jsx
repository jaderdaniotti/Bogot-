import { FaStar } from "react-icons/fa";
import fidati2 from "../assets/immagini/fidatipage.png";

export default function Fidati() {
    const titoli = [
        "Fantastico",
        "Perfetto",
        "Eccezionale",
        "Stupendo",
        "Meraviglioso",
        "Incredibile",
        "Top",
        "Superbo",
        "Favoloso",
        "Straordinario",
        "Eccellente",
        "Magnifico",
        "Ottimo",
        "Impeccabile",
        "Sorprendente",
        "Fenomenale",
        "Grandioso",
        "Spettacolare",
        "Favoloso",
        "Super Consigliato"
    ];
    const frasi =
        [
            "Non riesco più a fare a meno di Bogotà!!",
            "Esperienza fantastica, la consiglio a tutti.",
            "Servizio impeccabile e velocissimo.",
            "Ottimo prodotto, qualità al top.",
            "Davvero incredibile, oltre le aspettative.",
            "Lo uso ogni giorno, indispensabile!",
            "Perfetto in ogni dettaglio, super consigliato.",
            "Un must-have, non potrei farne a meno.",
            "Prodotto di qualità eccezionale.",
            "Semplicemente fantastico, voto massimo!"
        ]
    const generateStarRating = () => {
        const weights = [5, 4, 5, 4, 5, 5, 4, 5, 5, 4, 5, 5, 5, 5, 4];
        // => 5 ha un'alta probabilità, 4 appare meno
        return weights[Math.floor(Math.random() * weights.length)];
    };
    // Funzione per generare una recensione casuale
    const generateReviews = (count) => {
        return Array.from({ length: count }, (_, i) => ({
            id: i,
            titolo: titoli[Math.floor(Math.random() * titoli.length)],
            frase: frasi[Math.floor(Math.random() * frasi.length)],
            stars: generateStarRating(),
            img: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}` // immagine profilo random
        }));
    };

    const reviews = generateReviews(50);

    return (
        <div className="flex flex-col min-h-min max-h-min">
            <section className="relative mb-0 bg-black overflow-hidden flex flex-col py-0 ">

                <img src={fidati2} alt="" className=" -translate-y-1/8 right-0 w-full h-full object-cover" />
                <div className="carousel carousel-center -translate-y-12/8 rounded-box max-w-md space-x-5 gap-10 p-5">
                    {reviews.map((rec) => (
                        <div
                            key={rec.id}
                            className="carousel-item bg-gradient-to-r from-[#169A54] to-[#169A54] opacity-90 
                               rounded-4xl w-[80vw] h-[220px] p-8 flex flex-col  
                               shadow-lg ">
                            <div className="flex top-10 mx-auto relative gap-3 px-5 flex-col">
                                <div className="flex text-white mx-auto items-center gap-3 relative text-3xl mb-1">
                                    {Array(rec.stars).fill(null).map((_, i) => (
                                        <FaStar key={i} />
                                    ))}
                                    <img
                                        src={rec.img}
                                        alt={rec.nome}
                                        className="w-12 h-12 rounded-full border-2 border-white"
                                    />
                                </div>

                                {/* recnesione */}
                                <div className="flex flex-col left-3 relative">
                                    <p className="text-white text-3xl anton  tracking-wide font-bold">{rec.titolo}</p>
                                    <p className="text-white text-sm w-3/4 leading-tight mt-1">{rec.frase}</p>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </section>
        </div>
    );
}
