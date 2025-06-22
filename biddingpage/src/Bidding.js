import React, { useState } from 'react';
import { User } from 'lucide-react';
import bgImage from './assets/background.jpg';

const Bidding = () => {
  const [selectedBid, setSelectedBid] = useState(null);

  const ongoingBids = [
    { id: 1, name: 'Coconut Bid' },
    { id: 2, name: 'Mango Bid' },
    { id: 3, name: 'Corn Bid' },
    { id: 4, name: 'Garlic Bid' },
    { id: 5, name: 'Onion Bid' },
    { id: 6, name: 'Rice Bid' },
    { id: 7, name: 'Green Gram Bid' },
    { id: 8, name: 'Finger Millet Bid' },
    { id: 9, name: 'Potato Bid' },
    { id: 10, name: 'Chili Bid' },
    { id: 11, name: 'Tomato Bid' },
    { id: 12, name: 'Pumpkin Bid' }
  ];

  const handlePlaceBid = (bidId, bidName) => {
    setSelectedBid(bidName);
    console.log(`Placing bid for: ${bidName}`);
  };

  return (
    <div
       className="min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }} // Make sure bg.jpg is in public/
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8 bg-black bg-opacity-60 p-4 rounded-lg">
        <div className="text-white font-bold text-2xl">AgriBid.lk</div>
        <nav className="flex space-x-6">
          <a href="#" className="text-white hover:text-green-200 font-medium px-4 py-1 rounded">Home</a>
          <a href="#" className="text-white hover:text-green-200 font-medium px-4 py-1 rounded">Products</a>
          <a href="#" className="text-white hover:text-green-200 font-medium px-4 py-1 rounded">Bidding</a>
          <a href="#" className="text-white hover:text-green-200 font-medium px-4 py-1 rounded">Seller</a>
        </nav>
        <div className="bg-white rounded-full p-2">
          <User className="w-5 h-5 text-gray-600" />
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white bg-opacity-90 p-6 rounded-lg">
        {/* Ongoing Bids */}
        <div className="bg-white rounded-lg p-6 shadow max-h-[600px] overflow-y-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Ongoing Bids</h2>
          <div className="space-y-4">
            {ongoingBids.map((bid) => (
              <div key={bid.id} className="flex items-center gap-4">
                <div className="flex-1 bg-gray-100 rounded-lg p-4">
                  <span className="text-gray-800 font-medium">{bid.name}</span>
                </div>
                <button
                  onClick={() => handlePlaceBid(bid.id, bid.name)}
                  className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
                >
                  Place Bid +
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Bid History */}
        <div className="bg-white rounded-lg p-6 shadow">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Bid History</h2>
          <div className="flex items-center justify-center h-40">
            <div className="text-center">
              <p className="text-gray-600 text-lg">Choose an</p>
              <p className="text-gray-600 text-lg">ongoing bid</p>
            </div>
          </div>
        </div>
      </div>

      {/* Success Message */}
      {selectedBid && (
        <div className="fixed top-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg">
          Bid placed for {selectedBid}!
        </div>
      )}
    </div>
  );
};

export default Bidding;
