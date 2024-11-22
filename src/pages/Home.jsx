import React from 'react';
import Header from '../components/common/Header';
import Hero from '../components/common/Hero';
import Body from '../components/Home/Body';
import Footer from '../components/common/Footer';
import Downloads from '../components/Home/Downloads';
import Clients from '../components/Home/Clients'


function Home() {
    return (
        <div className="w-full min-h-screen overflow-hidden">
            <Header />
                <Hero head={'360° Software Solutions for'} typewriter={'Your JEWELLERY Store'} final={'Take Your Jewellery Store to the Next Level with AURUMM - The Ultimate Software Suite'}/>
            <Body />
            <Downloads/>
            <Clients/>
            <Footer />
        </div>
    );
}

export default Home;