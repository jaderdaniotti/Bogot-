import React from 'react';
import tabella from '../assets/immagini/tabella.svg';

export default function ComparisonTable() {
    const features = [
        { name: "Volume istantaneo", col1: true, col2: true },
        { name: "Tenuta invisibile", col1: true, col2: false },
        { name: "Naturale al tatto", col1: true, col2: false },
        { name: "Nessun residuo", col1: true, col2: true },
        { name: "Facile da lavare", col1: true, col2: false }
    ];

    return (
        <div className='flex flex-col items-center justify-center relative top-10 h-full p-6 mx-auto w-9/10'>
            <img src={tabella} alt="tabella" className='w-full' />
        </div>
        // <div className="flex flex-col items-center gap-6 relative top-10 p-6 mx-auto w-9/10">
        //     {/* Tab Header */}
        //     <div className="grid grid-cols-4  w-full relative rounded-full overflow-hidden">
        //         <button className="h-13 col-span-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold rounded-l-full shadow-lg">
        //             PROPRIETÀ
        //         </button>
        //         <button className="h-13 bg-black text-white font-semibold border border-yellow-500 rounded-none">
        //             Bogotà
        //         </button>
        //         <button className="h-13 bg-black text-white font-semibold border border-yellow-500 rounded-r-full">
        //             Altri
        //         </button>
        //     </div>

        //     {/* Comparison Table - GRID SYSTEM */}
        //     <div className="w-full h-full ">
        //         <div className="border rounded-2xl shadow-2xl h-full">
        //             {features.map((feature, index) => (
        //                 <div 
        //                     key={index} 
        //                     className="grid grid-cols-4 h-[100px] border-b border-yellow-500 last:border-none"
        //                 >
        //                     {/* Feature Name Column - 2/4 */}
        //                     <div className={`col-span-2 bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center px-4 ${index === 0 ? 'rounded-tl-2xl' : ''} ${index === features.length - 1 ? 'rounded-bl-2xl' : ''}`}>
        //                         <span className="text-black text-center text-lg w-3/4 font-bold tracking-wide">
        //                             {feature.name}
        //                         </span>
        //                     </div>
                            
        //                     {/* First Comparison - 1/4 */}
        //                     <div className="col-span-1 bg-black flex items-center justify-center border-r border-yellow-500">
        //                         <div className={`text-2xl font-bold ${feature.col1 ? 'text-green-400' : 'text-red-500'}`}>
        //                             {feature.col1 ? '✓' : '✗'}
        //                         </div>
        //                     </div>

        //                     {/* Second Comparison - 1/4 */}
        //                     <div className={`col-span-1 bg-black flex items-center justify-center ${index === 0 ? 'border-r rounded-tr-2xl' : ''} ${index === features.length - 1 ? 'rounded-br-2xl' : ''}`}>
        //                         <div className={`text-2xl font-bold ${feature.col2 ? 'text-green-400' : 'text-red-500'}`}>
        //                             {feature.col2 ? '✓' : '✗'}
        //                         </div>
        //                     </div>
        //                 </div>
        //             ))}
        //         </div>
        //     </div>
        //     <br />
        //     <br />
        // </div>
    );
}
