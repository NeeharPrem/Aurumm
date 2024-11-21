import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Body from '../components/Body';


function Home() {
    return (
        <div className='w-full h-screen'>
            <Header />
            <Hero />
            <Body />
        </div>
    );
}

export default Home;