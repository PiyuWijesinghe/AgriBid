import React, { useState } from 'react';
import {
  Search,
  User,
  ShoppingBag,
  Gavel,
  Home,
  Menu,
  X,
  ArrowRight,
  TrendingUp,
  Star,
  MapPin,
  Newspaper,
  ShoppingCart
} from 'lucide-react';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3); // Sample cart count

  const productCategories = [
    {
      id: 1,
      name: 'Coconuts',
      image: 'https://images.unsplash.com/photo-1579370318445-d7f1383f9329?w=400&h=300&fit=crop',
      count: 45,
      trending: true,
      description: 'Fresh coconuts from tropical farms'
    },
    {
      id: 2,
      name: 'Corn',
      image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400&h=300&fit=crop',
      count: 32,
      trending: false,
      description: 'Premium quality corn varieties'
    },
    {
      id: 3,
      name: 'Chilli',
      image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=300&fit=crop',
      count: 28,
      trending: true,
      description: 'Spicy chillis for all cooking needs'
    },
    {
      id: 4,
      name: 'Green Gram',
      image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=300&fit=crop',
      count: 19,
      trending: false,
      description: 'Nutritious green gram varieties'
    },
    {
      id: 5,
      name: 'Rice',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop',
      count: 67,
      trending: true,
      description: 'Premium rice from certified farms'
    },
    {
      id: 6,
      name: 'Tomatoes',
      image: 'https://images.unsplash.com/photo-1546470427-227c0df1ae16?w=400&h=300&fit=crop',
      count: 53,
      trending: false,
      description: 'Fresh ripe tomatoes year-round'
    },
    {
      id: 7,
      name: 'Bananas',
      image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop',
      count: 41,
      trending: true,
      description: 'Sweet bananas from organic farms'
    },
    {
      id: 8,
      name: 'Mangoes',
      image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&h=300&fit=crop',
      count: 36,
      trending: false,
      description: 'Juicy mangoes in season'
    },
    {
      id: 9,
      name: 'Carrots',
      image: 'https://images.unsplash.com/photo-1572441710534-9e85e6901b12?w=400&h=300&fit=crop',
      count: 25,
      trending: false,
      description: 'Crunchy carrots from highland farms'
    },
    {
      id: 10,
      name: 'Potatoes',
      image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=400&h=300&fit=crop',
      count: 48,
      trending: true,
      description: 'Best quality potatoes from Nuwara Eliya'
    },
    {
      id: 11,
      name: 'Onions',
      image: 'https://images.unsplash.com/photo-1582515073490-39981397c445?w=400&h=300&fit=crop',
      count: 38,
      trending: false,
      description: 'Locally sourced red onions'
    },
    {
      id: 12,
      name: 'Pumpkins',
      image: 'https://images.unsplash.com/photo-1577308856960-bfcb0162ee36?w=400&h=300&fit=crop',
      count: 22,
      trending: true,
      description: 'Big and fresh pumpkins for cooking'
    }
  ];

  const filteredCategories = productCategories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const navigationItems = [
    { name: 'Home', icon: Home, active: false },
    { name: 'Products', icon: ShoppingBag, active: true },
    { name: 'Bidding', icon: Gavel, active: false },
    { name: 'Seller', icon: User, active: false },
    { name: 'Blog', icon: Newspaper, active: false }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Navigation Header */}
      <nav className="bg-gradient-to-r from-green-700 to-green-800 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="bg-green-600 text-white px-4 py-2 rounded-full font-bold text-lg">
                AgriBid.lk
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.name}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                      item.active
                        ? 'bg-green-600 text-white shadow-lg'
                        : 'text-green-100 hover:text-white hover:bg-green-600'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {item.name}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-4">
              {/* Cart Icon */}
              <button className="hidden md:block relative bg-green-600 hover:bg-green-500 text-white p-2 rounded-full transition-colors">
                <ShoppingCart className="w-6 h-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              
              {/* User Profile Icon */}
              <button className="hidden md:block bg-green-600 hover:bg-green-500 text-white p-2 rounded-full transition-colors">
                <User className="w-6 h-6" />
              </button>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden text-white p-2"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden bg-green-800 border-t border-green-600">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.name}
                      className={`flex items-center gap-2 w-full px-3 py-2 rounded-lg font-medium transition-all ${
                        item.active
                          ? 'bg-green-600 text-white'
                          : 'text-green-100 hover:text-white hover:bg-green-600'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      {item.name}
                    </button>
                  );
                })}
                
                {/* Mobile Cart and Profile */}
                <div className="flex gap-2 px-3 py-2">
                  <button className="relative bg-green-600 hover:bg-green-500 text-white p-2 rounded-full transition-colors flex-1 flex items-center justify-center gap-2">
                    <ShoppingCart className="w-5 h-5" />
                    <span className="text-sm font-medium">Cart</span>
                    {cartCount > 0 && (
                      <span className="bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1">
                        {cartCount}
                      </span>
                    )}
                  </button>
                  
                  <button className="bg-green-600 hover:bg-green-500 text-white p-2 rounded-full transition-colors flex-1 flex items-center justify-center gap-2">
                    <User className="w-5 h-5" />
                    <span className="text-sm font-medium">Profile</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Product <span className="text-green-600">Categories</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Discover fresh agricultural products from verified farmers across Sri Lanka
          </p>

          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-full focus:ring-4 focus:ring-green-100 focus:border-green-500 outline-none transition-all shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Products</p>
                <p className="text-3xl font-bold text-gray-900">
                  {productCategories.reduce((sum, cat) => sum + cat.count, 0)}
                </p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <ShoppingBag className="w-8 h-8 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Categories</p>
                <p className="text-3xl font-bold text-gray-900">{productCategories.length}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Active Farmers</p>
                <p className="text-3xl font-bold text-gray-900">2,547</p>
              </div>
              <div className="bg-orange-100 p-3 rounded-full">
                <User className="w-8 h-8 text-orange-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {category.trending && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    Trending
                  </div>
                )}

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-green-50 transition-colors flex items-center gap-2">
                    View Products
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                    {category.name}
                  </h3>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {category.count}
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-4">{category.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <MapPin className="w-4 h-4" />
                    <span>Sri Lanka</span>
                  </div>
                  <button className="text-green-600 font-medium text-sm hover:text-green-700 transition-colors flex items-center gap-1">
                    Browse
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No categories found</h3>
            <p className="text-gray-500">Try searching for a different product category</p>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Trading?</h2>
            <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of farmers and buyers who trust AgriBid.lk for their agricultural trading needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                Start Selling
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-green-600 text-white px-6 py-3 rounded-full font-bold text-xl inline-block mb-4">
              AgriBid.lk
            </div>
            <p className="text-gray-400 mb-4">Connecting farmers and buyers across Sri Lanka</p>
            <p className="text-gray-500 text-sm">© 2025 AgriBid.lk. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Products;
