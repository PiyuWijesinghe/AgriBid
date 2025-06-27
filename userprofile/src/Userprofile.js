import React, { useState } from 'react';
import { 
  User, Mail, Phone, MapPin, Edit, Save, X, Camera, 
  ShoppingBag, Heart, Star, Clock, Package, TrendingUp,
  Settings, Bell, Shield, CreditCard, LogOut, Eye,
  Calendar, Award, Truck, MessageCircle, Download
} from 'lucide-react';

export default function Userprofile() {
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [showNotifications, setShowNotifications] = useState(true);
  const [profileData, setProfileData] = useState({
    firstName: 'Kamal',
    lastName: 'Perera',
    email: 'kamal.perera@gmail.com',
    phone: '+94 77 123 4567',
    address: '123 Main Street',
    city: 'Colombo',
    district: 'Western Province',
    postalCode: '00100',
    bio: 'Passionate about fresh, organic produce. Supporting local farmers and sustainable agriculture.',
    avatar: '👤',
    joinDate: '2023-01-15',
    verified: true
  });

  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    smsNotifications: false,
    marketingEmails: true,
    orderUpdates: true,
    priceAlerts: true,
    newsletter: true
  });

  // Sample user data
  const userStats = {
    totalOrders: 24,
    totalSpent: 15750,
    savedItems: 8,
    rating: 4.8,
    reviewsGiven: 12,
    memberSince: '2023'
  };

  const recentOrders = [
    {
      id: 'AG123456',
      date: '2024-12-20',
      items: ['Fresh Coconuts', 'Organic Rice'],
      total: 2650,
      status: 'Delivered',
      seller: 'Farmer Nimal'
    },
    {
      id: 'AG123455',
      date: '2024-12-18',
      items: ['Mixed Vegetables', 'Fresh Milk'],
      total: 1200,
      status: 'In Transit',
      seller: 'Green Valley Farm'
    },
    {
      id: 'AG123454',
      date: '2024-12-15',
      items: ['Organic Spices'],
      total: 850,
      status: 'Delivered',
      seller: 'Spice Garden'
    }
  ];

  const savedItems = [
    { id: 1, name: 'Organic Tomatoes', price: 180, seller: 'Fresh Farm', image: '🍅' },
    { id: 2, name: 'Ceylon Cinnamon', price: 450, seller: 'Spice World', image: '🌿' },
    { id: 3, name: 'Fresh Fish', price: 850, seller: 'Ocean Catch', image: '🐟' },
    { id: 4, name: 'King Coconut', price: 120, seller: 'Coconut King', image: '🥥' }
  ];

  const reviews = [
    {
      id: 1,
      product: 'Fresh Coconuts',
      rating: 5,
      comment: 'Excellent quality coconuts! Very fresh and sweet.',
      date: '2024-12-15',
      seller: 'Farmer Nimal'
    },
    {
      id: 2,
      product: 'Organic Rice',
      rating: 4,
      comment: 'Good quality rice, will order again.',
      date: '2024-12-10',
      seller: 'Rice Mills Ltd'
    }
  ];

  const handleInputChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value
    });
  };

  const handlePreferenceChange = (key) => {
    setPreferences({
      ...preferences,
      [key]: !preferences[key]
    });
  };

  const handleSaveProfile = () => {
    setIsEditing(false);
    // Here you would typically make an API call to save the data
    console.log('Profile saved:', profileData);
  };

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      // Handle logout logic here
      console.log('User logged out');
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered': return 'bg-green-100 text-green-800';
      case 'In Transit': return 'bg-blue-100 text-blue-800';
      case 'Processing': return 'bg-yellow-100 text-yellow-800';
      case 'Cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-2 rounded-xl">
                <span className="text-white font-bold text-xl">🌱</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                AgriBid
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-600 hover:text-green-600 transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  3
                </span>
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span className="hidden md:block">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border p-6 sticky top-6">
              {/* Profile Header */}
              <div className="text-center mb-6">
                <div className="relative inline-block">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-3xl text-white mb-4">
                    {profileData.avatar}
                  </div>
                  {profileData.verified && (
                    <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <button className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow">
                    <Camera className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
                <h2 className="text-xl font-bold text-gray-900">
                  {profileData.firstName} {profileData.lastName}
                </h2>
                <p className="text-sm text-gray-600">{profileData.email}</p>
                {profileData.verified && (
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 mt-2">
                    <Award className="w-3 h-3 mr-1" />
                    Verified User
                  </span>
                )}
              </div>

              {/* Navigation */}
              <nav className="space-y-2">
                {[
                  { id: 'profile', label: 'Profile Info', icon: User },
                  { id: 'orders', label: 'My Orders', icon: ShoppingBag },
                  { id: 'saved', label: 'Saved Items', icon: Heart },
                  { id: 'reviews', label: 'My Reviews', icon: Star },
                  { id: 'settings', label: 'Settings', icon: Settings },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all ${
                      activeTab === item.id
                        ? 'bg-green-50 text-green-700 border border-green-200'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}
              </nav>

              {/* Stats */}
              <div className="mt-6 pt-6 border-t">
                <h3 className="text-sm font-medium text-gray-900 mb-3">Quick Stats</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Orders</span>
                    <span className="font-semibold">{userStats.totalOrders}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Spent</span>
                    <span className="font-semibold">Rs. {userStats.totalSpent.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Rating</span>
                    <div className="flex items-center space-x-1">
                      <span className="font-semibold">{userStats.rating}</span>
                      <Star className="w-3 h-3 text-yellow-400 fill-current" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            
            {/* Profile Info Tab */}
            {activeTab === 'profile' && (
              <div className="bg-white rounded-2xl shadow-lg border p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Profile Information</h2>
                  <button
                    onClick={() => setIsEditing(!isEditing)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                      isEditing
                        ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        : 'bg-green-600 text-white hover:bg-green-700'
                    }`}
                  >
                    {isEditing ? (
                      <>
                        <X className="w-4 h-4" />
                        <span>Cancel</span>
                      </>
                    ) : (
                      <>
                        <Edit className="w-4 h-4" />
                        <span>Edit Profile</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={profileData.firstName}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className={`w-full px-4 py-3 border rounded-lg transition-all ${
                        isEditing
                          ? 'border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500'
                          : 'border-gray-200 bg-gray-50'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={profileData.lastName}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className={`w-full px-4 py-3 border rounded-lg transition-all ${
                        isEditing
                          ? 'border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500'
                          : 'border-gray-200 bg-gray-50'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={profileData.email}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className={`w-full px-4 py-3 pl-10 border rounded-lg transition-all ${
                          isEditing
                            ? 'border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500'
                            : 'border-gray-200 bg-gray-50'
                        }`}
                      />
                      <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        value={profileData.phone}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className={`w-full px-4 py-3 pl-10 border rounded-lg transition-all ${
                          isEditing
                            ? 'border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500'
                            : 'border-gray-200 bg-gray-50'
                        }`}
                      />
                      <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                    <div className="relative">
                      <input
                        type="text"
                        name="address"
                        value={profileData.address}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className={`w-full px-4 py-3 pl-10 border rounded-lg transition-all ${
                          isEditing
                            ? 'border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500'
                            : 'border-gray-200 bg-gray-50'
                        }`}
                      />
                      <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                    <input
                      type="text"
                      name="city"
                      value={profileData.city}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className={`w-full px-4 py-3 border rounded-lg transition-all ${
                        isEditing
                          ? 'border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500'
                          : 'border-gray-200 bg-gray-50'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">District</label>
                    <input
                      type="text"
                      name="district"
                      value={profileData.district}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className={`w-full px-4 py-3 border rounded-lg transition-all ${
                        isEditing
                          ? 'border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500'
                          : 'border-gray-200 bg-gray-50'
                      }`}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                    <textarea
                      name="bio"
                      value={profileData.bio}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      rows="3"
                      className={`w-full px-4 py-3 border rounded-lg transition-all ${
                        isEditing
                          ? 'border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500'
                          : 'border-gray-200 bg-gray-50'
                      }`}
                    />
                  </div>
                </div>

                {isEditing && (
                  <div className="flex justify-end space-x-4 mt-6 pt-6 border-t">
                    <button
                      onClick={() => setIsEditing(false)}
                      className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSaveProfile}
                      className="flex items-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      <Save className="w-4 h-4" />
                      <span>Save Changes</span>
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <div className="bg-white rounded-2xl shadow-lg border p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">My Orders</h2>
                
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="border rounded-xl p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-4 mb-2">
                            <h3 className="font-semibold text-gray-900">Order #{order.id}</h3>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                              {order.status}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">
                            {order.items.join(', ')} • by {order.seller}
                          </p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {new Date(order.date).toLocaleDateString()}
                            </span>
                            <span>Rs. {order.total.toLocaleString()}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button className="p-2 text-gray-400 hover:text-green-600 transition-colors">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                            <Download className="w-4 h-4" />
                          </button>
                          {order.status === 'Delivered' && (
                            <button className="p-2 text-gray-400 hover:text-yellow-600 transition-colors">
                              <Star className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <button className="text-green-600 hover:text-green-700 font-medium">
                    View All Orders
                  </button>
                </div>
              </div>
            )}

            {/* Saved Items Tab */}
            {activeTab === 'saved' && (
              <div className="bg-white rounded-2xl shadow-lg border p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Saved Items</h2>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {savedItems.map((item) => (
                    <div key={item.id} className="border rounded-xl p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-xl">
                          {item.image}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900">{item.name}</h3>
                          <p className="text-sm text-gray-600">by {item.seller}</p>
                          <p className="text-lg font-bold text-green-600">Rs. {item.price}</p>
                        </div>
                        <div className="flex flex-col space-y-2">
                          <button className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                            <Heart className="w-4 h-4 fill-current" />
                          </button>
                          <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                            <ShoppingBag className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Reviews Tab */}
            {activeTab === 'reviews' && (
              <div className="bg-white rounded-2xl shadow-lg border p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">My Reviews</h2>
                
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <div key={review.id} className="border rounded-xl p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-gray-900">{review.product}</h3>
                          <p className="text-sm text-gray-600">by {review.seller}</p>
                        </div>
                        <div className="flex items-center space-x-1">
                          {renderStars(review.rating)}
                        </div>
                      </div>
                      <p className="text-gray-700 mb-2">{review.comment}</p>
                      <p className="text-sm text-gray-500">
                        {new Date(review.date).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <div className="space-y-6">
                {/* Notification Settings */}
                <div className="bg-white rounded-2xl shadow-lg border p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Notification Settings</h2>
                  
                  <div className="space-y-4">
                    {[
                      { key: 'emailNotifications', label: 'Email Notifications', desc: 'Receive notifications via email' },
                      { key: 'smsNotifications', label: 'SMS Notifications', desc: 'Receive notifications via SMS' },
                      { key: 'marketingEmails', label: 'Marketing Emails', desc: 'Receive promotional offers and news' },
                      { key: 'orderUpdates', label: 'Order Updates', desc: 'Get updates about your orders' },
                      { key: 'priceAlerts', label: 'Price Alerts', desc: 'Get notified when prices drop' },
                      { key: 'newsletter', label: 'Newsletter', desc: 'Receive weekly newsletter' }
                    ].map((setting) => (
                      <div key={setting.key} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h3 className="font-medium text-gray-900">{setting.label}</h3>
                          <p className="text-sm text-gray-600">{setting.desc}</p>
                        </div>
                        <button
                          onClick={() => handlePreferenceChange(setting.key)}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            preferences[setting.key] ? 'bg-green-600' : 'bg-gray-200'
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              preferences[setting.key] ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Security Settings */}
                <div className="bg-white rounded-2xl shadow-lg border p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Security Settings</h2>
                  
                  <div className="space-y-4">
                    <button className="w-full flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center space-x-3">
                        <Shield className="w-5 h-5 text-green-600" />
                        <div className="text-left">
                          <h3 className="font-medium text-gray-900">Change Password</h3>
                          <p className="text-sm text-gray-600">Update your account password</p>
                        </div>
                      </div>
                      <span className="text-gray-400">→</span>
                    </button>
                    
                    <button className="w-full flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center space-x-3">
                        <CreditCard className="w-5 h-5 text-blue-600" />
                        <div className="text-left">
                          <h3 className="font-medium text-gray-900">Payment Methods</h3>
                          <p className="text-sm text-gray-600">Manage your payment methods</p>
                        </div>
                      </div>
                      <span className="text-gray-400">→</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}