import React from 'react';
import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate= useNavigate()
  return (
    <footer className="bg-black text-white py-9 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex flex-col space-y-4">
            <img onClick={()=>navigate('/')} src={logo} alt="Aurumm" className="h-20 max-w-40" />
            {/* <p className='font-extrabold text-4xl'>Aurumm</p> */}
            <p className="text-gray-400 max-w-md">
              World-class technical solutions for elevated jewellery store operations.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">QUICKLINKS</h3>
            <ul className="space-y-3">
              <li><a href="/product" className="text-gray-400 hover:text-white transition-colors">Product</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">SOLUTIONS</h3>
            <ul className="space-y-3">
              <li><a href="/au-pay" className="text-gray-400 hover:text-white transition-colors">AU Pay</a></li>
              <li><a href="/au-sales" className="text-gray-400 hover:text-white transition-colors">AU Sales</a></li>
              <li><a href="/au-shop" className="text-gray-400 hover:text-white transition-colors">AU Shop</a></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">0422 495755</li>
              <li>
                <h4 className="text-white mb-1">Email</h4>
                <a href="mailto:support@atts.in" className="text-gray-400 hover:text-white transition-colors">
                  support@atts.in
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex justify-end">
          <div className="flex items-center gap-4">
            <span className="text-gray-400">Ready To Begin?</span>
            <a
              href="/demo"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors"
            >
              Get a Demo
            </a>
          </div>
        </div>
        <div className=" flex items-center justify-center mt-4">
          <div className="opacity-75 bg-gradient-to-r from-transparent via-[#ffecc8] to-transparent h-[1px] w-full">
          </div>
        </div>
        <div>
          <p className="text-gray-400 text-center pt-4">
            Aurumm made by ATTS Technologies. All Rights Reserved© 2024.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;