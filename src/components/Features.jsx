import React, { useState } from 'react';

const img = [
    'https://aurumm.co/_next/static/media/featuresimg.40ecab2c.svg',
    'https://aurumm.co/_next/static/media/Chit_Management%20(1).bf71cc14.svg',
    'https://aurumm.co/_next/static/media/Estimation%20&%20Billing.a551ded4.svg',
    'https://aurumm.co/_next/static/media/Cost_Management.4f898207.svg',
];

const Data = [
    { name: 'Cloud Support', img: img[0] },
    { name: 'Savings Scheme Management', img: img[1] },
    { name: 'Data Management', img: img[0] },
    { name: 'Estimation & Billing', img: img[2] },
    { name: 'Cost Management', img: img[3] },
    { name: 'Reporting & Dashboard', img: img[1] },
];

function Features() {
    const [source, setSource] = useState(img[0]);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e, index) => {
        if (hoveredIndex !== index) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePosition({ x, y });
    };

    return (
        <div className="w-full p-3 text-white">
            <div className="p-3">
                <div className="w-40 h-16 items-center border border-[#fff3] pt-5 rounded-full mb-2">
                    <p className="text-white flex flex-row justify-center items-center gap-2">
                        <span>
                            <div className="bg-yellow-300 w-3 h-3 mx-auto rounded-full"></div>
                        </span>
                        FEATURES
                    </p>
                </div>
                <div className="ml-3 break-words">
                    <p className="text-5xl font-extrabold">
                        Growth with AURUMM: <br />
                        Your Partner in Success!
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-2 ml-3 p-2 mb-2 gap-3">
                <div className="grid grid-cols-1 gap-3 pt-9 pb-2">
                    {Data.map((item, index) => (
                        <div
                            key={index}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            onMouseMove={(e) => handleMouseMove(e, index)}
                            onClick={() => setSource(item.img)}
                            className={`
                                w-full h-14 border rounded-sm border-[#fff3] 
                                flex items-center justify-start 
                                px-4 cursor-pointer 
                                transition-all duration-300 
                                ${hoveredIndex === index
                                    ? 'bg-white/10 text-yellow-200 font-semibold'
                                    : 'text-white/70 hover:text-white'}
                            `}
                        >
                            {hoveredIndex === index && (
                                <div
                                    className="absolute pointer-events-none z-10"
                                    style={{
                                        left: `${mousePosition.x * 100}%`,
                                        top: `${mousePosition.y * 100}%`,
                                        transform: 'translate(-50%, -50%)',
                                        width: '200px',
                                        height: '200px',
                                        background:
                                            'radial-gradient(circle, rgba(255, 255, 100, 0.3) 0%, rgba(255, 255, 100, 0) 70%)',
                                        filter: 'blur(100px)',
                                    }}
                                />
                            )}
                            <span className="tracking-wider text-xl font-bold">
                                {item.name}
                            </span>
                        </div>
                    ))}
                </div>
                <div className="w-full h-full flex items-center justify-center p-4">
                    <div className="w-full h-full flex items-center justify-center">
                        <img
                            className="max-w-full max-h-full object-contain"
                            src={source}
                            alt="Selected Item"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;