import React from 'react'

const InfiniteMarquee = () => {
    const brands = [
        {
            name: "Sayar Jewellers",
            logo: "https://aurumm.co/_next/static/media/client3.bb1326d9.png"
        },
        {
            name: "Shanthi Jewellery",
            logo: "https://aurumm.co/_next/static/media/client1.a6ce8334.png"
        },
        {
            name: "Thangalakshmi Jewellery",
            logo: "https://aurumm.co/_next/static/media/client4.ae1b0ded.png"
        },
        {
            name: "Swamy Jewellery",
            logo: "https://aurumm.co/_next/static/media/client5.e84cda3c.png"
        },
        {
            name: "Sri kandan Thangamalihai",
            logo: "https://aurumm.co/_next/static/media/client2.375a298f.png"
        }
    ]

    return (
        <section className="py-24 overflow-hidden">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center gap-8">
                    <div className="text-center">
                        <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-600">
                            OUR CLIENTS
                        </h2>
                        <h3 className="mt-2 text-3xl font-bold text-gray-900 sm:text-5xl">
                            Brands That Trust Us!
                        </h3>
                    </div>

                    <div className="w-full relative overflow-hidden group">
                        <div className="flex animate-infinite-scroll group-hover:animate-pause">
                            {[...brands, ...brands].map((brand, index) => (
                                <div
                                    key={`${brand.name}-${index}`}
                                    className="flex-shrink-0 w-56 rounded-r-md h-32 mx-4"
                                >
                                    <div className="relative w-full h-full overflow-hidden rounded-lg bg-gray-300 p-4 shadow">
                                        <img
                                            src={brand.logo}
                                            alt={brand.name}
                                            className="w-full h-full object-contain p-2"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InfiniteMarquee