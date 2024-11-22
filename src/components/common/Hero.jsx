import React from 'react';
import Typewriter from 'typewriter-effect';
import { ChevronRight, ArrowRight } from 'lucide-react';

function Hero({ title = null, head, typewriter, final = null }) {
    return (
        <div className="relative w-full h-screen flex flex-col justify-center items-center p-5 lg:pt-6 overflow-hidden">
            <div className="absolute inset-0">
                <div className={`absolute inset-0 bg-gradient-to-r ${title ? 'from-green-500 via-yellow-500 to-orange-500' : 'from-purple-500 via-pink-500 to-red-500'} animate-gradient-x`}>
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-500 via-teal-500 to-emerald-500 mix-blend-overlay animate-gradient-y opacity-50" />
                </div>
            </div>
            <div
                className="absolute inset-0"
                style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                }}
            />
            <div className="relative z-10">
                <div
                    className="flex flex-col gap-3 items-center justify-center text-7xl font-semibold p-8 rounded-xl"
                    // style={{
                    //     backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    // }}
                >
                    {title && (
                        <div className="items-start w-full">
                            <div className="max-w-16 border-b-2 border-b-green-600 ml-5">
                                <p className="text-lg">{title}</p>
                            </div>
                        </div>
                    )}
                    <p className="text-white text-4xl md:text-6xl lg:text-7xl drop-shadow-xl font-semibold tracking-widest text-center">{head}</p>
                    <div className="text-2xl md:text-4xl lg:text-5xl text-white drop-shadow-2xl font-light tracking-wide text-center">
                        <Typewriter
                            options={{
                                strings: [typewriter],
                                autoStart: true,
                                loop: true,
                                delay: 50,
                            }}
                        />
                    </div>
                    {final && <p className="text-sm md:text-lg lg:text-xl text-black-300 mt-6 font-serif">{final}</p>}
                </div>
            </div>
            <div className="relative z-10 flex flex-row w-full items-center justify-center pt-3">
                {!title && (
                    <button className="bg-black text-white rounded-full hover:rounded-l-full hover:rounded-br-none px-4 py-2 h-16 w-52 flex items-center justify-center gap-2 group transition-all duration-300">
                        <span className="text-md flex items-center">
                            Get Demo
                            <span className="ml-5">
                                <ChevronRight className="block group-hover:hidden" />
                                <ArrowRight className="hidden group-hover:block" />
                            </span>
                        </span>
                    </button>
                )}
            </div>
        </div>
    );
}

export default Hero;