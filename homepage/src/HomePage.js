import React from 'react';
import coconutImg from './assets/coconuts.jpg';
import cornImg from './assets/corn.jpg';
import chilliImg from './assets/chilli.jpg';
import cornFieldImg from './assets/sideimage.jpg'; // Right-side image

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-800 to-green-400 text-white font-sans">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6 bg-green-900 bg-opacity-30 rounded-b-lg shadow-md">
        <div className="text-2xl font-extrabold tracking-wide">AgriBid.lk</div>
        <ul className="flex gap-8 font-medium text-lg">
          <li className="hover:underline cursor-pointer">Home</li>
          <li className="hover:underline cursor-pointer">Products</li>
          <li className="hover:underline cursor-pointer">Bidding</li>
          <li className="hover:underline cursor-pointer">Seller</li>
        </ul>
        <div className="flex gap-5 text-xl">
          <span className="cursor-pointer">🛒</span>
          <span className="cursor-pointer">👤</span>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12 px-8 py-16">
        {/* Left Content */}
        <div className="text-center lg:text-left max-w-xl w-full">
          <h1 className="text-5xl font-extrabold mb-3">Hello, Piyumi 👋</h1>
          <p className="text-lg text-pink-100 font-medium mb-6">
            Ready <span className="text-white font-semibold">to shop today?</span>
          </p>

          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Products</h2>
            <span className="text-sm cursor-pointer hover:underline">More →</span>
          </div>

          {/* Product Cards - Larger & Centered */}
          <div className="flex gap-6 justify-center lg:justify-start mb-8 flex-wrap">
            <div className="bg-white/30 backdrop-blur-md p-4 rounded-xl text-center w-36 shadow-lg hover:scale-105 transition duration-200">
              <img src={coconutImg} alt="Coconuts" className="rounded-lg w-full h-28 object-cover" />
              <p className="mt-3 text-white font-semibold text-sm">Coconuts</p>
            </div>
            <div className="bg-white/30 backdrop-blur-md p-4 rounded-xl text-center w-36 shadow-lg hover:scale-105 transition duration-200">
              <img src={cornImg} alt="Corn" className="rounded-lg w-full h-28 object-cover" />
              <p className="mt-3 text-white font-semibold text-sm">Corn</p>
            </div>
            <div className="bg-white/30 backdrop-blur-md p-4 rounded-xl text-center w-36 shadow-lg hover:scale-105 transition duration-200">
              <img src={chilliImg} alt="Chilli" className="rounded-lg w-full h-28 object-cover" />
              <p className="mt-3 text-white font-semibold text-sm">Chilli</p>
            </div>
          </div>

          <p className="font-semibold text-white mb-6 leading-relaxed text-base">
            Buy or Sell Crops Directly<br />
            <span className="text-yellow-200">No Middlemen, No Confusion!</span>
          </p>

          <button className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-md font-bold shadow-md transition">
            Learn More
          </button>
        </div>

        {/* Right-side Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={cornFieldImg}
            alt="Corn Field"
            className="rounded-2xl shadow-2xl w-full object-cover h-[360px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
