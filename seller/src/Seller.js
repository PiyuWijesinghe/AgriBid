import React, { useState } from 'react';
import { 
  Plus, Upload, Camera, Edit, Trash2, Eye, DollarSign, 
  Package, TrendingUp, Users, Clock, Star, MapPin,
  Save, X, CheckCircle, AlertCircle, BarChart3, ShoppingBag
} from 'lucide-react';

export default function Seller() {
  const [activeTab, setActiveTab] = useState('products');
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [productForm, setProductForm] = useState({
    name: '',
    category: '',
    quantity: '',
    price: '',
    description: '',
    location: '',
    images: []
  });

  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Fresh Coconuts',
      category: 'Fruits',
      price: 150,
      quantity: '100 pieces',
      location: 'Colombo',
      status: 'Active',
      views: 245,
      bids: 12,
      highestBid: 175,
      timeLeft: '2 days',
      images: ['🥥'],
      description: 'Fresh coconuts directly from our farm. Perfect for cooking and drinking. Organic and pesticide-free.'
    },
    {
      id: 2,
      name: 'Organic Rice',
      category: 'Grains',
      price: 180,
      quantity: '50 kg',
      location: 'Anuradhapura',
      status: 'Sold',
      views: 189,
      bids: 8,
      highestBid: 195,
      timeLeft: 'Ended',
      images: ['🌾'],
      description: 'Premium quality organic rice. Grown without chemicals. Rich in nutrients and perfect for daily meals.'
    },
    {
      id: 3,
      name: 'Mixed Vegetables',
      category: 'Vegetables',
      price: 200,
      quantity: '20 bundles',
      location: 'Nuwara Eliya',
      status: 'Pending',
      views: 67,
      bids: 3,
      highestBid: 210,
      timeLeft: '5 hours',
      images: ['🥬'],
      description: 'Fresh mixed vegetables including cabbage, carrots, beans. Harvested this morning from our highland farm.'
    }
  ]);

  const stats = {
    totalProducts: products.length,
    activeListings: products.filter(p => p.status === 'Active').length,
    totalRevenue: 12500,
    avgRating: 4.8
  };

  const handleInputChange = (e) => {
    setProductForm({
      ...productForm,
      [e.target.name]: e.target.value
    });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    // Simulate image upload - in real app would upload to server
    const newImages = files.map(file => URL.createObjectURL(file));
    setProductForm({
      ...productForm,
      images: [...productForm.images, ...newImages]
    });
  };

  const removeImage = (index) => {
    const newImages = productForm.images.filter((_, i) => i !== index);
    setProductForm({
      ...productForm,
      images: newImages
    });
  };

  const handleSaveProduct = () => {
    if (editingProduct) {
      // Update existing product
      setProducts(products.map(p => 
        p.id === editingProduct.id 
          ? { ...productForm, id: editingProduct.id, status: 'Active', views: p.views, bids: p.bids }
          : p
      ));
      setEditingProduct(null);
    } else {
      // Add new product
      const newProduct = {
        ...productForm,
        id: Date.now(),
        status: 'Active',
        views: 0,
        bids: 0,
        highestBid: productForm.price,
        timeLeft: '7 days'
      };
      setProducts([...products, newProduct]);
    }
    
    setShowAddProduct(false);
    setProductForm({
      name: '',
      category: '',
      quantity: '',
      price: '',
      description: '',
      location: '',
      images: []
    });
  };

  const handleEditProduct = (product) => {
    setProductForm(product);
    setEditingProduct(product);
    setShowAddProduct(true);
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Sold': return 'bg-blue-100 text-blue-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-2 rounded-xl">
                <span className="text-white font-bold text-xl">🌱</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Seller Dashboard</h1>
                <p className="text-sm text-gray-600">Manage your products and sales</p>
              </div>
            </div>
            <button
              onClick={() => setShowAddProduct(true)}
              className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-2 rounded-lg flex items-center space-x-2 hover:from-green-700 hover:to-emerald-700 transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>Add Product</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Products</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalProducts}</p>
              </div>
              <Package className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Listings</p>
                <p className="text-2xl font-bold text-gray-900">{stats.activeListings}</p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Revenue</p>
                <p className="text-2xl font-bold text-gray-900">Rs. {stats.totalRevenue.toLocaleString()}</p>
              </div>
              <DollarSign className="w-8 h-8 text-purple-600" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Avg Rating</p>
                <p className="text-2xl font-bold text-gray-900">{stats.avgRating}</p>
              </div>
              <Star className="w-8 h-8 text-yellow-600" />
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-xl shadow-sm border mb-8">
          <div className="border-b">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('products')}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'products'
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                My Products
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'analytics'
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Analytics
              </button>
            </nav>
          </div>

          {/* Products Tab */}
          {activeTab === 'products' && (
            <div className="p-6">
              <div className="grid gap-6">
                {products.map((product) => (
                  <div key={product.id} className="border rounded-xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start space-x-4">
                      {/* Product Image */}
                      <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center text-3xl">
                        {product.images[0] || '📦'}
                      </div>
                      
                      {/* Product Info */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                            <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <span className="flex items-center">
                                <MapPin className="w-3 h-3 mr-1" />
                                {product.location}
                              </span>
                              <span>{product.quantity}</span>
                              <span className="flex items-center">
                                <Eye className="w-3 h-3 mr-1" />
                                {product.views} views
                              </span>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(product.status)}`}>
                              {product.status}
                            </span>
                          </div>
                        </div>
                        
                        {/* Stats */}
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center space-x-6">
                            <div>
                              <p className="text-xs text-gray-500">Starting Price</p>
                              <p className="font-semibold">Rs. {product.price}</p>
                            </div>
                            {product.status === 'Active' && (
                              <>
                                <div>
                                  <p className="text-xs text-gray-500">Current Bid</p>
                                  <p className="font-semibold text-green-600">Rs. {product.highestBid}</p>
                                </div>
                                <div>
                                  <p className="text-xs text-gray-500">Time Left</p>
                                  <p className="font-semibold flex items-center">
                                    <Clock className="w-3 h-3 mr-1" />
                                    {product.timeLeft}
                                  </p>
                                </div>
                              </>
                            )}
                            <div>
                              <p className="text-xs text-gray-500">Total Bids</p>
                              <p className="font-semibold">{product.bids}</p>
                            </div>
                          </div>
                          
                          {/* Action Buttons */}
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => handleEditProduct(product)}
                              className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDeleteProduct(product.id)}
                              className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === 'analytics' && (
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-4 flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2 text-blue-600" />
                    Sales Performance
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">This Month</span>
                      <span className="font-semibold">Rs. 8,500</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Last Month</span>
                      <span className="font-semibold">Rs. 4,000</span>
                    </div>
                    <div className="flex justify-between text-green-600">
                      <span>Growth</span>
                      <span className="font-semibold">+112%</span>
                    </div>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-4 flex items-center">
                    <Users className="w-5 h-5 mr-2 text-green-600" />
                    Customer Engagement
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Views</span>
                      <span className="font-semibold">501</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Bids</span>
                      <span className="font-semibold">23</span>
                    </div>
                    <div className="flex justify-between text-blue-600">
                      <span>Conversion</span>
                      <span className="font-semibold">4.6%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Add/Edit Product Modal */}
      {showAddProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative p-6 bg-gradient-to-br from-green-500 to-emerald-600 text-white">
              <h2 className="text-2xl font-bold mb-2">
                {editingProduct ? 'Edit Product' : 'Add New Product'}
              </h2>
              <p className="text-green-100">Fill in the details to list your product</p>
              <button
                onClick={() => {
                  setShowAddProduct(false);
                  setEditingProduct(null);
                  setProductForm({
                    name: '',
                    category: '',
                    quantity: '',
                    price: '',
                    description: '',
                    location: '',
                    images: []
                  });
                }}
                className="absolute top-4 right-4 text-white hover:text-gray-200 text-2xl"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Basic Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Product Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={productForm.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="e.g., Fresh Coconuts"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    name="category"
                    value={productForm.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select Category</option>
                    <option value="Vegetables">Vegetables</option>
                    <option value="Fruits">Fruits</option>
                    <option value="Grains">Grains</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Organic">Organic</option>
                    <option value="Spices">Spices</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Quantity *
                  </label>
                  <input
                    type="text"
                    name="quantity"
                    value={productForm.quantity}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="e.g., 100 kg, 50 pieces"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Starting Price (Rs.) *
                  </label>
                  <input
                    type="number"
                    name="price"
                    value={productForm.price}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="e.g., 150"
                    required
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location *
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={productForm.location}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="e.g., Colombo, Western Province"
                    required
                  />
                </div>
              </div>
              
              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product Description *
                </label>
                <textarea
                  name="description"
                  value={productForm.description}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Describe your product quality, farming methods, special features, etc."
                  required
                ></textarea>
              </div>
              
              {/* Image Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product Images
                </label>
                
                {/* Current Images */}
                {productForm.images.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    {productForm.images.map((image, index) => (
                      <div key={index} className="relative group">
                        <div className="w-full h-24 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                          {typeof image === 'string' && image.length === 2 ? (
                            <span className="text-2xl">{image}</span>
                          ) : (
                            <img src={image} alt={`Product ${index + 1}`} className="w-full h-full object-cover rounded-lg" />
                          )}
                        </div>
                        <button
                          onClick={() => removeImage(index)}
                          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
                
                {/* Upload Area */}
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-green-400 transition-colors">
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <label htmlFor="image-upload" className="cursor-pointer">
                    <Camera className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-2">Upload Product Photos</p>
                    <p className="text-sm text-gray-500">Drag and drop or click to select images</p>
                    <button
                      type="button"
                      className="mt-4 bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-2 rounded-lg transition-colors"
                    >
                      Choose Files
                    </button>
                  </label>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  * Upload high-quality images to attract more buyers. Recommended: 800x600px or larger
                </p>
              </div>
              
              {/* Action Buttons */}
              <div className="flex gap-4 pt-4 border-t">
                <button
                  onClick={() => {
                    setShowAddProduct(false);
                    setEditingProduct(null);
                    setProductForm({
                      name: '',
                      category: '',
                      quantity: '',
                      price: '',
                      description: '',
                      location: '',
                      images: []
                    });
                  }}
                  className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveProduct}
                  className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all flex items-center justify-center space-x-2"
                >
                  <Save className="w-4 h-4" />
                  <span>{editingProduct ? 'Update Product' : 'List Product'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
