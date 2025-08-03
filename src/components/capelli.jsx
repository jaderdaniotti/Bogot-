import capelli from '../assets/immagini/capelli.png';
import banconote from '../assets/immagini/banconote.png';
import Group53 from '../assets/immagini/Group53.png';

export default function Capelli() {

    return (
        <div className="relative w-full bg-black">
            {/* Immagine principale */}
            <img src={capelli} alt="capelli" className="w-full object-cover" />
            <img src={Group53} alt="" className='w-full -translate-y-4/10' />
            <div className="h-full gap-4 -translate-y-8/10  relative">
                <img src={banconote} alt="banconote" className="w-full" />
                <button className="btn-gold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black font-bold text-lg mt-6 px-8 py-3">
                    ACQUISTA ORA!
                </button>
            </div>
        </div>
    );
}
