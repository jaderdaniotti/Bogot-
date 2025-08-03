import React, { useState, useEffect } from 'react';

// Importiamo direttamente le immagini per evitare problemi di percorsi
import backgroundHero from '../assets/immagini/backgroundHero.png';
import pablohero from '../assets/immagini/pablohero.svg';
import convinto1 from '../assets/immagini/convinto1.png';
import convinto2 from '../assets/immagini/convinto2.png';
import convinto3 from '../assets/immagini/convinto3.png';
import fidatipage2 from '../assets/immagini/fidatipage2.png';
import tabella from '../assets/immagini/tabella.svg';
import acquista2 from '../assets/immagini/acquista2.png';
import unisciti2 from '../assets/immagini/unisciti2.png';
import capelli from '../assets/immagini/capelli.png';
import banconote from '../assets/immagini/banconote.png';
import boccetta from '../assets/immagini/boccetta.svg';
import Group53 from '../assets/immagini/Group53.png';
import trailer from '../assets/immagini/trailer.png';
import instagram from '../assets/immagini/instagram.svg';
import tiktok from '../assets/immagini/tiktok.svg';

export default function LoadingScreen({ onLoadingComplete }) {
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    // Lista di tutte le immagini importate
    const imagesToPreload = [
        backgroundHero,
        pablohero,
        convinto1,
        convinto2,
        convinto3,
        fidatipage2,
        tabella,
        acquista2,
        unisciti2,
        capelli,
        banconote,
        boccetta,
        Group53,
        trailer,
        instagram,
        tiktok
    ];

    useEffect(() => {
        let loadedImages = 0;
        const totalImages = imagesToPreload.length;

        const preloadImages = () => {
            imagesToPreload.forEach((src, index) => {
                const img = new Image();
                img.onload = () => {
                    loadedImages++;
                    const progress = Math.round((loadedImages / totalImages) * 100);
                    setLoadingProgress(progress);
                    
                    if (loadedImages === totalImages) {
                        setTimeout(() => {
                            setIsLoading(false);
                            onLoadingComplete();
                        }, 500); // Piccola pausa per transizione fluida
                    }
                };
                img.onerror = () => {
                    loadedImages++;
                    const progress = Math.round((loadedImages / totalImages) * 100);
                    setLoadingProgress(progress);
                    
                    if (loadedImages === totalImages) {
                        setTimeout(() => {
                            setIsLoading(false);
                            onLoadingComplete();
                        }, 500);
                    }
                };
                img.src = src;
            });
        };

        preloadImages();
    }, [onLoadingComplete]);

    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
            <div className="text-center">
                {/* Logo Bogotà */}
                <div className="mb-8">
                    <h1 className="text-6xl font-bold text-yellow-400 anton tracking-wider">
                        BOGOTÀ
                    </h1>
                    <p className="text-white text-lg mt-2 montserrat">
                        La polvere del Patron pura al 100%
                    </p>
                </div>

                {/* Progress Bar */}
                <div className="w-80 mx-auto mb-4">
                    <div className="bg-gray-800 rounded-full h-3 overflow-hidden">
                        <div 
                            className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-full transition-all duration-300 ease-out"
                            style={{ width: `${loadingProgress}%` }}
                        ></div>
                    </div>
                </div>

                {/* Progress Text */}
                <p className="text-white text-sm montserrat">
                    Caricamento... {loadingProgress}%
                </p>

                {/* Loading Animation */}
                <div className="mt-6 flex justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-400"></div>
                </div>
            </div>
        </div>
    );
} 