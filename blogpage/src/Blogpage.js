import React, { useState } from 'react';
import { Search, Calendar, User, ArrowRight, Leaf, Sprout, TrendingUp, Users } from 'lucide-react';

const Blogpage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Sample blog data
  const blogPosts = [
    {
      id: 1,
      title: "Revolutionizing Agriculture Through Smart Bidding",
      excerpt: "Discover how AgribID is transforming the agricultural marketplace with innovative bidding solutions that connect farmers directly with buyers.",
      author: "Sarah Johnson",
      date: "2025-06-20",
      category: "technology",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=250&fit=crop",
      readTime: "5 min read",
      featured: true
    },
    {
      id: 2,
      title: "Sustainable Farming Practices for Modern Agriculture",
      excerpt: "Learn about the latest sustainable farming techniques that are helping farmers increase yield while protecting the environment.",
      author: "Michael Chen",
      date: "2025-06-18",
      category: "sustainability",
      image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=400&h=250&fit=crop",
      readTime: "7 min read",
      featured: false
    },
    {
      id: 3,
      title: "Market Trends: Q2 2025 Agricultural Outlook",
      excerpt: "Comprehensive analysis of current market trends and what they mean for farmers and agricultural businesses in the coming months.",
      author: "Emily Rodriguez",
      date: "2025-06-15",
      category: "market",
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=250&fit=crop",
      readTime: "6 min read",
      featured: true
    },
    {
      id: 4,
      title: "Building Stronger Farmer Communities",
      excerpt: "How digital platforms are fostering collaboration and knowledge sharing among farming communities worldwide.",
      author: "David Kim",
      date: "2025-06-12",
      category: "community",
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=250&fit=crop",
      readTime: "4 min read",
      featured: false
    },
    {
      id: 5,
      title: "Precision Agriculture: Data-Driven Farming",
      excerpt: "Exploring how IoT sensors, drones, and AI are enabling farmers to make more informed decisions about their crops.",
      author: "Lisa Thompson",
      date: "2025-06-10",
      category: "technology",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=250&fit=crop",
      readTime: "8 min read",
      featured: false
    },
    {
      id: 6,
      title: "From Farm to Market: Optimizing Supply Chains",
      excerpt: "Best practices for reducing waste and improving efficiency in agricultural supply chain management.",
      author: "Robert Wilson",
      date: "2025-06-08",
      category: "market",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=250&fit=crop",
      readTime: "5 min read",
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts', icon: Leaf, count: blogPosts.length },
    { id: 'technology', name: 'Technology', icon: Sprout, count: blogPosts.filter(post => post.category === 'technology').length },
    { id: 'market', name: 'Market', icon: TrendingUp, count: blogPosts.filter(post => post.category === 'market').length },
    { id: 'sustainability', name: 'Sustainability', icon: Leaf, count: blogPosts.filter(post => post.category === 'sustainability').length },
    { id: 'community', name: 'Community', icon: Users, count: blogPosts.filter(post => post.category === 'community').length }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              AgribID <span className="text-green-200">Blog</span>
            </h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Insights, trends, and innovations in modern agriculture and agricultural technology
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter Section */}
        <div className="mb-8 bg-white rounded-xl shadow-sm p-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedCategory === category.id
                        ? 'bg-green-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    {category.name}
                    <span className="bg-white bg-opacity-20 px-2 py-1 rounded-full text-xs">
                      {category.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Leaf className="text-green-600" />
              Featured Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(post.date)}
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium capitalize">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1 text-green-600 font-medium group-hover:gap-2 transition-all">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Regular Posts */}
        {regularPosts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Latest Articles
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group cursor-pointer"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {formatDate(post.date)}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium capitalize">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
            <p className="text-gray-500">
              Try adjusting your search terms or category filter
            </p>
          </div>
        )}
      </div>

      {/* Newsletter Signup */}
      <div className="bg-green-600 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated with AgribID
            </h2>
            <p className="text-green-100 mb-8 max-w-2xl mx-auto">
              Get the latest insights on agricultural technology, market trends, and farming innovations delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-green-300 outline-none"
              />
              <button className="bg-green-800 hover:bg-green-900 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogpage;