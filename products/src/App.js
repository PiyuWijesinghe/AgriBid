import React from 'react';
import coconutImg from './assets/coconut.jpg';
import cornImg from './assets/corn.jpg';
import chilliImg from './assets/chilli.jpg';
import greenGramImg from './assets/greengrams.jpg';
import riceImg from './assets/rice.jpg';
import tomatoImg from './assets/tomato.jpg';
import bananaImg from './assets/banana.jpg';
import mangoImg from './assets/mango.jpg';

const products = [
  { name: 'Coconuts', image: coconutImg },
  { name: 'Corn', image: cornImg },
  { name: 'Chilli', image: chilliImg },
  { name: 'Green Gram', image: greenGramImg },
  { name: 'Rice', image: riceImg },
  { name: 'Tomatoes', image: tomatoImg },
  { name: 'Bananas', image: bananaImg },
  { name: 'Mangoes', image: mangoImg },
];

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-800 to-green-400 text-white font-sans px-6 py-8">
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center mb-10">
        <div className="text-2xl font-extrabold">AgriBid.lk</div>
        <ul className="flex gap-8 text-lg font-medium">
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

      {/* Product Section */}
      <section>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold">Products</h2>
          <input
            type="text"
            placeholder="Search here"
            className="px-4 py-2 rounded-md text-black w-60 focus:outline-none shadow-md"
          />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white/20 backdrop-blur-md p-4 rounded-xl shadow-lg text-center hover:scale-105 transition duration-200"
            >
              <img
                src={product.image}
                alt={product.name}
                className="rounded-lg w-full h-28 object-cover mb-3"
              />
              <p className="text-white font-semibold">{product.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default App;
