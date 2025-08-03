import React from 'react';
import boccetta from '../assets/immagini/boccetta.svg';
import banconote from '../assets/immagini/banconote.png';

export default function Descrizione() {
    return (
        <>
        <div className=""id='MagicPowder'>
        <br />
            <section className="w-full grid grid-cols-12 bg-black text-white  items-center px-6 py-10 relative">

                {/* Titolo */}
                <div className="text-left w-full relative left-5 gap-5 flex flex-col justify-center col-span-8">
                    <h1 className="anton text-7xl leading-tight">
                        BOGOTÁ
                    </h1>
                    <h2 className="anton text-5xl bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-transparent bg-clip-text">
                        MAGIC POWDER
                    </h2>

                    {/* Testo descrizione */}
                    <p className="montserrat text-base max-w-3/4 mt-4">
                        <span className="font-semibold">Bogotà Magic Powder</span> è la polvere volumizzante istantanea che crea dipendenza.
                    </p>
                    <p className="montserrat text-base max-w-3/4 mt-3">
                        Ispirata al carisma illegale del Patron, dona <span className="font-bold">volume estremo</span> e <span className="font-bold">tenuta invisibile</span> in pochi secondi.
                    </p>
                </div>

                {/* Immagine della boccetta */}
                <div className="w-full col-span-4 justify-self-end mt-6">
                    <img
                        src={boccetta}
                        alt="Bogotá Magic Powder"
                        className="w-full drop-shadow-[0_0_35px_rgba(255,185,56,0.6)]"
                    />
                </div>

            </section>
            <br />
            <br />

            <div className="h-full gap-4 -translate-y-5 relative">
                <img src={banconote} alt="banconote" className="w-full" />
                <button className="btn-gold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black font-bold text-lg mt-6 px-8 py-3">
                    ACQUISTA ORA!
                </button>
            </div>
        </div>
        </>
    );

}