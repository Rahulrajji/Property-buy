
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gray-800">
      <div className="absolute inset-0">
        <img className="w-full h-full object-cover" src="https://picsum.photos/seed/hero/1200/600" alt="Modern house" />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-60" aria-hidden="true"></div>
      </div>
      <div className="relative max-w-4xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Find Your Dream Home</h1>
        <p className="mt-6 text-xl text-indigo-100">With the power of AI, your next home is just a conversation away.</p>
        <div className="mt-8 max-w-xl mx-auto">
          <form className="sm:flex">
            <label htmlFor="search" className="sr-only">Search</label>
            <input
              type="text"
              name="search"
              id="search"
              className="w-full py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
              placeholder="Enter a city, neighborhood, or address"
            />
            <button
              type="submit"
              className="mt-3 w-full sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0 bg-blue-600 hover:bg-blue-700 border border-transparent rounded-md py-3 px-6 flex items-center justify-center text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
