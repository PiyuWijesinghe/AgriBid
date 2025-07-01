import React, { useState, useEffect } from 'react';
import { User, Clock, TrendingUp, Leaf, Award, Bell, MapPin, Gavel, Star, ChevronRight } from 'lucide-react';

const Bidding = () => {
  const [selectedBid, setSelectedBid] = useState(null);
  const [bidAmount, setBidAmount] = useState('');
  const [animatedCounters, setAnimatedCounters] = useState({});

  const ongoingBids = [
    { id: 1, name: 'Coconut Bid', currentPrice: 'Rs. 85/kg', timeLeft: '2h 45m', bidders: 12, image: '🥥', location: 'Colombo', quality: 'Premium', trend: '+5%' },
    { id: 2, name: 'Mango Bid', currentPrice: 'Rs. 120/kg', timeLeft: '1h 30m', bidders: 8, image: '🥭', location: 'Kandy', quality: 'Grade A', trend: '+8%' },
    { id: 3, name: 'Corn Bid', currentPrice: 'Rs. 65/kg', timeLeft: '4h 15m', bidders: 15, image: '🌽', location: 'Anuradhapura', quality: 'Fresh', trend: '+3%' },
    { id: 4, name: 'Garlic Bid', currentPrice: 'Rs. 450/kg', timeLeft: '3h 20m', bidders: 6, image: '🧄', location: 'Nuwara Eliya', quality: 'Organic', trend: '+12%' },
    { id: 5, name: 'Onion Bid', currentPrice: 'Rs. 95/kg', timeLeft: '5h 10m', bidders: 20, image: '🧅', location: 'Jaffna', quality: 'Premium', trend: '+7%' },
    { id: 6, name: 'Rice Bid', currentPrice: 'Rs. 180/kg', timeLeft: '6h 30m', bidders: 25, image: '🌾', location: 'Polonnaruwa', quality: 'Basmati', trend: '+4%' },
    { id: 7, name: 'Green Gram Bid', currentPrice: 'Rs. 210/kg', timeLeft: '2h 55m', bidders: 9, image: '🫘', location: 'Matara', quality: 'Organic', trend: '+6%' }
  ];

  const bidHistory = [
    { id: 1, product: 'Coconut', amount: 'Rs. 82/kg', status: 'Won', date: '2025-06-25', profit: '+Rs. 150' },
    { id: 2, product: 'Rice', amount: 'Rs. 175/kg', status: 'Lost', date: '2025-06-24', profit: '-' },
    { id: 3, product: 'Mango', amount: 'Rs. 115/kg', status: 'Won', date: '2025-06-23', profit: '+Rs. 80' }
  ];

  const handlePlaceBid = (bidId) => {
    setSelectedBid(bidId);
  };

  const submitBid = () => {
    if (bidAmount && selectedBid) {
      alert(`Bid of Rs. ${bidAmount} placed successfully!`);
      setBidAmount('');
      setSelectedBid(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-lime-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-green-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-64 h-64 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-40 w-64 h-64 bg-lime-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header className="relative bg-white/80 backdrop-blur-lg shadow-2xl border-b border-green-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <Leaf className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-black bg-gradient-to-r from-green-700 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  AgriBid.lk
                </h1>
                <p className="text-sm text-gray-500 font-medium">Sri Lanka's Premier Agricultural Marketplace</p>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-10">
              <a href="#" className="text-green-700 hover:text-green-800 font-semibold transition-all duration-300 relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-green-600 transform scale-x-100 group-hover:scale-x-110 transition-transform"></span>
              </a>
              <a href="#" className="text-gray-600 hover:text-green-700 font-semibold transition-all duration-300 relative group">
                Products
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </a>
              <a href="#" className="text-gray-600 hover:text-green-700 font-semibold transition-all duration-300 relative group">
                Bidding
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </a>
              <a href="#" className="text-gray-600 hover:text-green-700 font-semibold transition-all duration-300 relative group">
                Seller
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </a>
            </nav>

            <div className="flex items-center space-x-6">
              <div className="relative">
                <Bell className="w-7 h-7 text-gray-600 hover:text-green-700 cursor-pointer transition-all duration-300 hover:scale-110" />
                <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">3</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <User className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Ongoing Bids Section */}
          <div className="lg:col-span-2">
            <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 px-10 py-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
                <div className="relative">
                  <h2 className="text-3xl font-bold text-white flex items-center">
                    <Gavel className="w-8 h-8 mr-4" />
                    Live Auctions
                  </h2>
                  <p className="text-green-100 mt-3 text-lg">Bid on premium agricultural products from across Sri Lanka</p>
                </div>
              </div>
              
              <div className="p-8 space-y-6">
                {ongoingBids.map((bid, index) => (
                  <div key={bid.id} className="group bg-gradient-to-r from-white via-green-50/50 to-emerald-50/30 rounded-2xl p-8 border border-green-100/50 hover:shadow-2xl transition-all duration-500 hover:border-green-300/70 hover:-translate-y-1 relative overflow-hidden">
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-100/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    
                    <div className="relative flex items-center justify-between">
                      <div className="flex items-center space-x-6">
                        <div className="text-5xl transform group-hover:scale-110 transition-transform duration-300">
                          {bid.image}
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <h3 className="text-2xl font-bold text-gray-800 group-hover:text-green-700 transition-colors">{bid.name}</h3>
                            <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full">{bid.quality}</span>
                          </div>
                          
                          <div className="flex items-center space-x-6 text-sm">
                            <span className="flex items-center text-green-600 font-semibold">
                              <TrendingUp className="w-4 h-4 mr-2" />
                              {bid.currentPrice}
                              <span className="ml-2 text-emerald-500">({bid.trend})</span>
                            </span>
                            <span className="flex items-center text-orange-500 font-medium">
                              <Clock className="w-4 h-4 mr-2" />
                              {bid.timeLeft}
                            </span>
                            <span className="flex items-center text-blue-600 font-medium">
                              <User className="w-4 h-4 mr-2" />
                              {bid.bidders} bidders
                            </span>
                            <span className="flex items-center text-gray-600 font-medium">
                              <MapPin className="w-4 h-4 mr-2" />
                              {bid.location}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <button
                        onClick={() => handlePlaceBid(bid.id)}
                        className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 hover:from-green-600 hover:via-emerald-600 hover:to-teal-600 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2 group"
                      >
                        <span>Place Bid</span>
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-8">
            {/* Bid History */}
            <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 px-8 py-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                <div className="relative">
                  <h2 className="text-xl font-bold text-white flex items-center">
                    <Award className="w-6 h-6 mr-3" />
                    Bid History
                  </h2>
                </div>
              </div>
              
              <div className="p-6">
                {bidHistory.length > 0 ? (
                  <div className="space-y-4">
                    {bidHistory.map((bid) => (
                      <div key={bid.id} className="border-l-4 border-green-500 bg-gradient-to-r from-gray-50 to-green-50/50 p-5 rounded-r-xl hover:shadow-lg transition-all duration-300">
                        <div className="flex justify-between items-start">
                          <div className="space-y-1">
                            <h4 className="font-bold text-gray-800 text-lg">{bid.product}</h4>
                            <p className="text-green-600 font-semibold">{bid.amount}</p>
                            <p className="text-xs text-gray-500">{bid.date}</p>
                            {bid.profit !== '-' && (
                              <p className="text-emerald-600 text-sm font-medium">{bid.profit}</p>
                            )}
                          </div>
                          <div className="flex flex-col items-end space-y-2">
                            <span className={`px-4 py-2 rounded-full text-sm font-bold shadow-lg ${
                              bid.status === 'Won' 
                                ? 'bg-gradient-to-r from-green-400 to-emerald-500 text-white' 
                                : 'bg-gradient-to-r from-red-400 to-pink-500 text-white'
                            }`}>
                              {bid.status}
                            </span>
                            {bid.status === 'Won' && (
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <div className="text-8xl mb-6 animate-bounce">📊</div>
                    <p className="text-gray-500 text-xl font-semibold">Start Your Bidding Journey</p>
                    <p className="text-gray-400 mt-2">Your bid history will appear here</p>
                  </div>
                )}
              </div>
            </div>

            {/* Enhanced Quick Stats */}
            <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/50 p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
                <TrendingUp className="w-6 h-6 mr-3 text-green-600" />
                Your Stats
              </h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                  <span className="text-gray-700 font-semibold">Active Bids</span>
                  <span className="font-black text-2xl bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">{ongoingBids.length}</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
                  <span className="text-gray-700 font-semibold">Bids Won</span>
                  <span className="font-black text-2xl bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">2</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                  <span className="text-gray-700 font-semibold">Success Rate</span>
                  <span className="font-black text-2xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">67%</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl">
                  <span className="text-gray-700 font-semibold">Total Savings</span>
                  <span className="font-black text-2xl bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">Rs. 2,340</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Bid Modal */}
      {selectedBid && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-10 max-w-lg w-full shadow-2xl border border-white/50 transform animate-in zoom-in duration-300">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                <Gavel className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">
                Place Your Bid
              </h3>
              <p className="text-gray-600 text-lg">
                Bidding on <span className="font-semibold text-green-600">{ongoingBids.find(b => b.id === selectedBid)?.name}</span>
              </p>
            </div>
            
            <div className="mb-8">
              <label className="block text-sm font-bold text-gray-700 mb-3">
                Your Bid Amount (Rs. per kg)
              </label>
              <input
                type="number"
                value={bidAmount}
                onChange={(e) => setBidAmount(e.target.value)}
                placeholder="Enter your bid amount"
                className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-green-500/20 focus:border-green-500 transition-all duration-300 text-lg font-semibold"
              />
              <p className="text-sm text-gray-500 mt-2">
                Current highest bid: {ongoingBids.find(b => b.id === selectedBid)?.currentPrice}
              </p>
            </div>
            
            <div className="flex space-x-4">
              <button
                onClick={() => setSelectedBid(null)}
                className="flex-1 px-8 py-4 border-2 border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-300 font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={submitBid}
                className="flex-1 px-8 py-4 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 text-white rounded-xl hover:from-green-600 hover:via-emerald-600 hover:to-teal-600 transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Submit Bid
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bidding;