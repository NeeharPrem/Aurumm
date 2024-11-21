import React from 'react';

const Card = ({img,header,description}) => {
    return (
        <div
            className="hover:cursor-default w-full bg-white text-black shadow-lg rounded-lg border border-gray-100 
            transition-all duration-300 ease-in-out 
            hover:scale-105 hover:shadow-xl 
            group"
        >
            <div className="p-6">
                <div className='flex flex-row gap-2 items-center'>
                    <span><img src={img} /></span>
                    <h2 className="text-2xl font-normal text-black 
                    transition-all duration-300 
                    group-hover:text-blue-600">{header}</h2>
                </div>
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
        </div>
    )
}

function FutureSection() {
    const img=[
        'https://aurumm.co/_next/static/media/icon_4.62d8bce5.svg',
        'https://aurumm.co/_next/static/media/icon_1.5e6099f9.svg',
        'https://aurumm.co/_next/static/media/icon_2.a07dbe9f.svg',
        'https://aurumm.co/_next/static/media/icon_3.0b2e7924.svg',

    ];
    const Data = [
        {
            header: 'All-Round Assistance',
            description: 'Crafted for excellence, AURUMM is a premium end-to-end software suite designed for jewellery stores of all sizes.',
        },
        {
            header: 'Relationship Management',
            description: 'Stay connected with your customers and vendors while keeping their data secure. With AURUMM, anything is possible!',
        },
        {
            header: 'Technical Support',
            description: 'Our dedicated team of professionals is available year-round to resolve all your queries promptly and efficiently.',
        },
        {
            header: 'Stay Ahead',
            description: 'We constantly update our platforms with the latest trends, ensuring you always stay ahead of your competitors.',
        },
    ];

    return (
        <div className='flex flex-row bg-white w-full h-full p-5'>
            <div className='p-2 text-black w-full'>
                <div className='w-60 h-16 items-center border border-[#2b2b2b33] pt-5 rounded-full mb-2'>
                    <p className='text-black flex flex-row justify-center items-center gap-2'>
                        <span>
                            <div className='bg-yellow-300 w-3 h-3 mx-auto rounded-full'></div>
                        </span>
                        WE'RE HERE TO HELP
                    </p>
                </div>
                <div className='ml-3'>
                    <p className='text-5xl font-extrabold mb-8'>This is The Future of Jewellery Store Management</p>
                    <div className='grid grid-cols-4 gap-6'>
                        {Data.map((item,index)=>{
                            return <Card img={img[index]} header={item.header} description={item.description}/>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FutureSection