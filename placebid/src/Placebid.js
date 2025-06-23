import React, { useState, useEffect } from 'react';
import { User, ChevronDown } from 'lucide-react';
import bgImage from './assets/corn.jpg'; // ✅ Make sure corn.jpg is in src/assets/

const Placebid = () => {
  const [selectedBid, setSelectedBid] = useState('');
  const [bidderName, setBidderName] = useState('');
  const [bidAmount, setBidAmount] = useState('');
  const [description, setDescription] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [timer, setTimer] = useState({ hours: 1, minutes: 22, seconds: 15 });

  const ongoingBids = [
    'Coconut Bid', 'Corn Bid', 'Banana Bid', 'Rice Bid', 'Wheat Bid',
    'Mango Bid', 'Garlic Bid', 'Potato Bid', 'Onion Bid', 'Tomato Bid'
  ];

  const bidHistory = [
    { name: 'Chamidu', amount: 52, isHighest: true },
    { name: 'Piyumi', amount: 51, isHighest: false },
    { name: 'Randula', amount: 50, isHighest: false },
    { name: 'Diyath', amount: 48, isHighest: false },
    { name: 'Sahan', amount: 43, isHighest: false },
    { name: 'Nimasha', amount: 39, isHighest: false },
    { name: 'Kavindu', amount: 36, isHighest: false },
    { name: 'Thilini', amount: 33, isHighest: false }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmitBid = (e) => {
    e.preventDefault();
    console.log('Bid submitted:', { selectedBid, bidderName, bidAmount, description });
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white font-sans"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* ✅ Adjusted blur layer to show more of the background image */}
      <div className="backdrop-blur-sm bg-black/20 min-h-screen p-8">
        {/* Top Navbar */}
        <div className="flex items-center justify-between mb-10 bg-black/40 p-4 rounded-lg shadow">
          <div className="text-xl font-bold">AgriBid.lk</div>
          <nav className="flex space-x-6">
            <a href="#" className="hover:text-green-200 font-medium px-4 py-1 rounded">Home</a>
            <a href="#" className="hover:text-green-200 font-medium px-4 py-1 rounded">Products</a>
            <a href="#" className="hover:text-green-200 font-medium px-4 py-1 rounded">Bidding</a>
            <a href="#" className="hover:text-green-200 font-medium px-4 py-1 rounded">Seller</a>
          </nav>
          <div className="bg-white p-2 rounded-full">
            <User className="text-gray-700 w-5 h-5" />
          </div>
        </div>

        {/* Page Title */}
        <h1 className="text-4xl font-bold mb-8 text-white">Place Your Bid</h1>

        {/* Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Bid Form */}
          <div className="space-y-6 bg-white/20 backdrop-blur-lg p-6 rounded-xl shadow-lg">
            {/* Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-full bg-gray-700 p-4 rounded-lg flex items-center justify-between hover:bg-gray-600"
              >
                <span>{selectedBid || 'Choose an ongoing bid'}</span>
                <ChevronDown className="w-5 h-5" />
              </button>
              {dropdownOpen && (
                <div className="absolute top-full left-0 right-0 bg-gray-700 mt-1 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                  {ongoingBids.map((bid, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSelectedBid(bid);
                        setDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-600"
                    >
                      {bid}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <input
              type="text"
              placeholder="Your Name"
              value={bidderName}
              onChange={(e) => setBidderName(e.target.value)}
              className="w-full bg-gray-700 p-4 rounded-lg placeholder-gray-300 text-white focus:ring-2 focus:ring-green-400 outline-none"
            />

            <input
              type="number"
              placeholder="Bid Amount"
              value={bidAmount}
              onChange={(e) => setBidAmount(e.target.value)}
              className="w-full bg-gray-700 p-4 rounded-lg placeholder-gray-300 text-white focus:ring-2 focus:ring-green-400 outline-none"
            />

            <textarea
              rows={4}
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full bg-gray-700 p-4 rounded-lg placeholder-gray-300 text-white resize-none focus:ring-2 focus:ring-green-400 outline-none"
            />

            <button
              onClick={handleSubmitBid}
              className="w-full bg-teal-500 hover:bg-teal-600 p-4 rounded-lg font-medium transition"
            >
              Submit Bid
            </button>
          </div>

          {/* Bid History */}
          <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-white">Bid History</h2>
            <div className="space-y-3 max-h-80 overflow-y-auto pr-2">
              {bidHistory.map((bid, index) => (
                <div
                  key={index}
                  className="bg-gray-700 rounded-lg p-4 flex items-center justify-between"
                >
                  <div>
                    <div className="font-medium">Name: {bid.name}</div>
                    <div className="text-gray-300">Amount: {bid.amount}</div>
                  </div>
                  {bid.isHighest && (
                    <div className="bg-brown-600 text-white px-3 py-1 rounded text-sm">
                      Highest
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Timer */}
            <div className="mt-6 text-center">
              <div className="text-sm text-gray-300">Remaining Time</div>
              <div className="font-mono text-xl mt-1">
                {String(timer.hours).padStart(2, '0')}:
                {String(timer.minutes).padStart(2, '0')}:
                {String(timer.seconds).padStart(2, '0')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Placebid;
