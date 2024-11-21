import React from 'react';
import Header from '../components/common/Header';
import Hero from '../components/common/Hero';
import Body from '../components/Home/Body';
import Footer from '../components/common/Footer';


function Home() {
    return (
        <div className="w-full min-h-screen overflow-hidden">
            <Header />
            <div className="mt-16">
                <Hero />
            </div>
            <Body />
            <Footer />
        </div>
    );
}

export default Home;