import React, { useState } from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react'

function Card({ head,info,description}) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [Hover, setHover] = useState(false);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePosition({ x, y });
    };

    return (
        <div
            className="hover:cursor-default w-full max-w-2xl bg-[#000000] text-white border border-[#fff3] shadow-2xl relative overflow-hidden group rounded-lg"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
                transform: `perspective(1000px) rotateX(${(mousePosition.y - 0.5) * -5}deg) rotateY(${(mousePosition.x - 0.5) * 5}deg)`,
                transition: 'transform 0.1s ease-out',
            }}
        >
            {Hover && (
                <div
                    className="absolute pointer-events-none z-10"
                    style={{
                        left: `${mousePosition.x * 100}%`,
                        top: `${mousePosition.y * 100}%`,
                        transform: 'translate(-50%, -50%)',
                        width: '200px',
                        height: '200px',
                        background: 'radial-gradient(circle, rgba(255, 255, 100, 0.3) 0%, rgba(255, 255, 100, 0) 70%)',
                        filter: 'blur(100px)',
                    }}
                />
            )}
            <div className="p-6">
                <div className='flex flex-row gap-2 items-center'>
                    <span><img src="https://aurumm.co/_next/static/media/symbol.2d89ec5c.svg" /></span><h2 className="text-2xl font-normal text-zinc-100">{head}</h2>
                </div>
                <p className="text-sm break-words text-zinc-400 mt-1">
                    {info}
                </p>
            </div>
            <div className="min-h-36 p-6">
                <div className="flex flex-col md:flex-row md:gap-4 mb-6">
                    <div className="text-sm break-words mt-2">
                        <p className="leading-relaxed">
                           {description}
                        </p>
                    </div>
                </div>
            </div>
            <div className='ml-3 mb-3'>
                <button className="bg-white text-black rounded-full hover:rounded-l-full hover:rounded-br-none px-4 py-2">
                    <span className="text-md flex items-center"> Get Started <span className="ml-5">
                        <ChevronRight className="block group-hover:hidden" />
                        <ArrowRight className="hidden group-hover:block" />
                    </span>
                    </span>
                </button>
            </div>
        </div>
    );
}

export default Card;