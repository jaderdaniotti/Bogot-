import unisciti from '../assets/immagini/unisciti2.png';
import banconote from '../assets/immagini/banconote.png';
export default function Unisciti() {
    return (
        <div>
            <img src={unisciti} alt="unisciti" className='w-full' />
            <div className="h-full gap-4 mt-6 relative">
                <img src={banconote} alt="banconote" className="w-full" />
                <div className="flex flex-col items-center w-7/10 justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-4">
                    <p className="text-white text-md w-full text-center font-bold">
                        Vuoi guadagnare vendendo Bogotà nel tuo salone? <br />
                    <span className="text-white text-md w-full italic font-light text-center">
                        Compila questo form:
                    </span>
                    </p>
                <button className="btn-gold font-extrabold text-black text-lg mt-6 px-8 py-3">
                    UNISCITI AL CARTELLO
                </button>
                </div>
            </div>
        </div>
        
    );
}