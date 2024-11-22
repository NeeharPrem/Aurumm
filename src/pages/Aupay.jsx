import React from 'react';
import Header from '../components/common/Header';
import Hero from '../components/common/Hero';
import Pay from '../components/Products/Pay';
import Footer from '../components/common/Footer'

function Aupay() {
  return (
    <div className="w-full">
      <Header />
      <Hero title={'AU PAY'} head={'An Exclusive Savings Scheme Payment'} typewriter={'App for Your Jewellery Store!'}/>
      <Pay />
      <Footer/>
    </div>
  );
}

export default Aupay;