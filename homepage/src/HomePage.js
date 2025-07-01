import React, { useState, useEffect } from 'react';
import { ShoppingCart, User, ChevronRight, Leaf, Users, TrendingUp, Star } from 'lucide-react';

export default function Homeage() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const products = [
    {
      name: 'Coconuts',
      image: '/api/placeholder/300/200',
      price: 'LKR 45/piece',
      description: 'Fresh coconuts directly from farms'
    },
    {
      name: 'Corn',
      image: '/api/placeholder/300/200',
      price: 'LKR 120/kg',
      description: 'Golden sweet corn, freshly harvested'
    },
    {
      name: 'Chilli',
      image: '/api/placeholder/300/200',
      price: 'LKR 800/kg',
      description: 'Spicy red chilli peppers'
    },
    {
      name: 'Rice',
      image: '/api/placeholder/300/200',
      price: 'LKR 180/kg',
      description: 'Premium quality rice varieties'
    },
    {
      name: 'Vegetables',
      image: '/api/placeholder/300/200',
      price: 'LKR 65/kg',
      description: 'Fresh mixed vegetables'
    },
    {
      name: 'Fruits',
      image: '/api/placeholder/300/200',
      price: 'LKR 200/kg',
      description: 'Seasonal tropical fruits'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-full font-bold text-lg">
                AgriBid.lk
              </div>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Home</a>
              <a href="#products" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Products</a>
              <a href="#bidding" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Bidding</a>
              <a href="#seller" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Seller</a>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-700 hover:text-green-600 transition-colors">
                <ShoppingCart size={24} />
              </button>
              <button className="p-2 text-gray-700 hover:text-green-600 transition-colors">
                <User size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        id="hero"
        className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-600 via-emerald-600 to-green-700 text-white relative overflow-hidden"
      >
        <div 
          className="absolute inset-0 bg-black/10"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Hello, Piyumi 
                <span className="inline-block animate-bounce ml-2">👋</span>
              </h1>
              <p className="text-xl mb-8 text-green-100">
                Ready <span className="text-yellow-300 font-semibold">to</span> shop today?
              </p>
              
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Buy or Sell Crops Directly</h2>
                <p className="text-lg text-green-100 mb-6">No Middlemen, No Confusion!</p>
                <button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                  <span>Learn More</span>
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
            
            <div className={`transition-all duration-1000 delay-300 ${isVisible.hero ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                  <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-6 mb-6">
                    <div className="flex items-center justify-center h-40">
                      <Leaf size={80} className="text-white animate-pulse" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Farm Fresh Products</h3>
                  <p className="text-green-100">Direct from farmers to your table</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.products ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Fresh Products</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the finest agricultural products sourced directly from local farmers
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden ${
                  isVisible.products ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="h-48 bg-gradient-to-br from-green-400 to-emerald-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <Leaf size={40} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-3">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-green-600">{product.price}</span>
                    <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 mx-auto">
              <span>View All Products</span>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-br from-emerald-50 to-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose AgriBid.lk?</h2>
            <p className="text-xl text-gray-600">Connecting farmers and buyers directly</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Direct Connection",
                description: "Connect directly with farmers and buyers without intermediaries"
              },
              {
                icon: TrendingUp,
                title: "Fair Pricing",
                description: "Get the best prices through our transparent bidding system"
              },
              {
                icon: Star,
                title: "Quality Assured",
                description: "All products are verified for quality and freshness"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Trading?</h2>
          <p className="text-xl mb-8 text-green-100">
            Join thousands of farmers and buyers who trust AgriBid.lk for their agricultural needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              Start Selling
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              Start Buying
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full font-bold text-lg mb-4 inline-block">
                AgriBid.lk
              </div>
              <p className="text-gray-400">
                Connecting Sri Lankan farmers with buyers through technology
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Products</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Bidding</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sellers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <p className="text-gray-400 mb-4">
                Follow us for updates and agricultural tips
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 AgriBid.lk. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}