import React, { useState, useEffect, useRef } from 'react';
import img1 from '../../assets/img1.svg'
import img2 from '../../assets/img2.svg'
import Feature from './Feature';

function Pay() {
    const contents = [
        {
            id: 1,
            title: "AU PAY",
            description: "The Golden Gold App",
            description1: "We're Making Jewellery Scheme Payments Easier.",
            description2: "AU Pay introduces a chit scheme payment system that transcends the ordinary - providing your patrons with a secure and efficient way to make their jewellery dreams a reality. Whether they're acquiring a timeless piece for themselves or expressing love through a thoughtful gift, AU Pay ensures that every installment paid is smooth and as memorable as the purchase itself. Give your customers an immersive chit-scheme management platform where sophistication meets simplicity - experience AU Pay today!",
            image: img1,
            color: "bg-black",
        },
        {
            id: 2,
            title: "AU PAY",
            description: "Digi Gold",
            description1: "Next-Gen Gold Investment Platform",
            description2: "DIGI GOLD offers real-time investment in gold, fully backed by actual gold stored in secure vaults. With AU.Pay's DIGI GOLD, your customers can easily buy, store, and sell gold online in small, affordable amounts. Whether it's 1 gram or 100 grams, DIGI GOLD provides a secure, accessible, and convenient investment solution for all.",
            image: img2,
            color: "bg-black",
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleScroll = () => {
            const sectionHeight = container.clientHeight;
            const currentSection = Math.round(container.scrollTop / sectionHeight);
            setActiveIndex(currentSection);
        };

        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='w-full'>
            <div className="relative w-full h-screen flex overflow-hidden bg-black">
                <div
                    ref={containerRef}
                    className="w-3/5 overflow-y-auto h-full snap-y snap-mandatory scroll-smooth"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    <style jsx>{`div::-webkit-scrollbar { display: none; }`}</style>
                    {contents.map((content, index) => (
                        <div
                            key={content.id}
                            className={`h-screen flex flex-col justify-center p-16 snap-start bg-black transition-all duration-500 ease-in-out`}
                        >
                            <div
                                className={`space-y-8 transform transition-all duration-500 ease-out ${activeIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                                    }`}
                            >
                                <div className="flex flex-col gap-4">
                                    <h2 className="text-sm font-bold text-white tracking-tight">{content.title}</h2>
                                    <p className="text-4xl font-extrabold text-yellow-300 leading-relaxed max-w-xl">{content.description}</p>
                                    <p className="text-2xl font-bold text-white leading-relaxed max-w-xl">{content.description1}</p>
                                    <p className="text-xl text-white font-thin leading-relaxed break-words max-w-xl">
                                        {content.description2}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="w-2/5 h-screen overflow-hidden">
                    <div className="h-full flex flex-col items-center justify-between p-20">
                        <div className="flex-1 w-full flex items-center justify-center p-3">
                            <div className="relative w-full h-3/4">
                                <img
                                    key={activeIndex}
                                    src={contents[activeIndex].image}
                                    alt={contents[activeIndex].title}
                                    className="w-full h-full object-contain transform transition-all duration-500 ease-out"
                                    style={{ animation: 'fadeIn 0.5s ease-out' }}
                                />
                                <style jsx>{`
                        @keyframes fadeIn {
                            from {
                                opacity: 0;
                                transform: scale(0.95);
                            }
                            to {
                                opacity: 1;
                                transform: scale(1);
                            }
                        }
                    `}</style>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Feature />
        </div>
    );
}

export default Pay;