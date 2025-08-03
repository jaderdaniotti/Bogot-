import instagram from '../assets/immagini/instagram.svg';
import tiktok from '../assets/immagini/tiktok.svg';
export default function Footer() {
    return (
        <div>
            <hr className="text-[#DF9F5D]" />
            <div className="flex justify-center items-center h-25">
                <p className="italic font-light text-md text-white text-center py-5">
                    Bogotà non è una sostanza illegale, <br />ma puó creare dipendenza. <br />Usala con moderazione. Oppure no.
                </p>
            </div>
            <hr className="text-[#DF9F5D]" />
            <br />
            <div className="grid grid-cols-10 ">
                <div className="col-span-7 flex flex-col items-center justify-center">
                    <p className="text-white text-md ">
                    Bogotá Magic Powder™ 
                    <br />
                    <span className="text-white text-md font-light italic">
                        info@kosmosignage.com
                    </span>
                    <br />
                    <span>
                        P.IVA
                    </span>
                    </p>
                </div>
                <div className="col-span-2 flex gap-3 items-center justify-center">
                    <a href="">  <img src={instagram} alt="instagram" className='w-10 h-10' /> </a>
                    <a href="">  <img src={tiktok} alt="tiktok" className='w-10 h-10' /> </a>
                </div>
            </div>
            <br />
        </div>
    );
}