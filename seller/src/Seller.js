import React from 'react';
import bgImage from './assets/coconuts.jpg'; 

function Seller() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-10"
      style={{
        backgroundImage: `url(${bgImage})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Soft lime-green overlay box */}
      <div className="w-[1000px] h-[500px] bg-gradient-to-b from-lime-400 to-lime-600 bg-opacity-50 backdrop-blur-lg rounded-xl shadow-xl p-8 flex flex-col items-center">
        
        <h2 className="text-5xl font-bold text-white mb-8 drop-shadow-md">Add Product</h2>

        <div className="w-full flex flex-1 gap-8">
          {/* Left: Form */}
          <div className="flex-1">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Product"
                className="w-full px-4 py-3 rounded bg-green-900 bg-opacity-70 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-lime-400 transition"
              />
              <input
                type="number"
                placeholder="Quantity"
                className="w-full px-4 py-3 rounded bg-green-900 bg-opacity-70 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-lime-400 transition"
              />
              <input
                type="number"
                placeholder="Price"
                className="w-full px-4 py-3 rounded bg-green-900 bg-opacity-70 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-lime-400 transition"
              />
              <textarea
                rows={3}
                placeholder="Add some description"
                className="w-full px-4 py-3 rounded bg-green-900 bg-opacity-70 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-lime-400 resize-none transition"
              />
            </div>
          </div>

          {/* Right: Upload Images */}
          <div className="w-[300px] h-full flex flex-col items-center justify-center border-2 border-dashed border-black rounded-lg text-white">
            <div className="text-center space-y-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 mx-auto stroke-current text-lime-300"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 10l5-5 5 5M12 5v12" />
              </svg>
              <p className="text-lg font-semibold">Upload Images</p>
              <button className="mt-4 px-4 py-2 bg-green-800 hover:bg-green-900 rounded transition">
                Choose File
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Seller;
