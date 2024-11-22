import React from 'react';

const Body = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-16">
            <div className="max-w-6xl mx-auto px-4 pt-8 pb-16 mt-8">
                <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
                    See how Aurumm can transform your jewelry business
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl">
                    Ready to take the leap? Our team is ready to guide you through how Aurumm can elevate your store operations and streamline your processes.
                </p>
            </div>
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-12 pb-16">
                <div className="md:w-2/3 bg-white rounded-xl shadow-lg p-8">
                    <h4 className=''>Contact US</h4>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Enter your full name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Preferred Product
                            </label>
                            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                <option value="">--Select project type--</option>
                                <option value="au-pay">AU Pay</option>
                                <option value="au-sales">AU Sales</option>
                                <option value="au-shop">AU Shop</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Budget
                            </label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Enter your budget"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Message
                            </label>
                            <textarea
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32"
                                placeholder="Type your message"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full to-black bg-black text-white py-3 rounded-lg font-medium transition-all duration-200"
                        >
                            Submit
                        </button>
                    </form>
                </div>
                <div className="md:w-1/3 space-y-8">
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <h3 className="text-xl font-semibold mb-4">Why Choose Aurumm?</h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-gray-600">World-class technical solutions</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                                <p className="text-gray-600">Secure payment solutions</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <p className="text-gray-600">Fast implementation</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <h3 className="text-xl font-semibold mb-4">Contact Details</h3>
                        <div className="space-y-3">
                            <p className="text-gray-600">
                                <span className="font-medium">Email:</span> support@ofts.in
                            </p>
                            <p className="text-gray-600">
                                <span className="font-medium">Phone:</span> 0422 4957575
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;