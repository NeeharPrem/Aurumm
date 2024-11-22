import React, { useState } from 'react';
import { BarChart3, Zap, CreditCard, GitMerge, ChevronLeft, ChevronRight } from 'lucide-react';

const Card = ({ icon: Icon, title, description, isActive, position }) => {
    const positionStyles = {
        'center': 'z-20 scale-100 opacity-100 translate-x-0',
        'left': 'z-10 scale-95 opacity-50 -translate-x-32',
        'right': 'z-10 scale-95 opacity-50 translate-x-32',
        'hidden': 'scale-90 opacity-0'
    };

    return (
        <div className={`absolute w-80 p-8 rounded-2xl transition-all duration-500 
            bg-white border shadow-lg transform
            ${positionStyles[position]} 
            ${isActive ? 'border-indigo-200 shadow-indigo-100' : 'border-gray-100'}`}>
            <div className="flex flex-col items-start text-left space-y-4">
                <div className={`p-3 rounded-xl transition-colors duration-300
                    ${isActive ? 'bg-indigo-50' : 'bg-gray-50'}`}>
                    <Icon className={`w-6 h-6 ${isActive ? 'text-indigo-600' : 'text-gray-500'}`} />
                </div>
                <h3 className={`text-xl font-semibold transition-colors duration-300
                    ${isActive ? 'text-indigo-900' : 'text-gray-700'}`}>
                    {title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                    {description}
                </p>
            </div>
        </div>
    );
};

const Feature = () => {
    const [activeSection, setActiveSection] = useState(0);
    const [activeSectionCard, setActiveSectionCard] = useState(0);

    const sections = [
        {
            title: "Chit & Scheme Management",
            description: "Facilitates seamless administration and tracking of various chit funds and schemes.",
            features: [
                {
                    icon: BarChart3,
                    title: "Flexible Scheme Creation",
                    description: "Create and manage custom schemes with intuitive controls that adapt to your specific needs."
                },
                {
                    icon: Zap,
                    title: "Automated Tracking",
                    description: "Monitor schemes progress with real-time updates and comprehensive insights for better decision making."
                },
                {
                    icon: GitMerge,
                    title: "Smart Analytics",
                    description: "Get detailed insights and analytics about your schemes' performance and member engagement."
                }
            ]
        },
        {
            title: "Payment Management",
            description: "Simplifies transaction processing and invoicing for enhanced financial efficiency.",
            features: [
                {
                    icon: CreditCard,
                    title: "Streamlined Payments",
                    description: "Process transactions quickly and securely with our optimized payment processing system."
                },
                {
                    icon: GitMerge,
                    title: "Seamless Integration",
                    description: "Connect and synchronize with your existing tools and workflows effortlessly."
                },
                {
                    icon: Zap,
                    title: "Quick Settlements",
                    description: "Automated settlement processes ensure timely disbursement of funds to all participants."
                }
            ]
        }
    ];

    const getCardPosition = (index, activeIndex, totalCards) => {
        if (index === activeIndex) return 'center';
        if (index === (activeIndex - 1 + totalCards) % totalCards) return 'left';
        if (index === (activeIndex + 1) % totalCards) return 'right';
        return 'hidden';
    };

    const handlePrevSection = () => {
        setActiveSection((prev) => (prev > 0 ? prev - 1 : sections.length - 1));
        setActiveSectionCard(0);
    };

    const handleNextSection = () => {
        setActiveSection((prev) => (prev < sections.length - 1 ? prev + 1 : 0));
        setActiveSectionCard(0);
    };

    const handlePrevCard = () => {
        setActiveSectionCard((prev) =>
            prev > 0 ? prev - 1 : sections[activeSection].features.length - 1
        );
    };

    const handleNextCard = () => {
        setActiveSectionCard((prev) =>
            prev < sections[activeSection].features.length - 1 ? prev + 1 : 0
        );
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-16 bg-yellow">
            <div className='w-60 h-16 items-center rounded-full mb-2'>
                <p className='text-black flex flex-row justify-center items-center gap-2'>
                    <span>
                        <div className='bg-yellow-300 w-3 h-3 mx-auto rounded-full'></div>
                    </span>
                    Features
                </p>
            </div>
            <div className="flex items-center justify-between mb-16">
                <button onClick={handlePrevSection}
                    className="p-3 rounded-xl hover:bg-indigo-50 text-indigo-600 transition-colors duration-300">
                    <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="text-center max-w-2xl">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        {sections[activeSection].title}
                    </h2>
                    <p className="text-lg text-gray-600">
                        {sections[activeSection].description}
                    </p>
                </div>
                <button onClick={handleNextSection}
                    className="p-3 rounded-xl hover:bg-indigo-50 text-indigo-600 transition-colors duration-300">
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>
            <div className="relative h-96">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-80 h-full">
                        {sections[activeSection].features.map((feature, index) => (
                            <Card
                                key={feature.title}
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                                isActive={index === activeSectionCard}
                                position={getCardPosition(
                                    index,
                                    activeSectionCard,
                                    sections[activeSection].features.length
                                )}
                            />
                        ))}
                    </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 flex justify-center items-center gap-5 w-full">
                    <button onClick={handlePrevCard}
                        className="p-2 rounded-lg hover:bg-indigo-50 text-indigo-600 transition-colors duration-300">
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <div className="flex gap-2">
                        {sections[activeSection].features.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveSectionCard(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 
                                    ${index === activeSectionCard
                                        ? 'bg-indigo-600 w-6'
                                        : 'bg-gray-200 hover:bg-indigo-200'}`}
                            />
                        ))}
                    </div>
                    <button onClick={handleNextCard}
                        className="p-2 rounded-lg hover:bg-indigo-50 text-indigo-600 transition-colors duration-300">
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Feature;