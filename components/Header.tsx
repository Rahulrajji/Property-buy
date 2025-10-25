
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
               <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <span className="ml-2 text-xl font-bold text-gray-800">HomelyAI</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition duration-150 ease-in-out">Buy</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition duration-150 ease-in-out">Rent</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition duration-150 ease-in-out">Sell</a>
             <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition duration-150 ease-in-out">About</a>
          </nav>
          <button className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-150 ease-in-out">
            Contact Agent
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
