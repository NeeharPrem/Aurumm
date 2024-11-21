import React from 'react'

function Header() {
    return (
        <div className="flex flex-row justify-between items-center text-xl p-4 w-full bg-white/30 backdrop-blur-md shadow-lg">
            <div>
                <p>Arumm</p>
            </div>

            <div className="flex flex-row gap-5 items-center">
                <p className="hover:text-gray-500 cursor-pointer">Home</p>
                <p className="hover:text-gray-500 cursor-pointer">Product & Features</p>
                <p className="hover:text-gray-500 cursor-pointer">Contact</p>
                <button className="bg-black text-white rounded-full hover:rounded-l-full hover:rounded-br-none px-4 py-2">
                    <span className="text-md">Get Demo</span>
                </button>
            </div>
        </div>
    )
}

export default Header;