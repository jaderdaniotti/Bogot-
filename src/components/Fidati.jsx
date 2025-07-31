import fidati from "../assets/immagini/fidatipablo.png"; 
import fidati2 from "../assets/immagini/fidatipage.png";

export default function Fidati() {  
    return (
        <section className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col py-0 ">

        <img src={fidati2} alt="" className="absolute -translate-y-30 right-0 w-full h-full object-contain"/>
            {/* <div className="absolute z-20 text-left top-1/10 left-1/10 ">
                <h1 className="text-[#23A455] text-6xl font-extrabold leading-[0.8] tracking-tighter uppercase">
                    FIDATI<br/>
                    <p className="text-white z-0">DI CHI</p>
                    <p className="text-white z-9">L’HA</p>
                    <p className="text-white z-15 ">PROVATA</p>
                </h1>
            </div>

            <div className="absolute z-10 top-0 right-[-270px]  -translate-y-2/12">
                <img 
                    src={fidati} 
                    alt="Pablo" 
                    className="h-[800px]  object-cover"
                />
            </div> */}


        </section>
    );
}
