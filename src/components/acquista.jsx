import acquista from '../assets/immagini/acquista2.png';
export default function Acquista() {
    return (
        <div className='gap-0'>
            <img src={acquista} alt="acquista" className='w-full' />
            <div className="gap-3 flex flex-col items-center justify-center">
            <p className='text-white text-center w-4/5 mx-auto  text-lg font-bold'>Sei ancora in tempo per vincere un Iphone 16 Pro!
            <br />
            <span className='text-white text-center w-3/4 mx-auto  text-lg font-light italic'>Affrettati prima che finisca!</span>
            </p>
            
            <button className='btn-gold text-black font-bold text-lg px-8 py-3'>SCOPRI COME!</button>
            <button className='btn-gold text-black font-bold text-lg px-8 py-3'>ACQUISTA ORA!</button>
            </div>
        </div>
    );
}