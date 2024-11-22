import React from "react";

const Downloads = () => {
    const stats = [
        { value: "50+", label: "Clients", icon: "⭐" },
        { value: "10K+", label: "Downloads", icon: "⭐" },
        { value: "72%", label: "Client Revenue Increase", icon: "⭐" }
    ];

    return (
        <div className="bg-black py-16 mt-6">
            <div className="container mx-auto px-4">
                <div className="flex justify-center items-center space-x-12 md:space-x-20">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center space-y-4 transform transition-transform hover:scale-105"
                        >
                            <div className="flex items-center text-white text-5xl md:text-6xl font-bold">
                                <span>{stat.value}</span>
                                <span className="text-3xl md:text-4xl ml-2 opacity-80">{stat.icon}</span>
                            </div>
                            <p className="text-gray-300 font-medium text-base md:text-lg tracking-wide uppercase">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Downloads;