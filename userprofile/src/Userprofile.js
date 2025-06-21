import React from 'react';
import bgImage from './assets/nature.jpg';

function Userprofile() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-black"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        className="w-[1000px] h-[650px] rounded-xl flex p-8 shadow-lg backdrop-blur-md"
        style={{
          background: 'rgba(177, 166, 125, 0.75)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5)',
          borderRadius: '1rem',
        }}
      >
        {/* Left Section */}
        <div className="flex-1 text-white pr-6">
          <h1 className="text-5xl font-bold mb-8">Profile</h1>

          <div className="mb-6">
            <label className="block mb-2">Name:</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-[400px] px-5 py-2 rounded bg-[#8B5E3C] bg-opacity-90 text-white placeholder:text-gray-300"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2">Email:</label>
            <input
              type="email"
              placeholder="Your email"
              className="w-[400px] px-5 py-2 rounded bg-[#8B5E3C] bg-opacity-90 text-white placeholder:text-gray-300"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2">Role:</label>
            <input
              type="text"
              placeholder="Buyer / Seller"
              className="w-[400px] px-5 py-2 rounded bg-[#8B5E3C] bg-opacity-90 text-white placeholder:text-gray-300"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-semibold">Notifications</label>
            <select className="w-[400px] px-5 py-2 rounded bg-[#8B5E3C] bg-opacity-90 text-white">
              <option>On</option>
              <option>Off</option>
            </select>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-[520px] h-full bg-gray-800 bg-opacity-90 text-white rounded-lg flex items-center justify-center p-8">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Order history</h2>
            <p>No previous orders.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Userprofile;
