import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, Star, Heart, Share2, MapPin, Clock, Eye, 
  ShoppingCart, MessageCircle, Phone, Shield, 
  Truck, Award, Filter, Grid, List, Search,
  User, Calendar, Package, CheckCircle,
  TrendingUp, DollarSign, Bookmark, MoreVertical
} from 'lucide-react';

export default function Productdetails() {
  const [selectedCrop, setSelectedCrop] = useState('corn');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('price-low');
  const [filterPrice, setFilterPrice] = useState([0, 1000]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Crop data
  const cropData = {
    corn: {
      name: 'Premium Corn',
      description: 'Fresh, sweet corn varieties from certified farms across Sri Lanka',
      image: '🌽',
      category: 'Grains & Cereals',
      totalProducts: 32,
      priceRange: 'Rs. 80 - Rs. 300',
      trending: true,
      products: [
        {
          id: 1,
          name: 'Sweet Yellow Corn',
          price: 120,
          originalPrice: 150,
          unit: 'per kg',
          seller: 'Green Valley Farm',
          location: 'Kandy',
          rating: 4.8,
          reviews: 124,
          image: '🌽',
          timeLeft: '2 days',
          currentBid: 115,
          isAuction: true,
          stock: 50,
          organic: true,
          featured: true
        },
        {
          id: 2,
          name: 'White Sweet Corn',
          price: 100,
          unit: 'per kg',
          seller: 'Farmer Silva',
          location: 'Nuwara Eliya',
          rating: 4.6,
          reviews: 89,
          image: '🌽',
          stock: 30,
          organic: false,
          featured: false
        },
        {
          id: 3,
          name: 'Baby Corn Fresh',
          price: 250,
          originalPrice: 300,
          unit: 'per 500g',
          seller: 'Highland Farms',
          location: 'Badulla',
          rating: 4.9,
          reviews: 67,
          image: '🌽',
          timeLeft: '5 hours',
          currentBid: 240,
          isAuction: true,
          stock: 25,
          organic: true,
          featured: true
        },
        {
          id: 4,
          name: 'Organic Yellow Corn',
          price: 180,
          unit: 'per kg',
          seller: 'Eco Farm Co.',
          location: 'Matale',
          rating: 4.7,
          reviews: 156,
          image: '🌽',
          stock: 40,
          organic: true,
          featured: false
        }
      ]
    },
    
    chilli: {
      name: 'Fresh Chilli',
      description: 'Spicy and flavorful chilli varieties for all your cooking needs',
      image: '🌶️',
      category: 'Spices & Herbs',
      totalProducts: 28,
      priceRange: 'Rs. 200 - Rs. 800',
      trending: true,
      products: [
        {
          id: 5,
          name: 'Red Hot Chilli',
          price: 400,
          originalPrice: 450,
          unit: 'per kg',
          seller: 'Spice Garden',
          location: 'Matara',
          rating: 4.9,
          reviews: 203,
          image: '🌶️',
          timeLeft: '1 day',
          currentBid: 380,
          isAuction: true,
          stock: 35,
          organic: true,
          featured: true
        },
        {
          id: 6,
          name: 'Green Chilli Fresh',
          price: 300,
          unit: 'per kg',
          seller: 'Chilli King',
          location: 'Galle',
          rating: 4.5,
          reviews: 167,
          image: '🌶️',
          stock: 60,
          organic: false,
          featured: false
        },
        {
          id: 7,
          name: 'Dried Red Chilli',
          price: 650,
          originalPrice: 700,
          unit: 'per 500g',
          seller: 'Dry Spice Co.',
          location: 'Colombo',
          rating: 4.8,
          reviews: 98,
          image: '🌶️',
          stock: 20,
          organic: true,
          featured: true
        },
        {
          id: 8,
          name: 'Chilli Powder Premium',
          price: 550,
          unit: 'per 250g',
          seller: 'Spice World',
          location: 'Kandy',
          rating: 4.7,
          reviews: 134,
          image: '🌶️',
          timeLeft: '3 days',
          currentBid: 520,
          isAuction: true,
          stock: 45,
          organic: true,
          featured: false
        }
      ]
    }
  };

  const currentCrop = cropData[selectedCrop];
  const [filteredProducts, setFilteredProducts] = useState(currentCrop.products);

  useEffect(() => {
    let products = [...currentCrop.products];
    
    // Sort products
    switch (sortBy) {
      case 'price-low':
        products.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        products.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        products.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        products.sort((a, b) => b.id - a.id);
        break;
      default:
        break;
    }

    // Filter by price
    products = products.filter(product => 
      product.price >= filterPrice[0] && product.price <= filterPrice[1]
    );

    setFilteredProducts(products);
  }, [sortBy, filterPrice, currentCrop]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const ProductCard = ({ product, isListView = false }) => (
    <div 
      className={`bg-white rounded-xl shadow-lg border overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1 cursor-pointer ${
        isListView ? 'flex' : ''
      }`}
      onClick={() => setSelectedProduct(product)}
    >
      {/* Product Image */}
      <div className={`bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center relative ${
        isListView ? 'w-32 h-32' : 'aspect-square'
      }`}>
        <span className={`${isListView ? 'text-4xl' : 'text-6xl'}`}>{product.image}</span>
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col space-y-1">
          {product.featured && (
            <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium">
              Featured
            </span>
          )}
          {product.organic && (
            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
              Organic
            </span>
          )}
          {product.originalPrice && (
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
              {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="absolute top-2 right-2 flex flex-col space-y-1">
          <button className="bg-white/80 hover:bg-white rounded-full p-2 transition-colors">
            <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
          </button>
          <button className="bg-white/80 hover:bg-white rounded-full p-2 transition-colors">
            <Share2 className="w-4 h-4 text-gray-600 hover:text-blue-500" />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className={`p-4 ${isListView ? 'flex-1' : ''}`}>
        <div className={`${isListView ? 'flex justify-between items-start' : ''}`}>
          <div className={`${isListView ? 'flex-1 mr-4' : ''}`}>
            <h3 className="font-semibold text-gray-900 mb-1">{product.name}</h3>
            <p className="text-sm text-gray-600 mb-2">by {product.seller}</p>
            
            <div className="flex items-center space-x-4 mb-2 text-sm text-gray-500">
              <span className="flex items-center">
                <MapPin className="w-3 h-3 mr-1" />
                {product.location}
              </span>
              <span className="flex items-center">
                <Package className="w-3 h-3 mr-1" />
                {product.stock} available
              </span>
            </div>

            <div className="flex items-center space-x-2 mb-3">
              <div className="flex items-center space-x-1">
                {renderStars(product.rating)}
                <span className="text-sm font-medium">{product.rating}</span>
              </div>
              <span className="text-sm text-gray-600">({product.reviews} reviews)</span>
            </div>
          </div>

          <div className={`${isListView ? 'text-right' : ''}`}>
            {/* Price */}
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-lg font-bold text-green-600">
                Rs. {product.price.toLocaleString()}
              </span>
              <span className="text-sm text-gray-600">{product.unit}</span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  Rs. {product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>

            {/* Auction Info */}
            {product.isAuction && (
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-2 mb-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-orange-700 font-medium">Current Bid:</span>
                  <span className="text-orange-900 font-bold">Rs. {product.currentBid}</span>
                </div>
                <div className="flex items-center space-x-1 text-xs text-orange-600 mt-1">
                  <Clock className="w-3 h-3" />
                  <span>{product.timeLeft} left</span>
                </div>
              </div>
            )}

            {/* Actions */}
            <div className={`flex space-x-2 ${isListView ? 'justify-end' : ''}`}>
              <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-3 rounded-lg hover:bg-gray-200 transition-colors text-sm">
                <ShoppingCart className="w-4 h-4 inline mr-1" />
                Add
              </button>
              <button className="flex-1 bg-green-600 text-white py-2 px-3 rounded-lg hover:bg-green-700 transition-colors text-sm">
                {product.isAuction ? 'Bid' : 'Buy'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Header */}
      <div className="bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-green-700 rounded-lg transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold">AgriBid.lk</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-green-700 rounded-lg transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button className="relative p-2 hover:bg-green-700 rounded-lg transition-colors">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </button>
              <button className="p-2 hover:bg-green-700 rounded-lg transition-colors">
                <User className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Crop Selection Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {Object.entries(cropData).map(([key, crop]) => (
              <button
                key={key}
                onClick={() => setSelectedCrop(key)}
                className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                  selectedCrop === key
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <span className="text-xl">{crop.image}</span>
                <span>{crop.name}</span>
                <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                  {crop.totalProducts}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Crop Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-2xl text-white">
                {currentCrop.image}
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{currentCrop.name}</h1>
                <p className="text-gray-600">{currentCrop.description}</p>
                <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                  <span className="flex items-center">
                    <Package className="w-4 h-4 mr-1" />
                    {currentCrop.totalProducts} products
                  </span>
                  <span className="flex items-center">
                    <DollarSign className="w-4 h-4 mr-1" />
                    {currentCrop.priceRange}
                  </span>
                  {currentCrop.trending && (
                    <span className="flex items-center bg-green-100 text-green-800 px-2 py-1 rounded-full">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Trending
                    </span>
                  )}
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <button className="p-2 text-gray-600 hover:text-green-600 transition-colors">
                <Bookmark className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-green-600 transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Filters & Controls */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                >
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest First</option>
                </select>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-gray-700">Price Range:</span>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={filterPrice[1]}
                  onChange={(e) => setFilterPrice([0, parseInt(e.target.value)])}
                  className="w-24"
                />
                <span className="text-sm text-gray-600">Rs. {filterPrice[1]}</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">{filteredProducts.length} products</span>
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${
                    viewMode === 'grid'
                      ? 'bg-green-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${
                    viewMode === 'list'
                      ? 'bg-green-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid/List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {viewMode === 'grid' ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} isListView={true} />
            ))}
          </div>
        )}
      </div>

      {/* Quick Stats */}
      <div className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-green-600">{currentCrop.totalProducts}</div>
              <div className="text-sm text-gray-600">Total Products</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">
                {filteredProducts.filter(p => p.isAuction).length}
              </div>
              <div className="text-sm text-gray-600">Live Auctions</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-600">
                {filteredProducts.filter(p => p.organic).length}
              </div>
              <div className="text-sm text-gray-600">Organic Products</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">
                {filteredProducts.filter(p => p.featured).length}
              </div>
              <div className="text-sm text-gray-600">Featured Items</div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900">{selectedProduct.name}</h2>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl p-8 text-center">
                  <span className="text-8xl">{selectedProduct.image}</span>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-3xl font-bold text-green-600">
                      Rs. {selectedProduct.price.toLocaleString()}
                      <span className="text-sm text-gray-600 ml-2">{selectedProduct.unit}</span>
                    </p>
                    {selectedProduct.originalPrice && (
                      <p className="text-lg text-gray-500 line-through">
                        Rs. {selectedProduct.originalPrice.toLocaleString()}
                      </p>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    {renderStars(selectedProduct.rating)}
                    <span className="font-medium">{selectedProduct.rating}</span>
                    <span className="text-gray-600">({selectedProduct.reviews} reviews)</span>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <p className="flex items-center">
                      <User className="w-4 h-4 mr-2 text-gray-500" />
                      Sold by {selectedProduct.seller}
                    </p>
                    <p className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                      {selectedProduct.location}
                    </p>
                    <p className="flex items-center">
                      <Package className="w-4 h-4 mr-2 text-gray-500" />
                      {selectedProduct.stock} items available
                    </p>
                  </div>
                  
                  {selectedProduct.isAuction && (
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                      <h3 className="font-semibold text-orange-900 mb-2">Live Auction</h3>
                      <p className="text-orange-700">
                        Current Bid: <span className="font-bold">Rs. {selectedProduct.currentBid}</span>
                      </p>
                      <p className="text-orange-600 text-sm">
                        <Clock className="w-3 h-3 inline mr-1" />
                        {selectedProduct.timeLeft} remaining
                      </p>
                    </div>
                  )}
                  
                  <div className="flex space-x-3 pt-4">
                    <button className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors">
                      Add to Cart
                    </button>
                    <button className="flex-1 bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors">
                      {selectedProduct.isAuction ? 'Place Bid' : 'Buy Now'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}