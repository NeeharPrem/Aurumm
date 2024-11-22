import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png'

function Header() {
    const [Dropdown, setDropdown] = useState(false);
    const navigate = useNavigate();

    const handleMouseOut = () => {
        setTimeout(() => {
            setDropdown(false);
        }, 400);
    };

    const NavItem = ({ children, hasDropdown }) => (
        <div className={`relative px-4 py-2 rounded-full transition-all duration-200 hover:bg-white/10 ${hasDropdown ? 'cursor-pointer' : ''}`}>
            {children}
        </div>
    );

    return (
        <div className="fixed top-0 left-0 w-full bg-white/30 backdrop-blur-md shadow-lg z-50 text-xl p-4">
            <div className="flex flex-row justify-between items-center px-2 pt-2">
                <div>
                    <p
                        onClick={() => navigate('/')}
                        className="text-3xl font-extrabold cursor-pointer animate-fadeInSlide"
                    >
                        Aurumm
                    </p>
                    {/* <img onClick={() => navigate('/')} src={logo} /> */}
                </div>

                <div className="flex flex-row gap-5 items-center relative">
                    <NavItem>
                        <p onClick={()=>navigate('/')} className="cursor-pointer hover:text-gray-500">Home</p>
                    </NavItem>

                    <div
                        className="relative"
                        onMouseEnter={() => setDropdown(true)}
                        onMouseLeave={handleMouseOut}
                    >
                        <NavItem hasDropdown>
                            <p className="hover:text-gray-500">Product & Features</p>
                        </NavItem>

                        {Dropdown && (
                            <div className="absolute top-full text-center text-white left-0 mt-4 bg-black/90 shadow-2xl rounded-xl py-3 px-3 w-56 border border-white/10">
                                <p
                                    onClick={() => navigate('/aupay')}
                                    className="px-4 py-2 text-sm hover:bg-white/30  hover:rounded-lg cursor-pointer"
                                >
                                    AU Pay
                                </p>
                                <p className="px-4 py-2 text-sm hover:bg-white/30 hover:rounded-lg cursor-pointer">AU Sales</p>
                                <p className="px-4 py-2 text-sm hover:bg-white/30 hover:rounded-lg cursor-pointer">AU Shop</p>
                            </div>
                        )}
                    </div>

                    <NavItem>
                        <p onClick={()=>navigate('/contactus')} className="cursor-pointer hover:text-gray-500">Contact</p>
                    </NavItem>

                    <button className="bg-black text-white rounded-full hover:rounded-l-full hover:rounded-br-none px-4 py-2 transition-all duration-200">
                        <span className="text-md">Get Demo</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Header;