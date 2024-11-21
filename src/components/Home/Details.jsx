import React, { useState, useEffect } from 'react';

const Btn = [
    'AU Pay',
    'AU Sales',
    'AU Shop'
];

const img = [
    'https://aurumm.co/_next/static/media/new_aupay.939fae7c.svg',
    'https://aurumm.co/_next/static/media/new_ausale.20a8529c.svg',
    'https://aurumm.co/_next/static/media/new_aushop.a2faba30.svg'
];

const Data = [
    {
        header: 'AU PAY',
        moto: 'The Golden Gold App',
        info: 'We are making jewellery scheme payments easier.'
    },
    {
        header: 'AU SALES',
        moto: 'The Hybrid ERP Magic',
        info: 'Inventory management excellence in every tap.'
    },
    {
        header: 'AU SHOP',
        moto: 'Open Your Shop To The World',
        info: 'A smooth jewellery shopping experience.'
    }
];

function Details() {
    const [selected, setSelected] = useState(0);
    const [animationKey, setAnimationKey] = useState(0);

    const handleSelect = (index) => {
        setSelected(index);
        setAnimationKey(prev => prev + 1);
    };

    return (
        <div className="w-full min-h-scree bg-white p-5 text-black overflow-hidden">
            <div className="flex flex-row justify-center items-center overflow-hidden gap-x-4 p-4">
                {Btn.map((item, index) => {
                    const isActive = selected === index;
                    return (
                        <button
                            key={index}
                            onClick={() => handleSelect(index)}
                            className={`px-4 py-2 rounded-full border border-black w-36 transition-colors ${isActive ? 'bg-yellow-200 text-black' : 'bg-white text-black'
                                } hover:scale-105 active:scale-95`}
                        >
                            {item}
                        </button>
                    );
                })}
            </div>
            <div className="flex flex-row justify-center items-center w-full h-full mt-4">
                <div className="flex-1 flex justify-center items-center h-[500px]">
                    <img
                        key={`image-${animationKey}`}
                        src={img[selected]}
                        alt={`${Btn[selected]} illustration`}
                        className="max-w-full max-h-full object-contain animate-fade-in"
                    />
                </div>
                <div className="flex-1 flex flex-col justify-center h-full p-4 gap-9">
                    <p
                        key={`header-${animationKey}`}
                        className="text-lg font-bold animate-slide-in-right delay-100"
                    >
                        {Data[selected].header}
                    </p>
                    <p
                        key={`moto-${animationKey}`}
                        className="text-3xl text-yellow-300 font-extrabold animate-slide-in-right delay-200"
                    >
                        {Data[selected].moto}
                    </p>
                    <p
                        key={`info-${animationKey}`}
                        className="text-5xl font-extrabold text-black animate-slide-in-right delay-300"
                    >
                        {Data[selected].info}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Details;