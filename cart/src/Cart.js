import React, { useState } from 'react';
import { 
  ArrowLeft, Plus, Minus, Trash2, Heart, ShoppingBag, 
  MapPin, Star, Clock, Package, Truck, Shield, 
  CreditCard, Gift, Tag, AlertCircle, CheckCircle,
  User, Phone, Mail, Home, Edit, Save
} from 'lucide-react';

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Fresh Coconuts',
      price: 150,
      originalPrice: 200,
      unit: 'per piece',
      quantity: 3,
      seller: 'Coconut King',
      location: 'Colombo',
      rating: 4.8,
      image: '🥥',
      deliveryTime: '1-2 days',
      organic: true,
      inStock: true,
      maxQuantity: 50
    },
    {
      id: 2,
      name: 'Red Hot Chilli',
      price: 450,
      originalPrice: 500,
      unit: 'per kg',
      quantity: 2,
      seller: 'Spice Garden',
      location: 'Matara',
      rating: 4.9,
      image: '🌶️',
      deliveryTime: '2-3 days',
      organic: true,
      inStock: true,
      maxQuantity: 20
    },
    {
      id: 3,
      name: 'Sweet Yellow Corn',
      price: 120,
      unit: 'per kg',
      quantity: 5,
      seller: 'Green Valley Farm',
      location: 'Kandy',
      rating: 4.7,
      image: '🌽',
      deliveryTime: '1-2 days',
      organic: false,
      inStock: false,
      maxQuantity: 0
    },
    {
      id: 4,
      name: 'Cherry Tomatoes',
      price: 350,
      originalPrice: 400,
      unit: 'per 500g',
      quantity: 1,
      seller: 'Veggie Garden',
      location: 'Nuwara Eliya',
      rating: 4.8,
      image: '🍅',
      deliveryTime: '1 day',
      organic: true,
      inStock: true,
      maxQuantity: 30
    }
  ]);

  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState(null);
  const [deliveryOption, setDeliveryOption] = useState('standard');
  const [showSaveForLater, setShowSaveForLater] = useState([]);

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const originalTotal = cartItems.reduce((sum, item) => {
    const originalPrice = item.originalPrice || item.price;
    return sum + (originalPrice * item.quantity);
  }, 0);
  const savings = originalTotal - subtotal;
  
  const deliveryFees = {
    standard: 250,
    express: 500,
    pickup: 0
  };
  
  const deliveryFee = deliveryFees[deliveryOption];
  const promoDiscount = appliedPromo ? Math.round(subtotal * 0.1) : 0; // 10% discount
  const total = subtotal + deliveryFee - promoDiscount;

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id 
          ? { ...item, quantity: Math.min(newQuantity, item.maxQuantity) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const saveForLater = (id) => {
    setShowSaveForLater(prev => [...prev, id]);
    removeItem(id);
  };

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === 'fresh10') {
      setAppliedPromo({
        code: 'FRESH10',
        discount: 10,
        description: '10% off on fresh produce'
      });
    } else {
      alert('Invalid promo code');
    }
    setPromoCode('');
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 ${
          i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const CartItem = ({ item }) => (
    <div className={`bg-white rounded-xl shadow-sm border p-4 ${!item.inStock ? 'opacity-60' : ''}`}>
      <div className="flex items-start space-x-4">
        {/* Product Image */}
        <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg flex items-center justify-center relative">
          <span className="text-3xl">{item.image}</span>
          {item.organic && (
            <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs px-1 rounded-full">
              ORG
            </span>
          )}
          {!item.inStock && (
            <div className="absolute inset-0 bg-red-500 bg-opacity-20 rounded-lg flex items-center justify-center">
              <span className="text-red-600 text-xs font-bold">OUT OF STOCK</span>
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold text-gray-900">{item.name}</h3>
              <p className="text-sm text-gray-600">by {item.seller}</p>
              <div className="flex items-center space-x-2 mt-1">
                <div className="flex items-center space-x-1">
                  {renderStars(item.rating)}
                  <span className="text-xs text-gray-600">{item.rating}</span>
                </div>
                <span className="text-xs text-gray-500">•</span>
                <span className="text-xs text-gray-600 flex items-center">
                  <MapPin className="w-3 h-3 mr-1" />
                  {item.location}
                </span>
              </div>
              <div className="flex items-center space-x-2 mt-1 text-xs text-gray-500">
                <Truck className="w-3 h-3" />
                <span>Delivery: {item.deliveryTime}</span>
              </div>
            </div>

            {/* Price */}
            <div className="text-right">
              <div className="flex items-center space-x-2">
                <span className="text-lg font-bold text-green-600">
                  Rs. {item.price.toLocaleString()}
                </span>
                <span className="text-sm text-gray-600">{item.unit}</span>
              </div>
              {item.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  Rs. {item.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
          </div>

          {/* Quantity and Actions */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center space-x-3">
              {/* Quantity Controls */}
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  disabled={!item.inStock}
                  className="p-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 py-2 font-medium">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  disabled={!item.inStock || item.quantity >= item.maxQuantity}
                  className="p-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {item.maxQuantity > 0 && (
                <span className="text-xs text-gray-500">
                  {item.maxQuantity - item.quantity} left
                </span>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => saveForLater(item.id)}
                className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                title="Save for later"
              >
                <Heart className="w-4 h-4" />
              </button>
              <button
                onClick={() => removeItem(item.id)}
                className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                title="Remove from cart"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Item Total */}
          <div className="mt-3 pt-3 border-t flex justify-between items-center">
            <span className="text-sm text-gray-600">Item Total:</span>
            <span className="text-lg font-bold text-green-600">
              Rs. {(item.price * item.quantity).toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </button>
              <div className="flex items-center space-x-2">
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-2 rounded-xl">
                  <span className="text-white font-bold text-xl">🌱</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  AgriBid
                </span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <ShoppingBag className="w-5 h-5 text-green-600" />
                <span className="font-medium text-gray-900">Shopping Cart</span>
                <span className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded-full">
                  {cartItems.length} items
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {cartItems.length === 0 ? (
          /* Empty Cart */
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingBag className="w-12 h-12 text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Start shopping for fresh produce from local farmers</p>
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors">
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <h1 className="text-2xl font-bold text-gray-900 mb-6">Shopping Cart</h1>
              
              {/* Stock Warning */}
              {cartItems.some(item => !item.inStock) && (
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <AlertCircle className="w-5 h-5 text-orange-600" />
                    <span className="text-orange-800 font-medium">Some items are out of stock</span>
                  </div>
                  <p className="text-orange-700 text-sm mt-1">
                    Out of stock items will be removed from your order
                  </p>
                </div>
              )}

              {/* Cart Items List */}
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}

              {/* Recommended Products */}
              <div className="mt-8 bg-white rounded-xl shadow-sm border p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">You might also like</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { name: 'Organic Rice', price: 320, image: '🍚', rating: 4.9 },
                    { name: 'Fresh Bananas', price: 160, image: '🍌', rating: 4.6 },
                    { name: 'Green Carrots', price: 250, image: '🥕', rating: 4.7 },
                    { name: 'Big Onions', price: 180, image: '🧅', rating: 4.5 }
                  ].map((product, index) => (
                    <div key={index} className="border rounded-lg p-3 hover:shadow-md transition-shadow cursor-pointer">
                      <div className="bg-gray-100 rounded-lg p-3 text-center mb-2">
                        <span className="text-2xl">{product.image}</span>
                      </div>
                      <h4 className="font-medium text-sm">{product.name}</h4>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-green-600 font-bold text-sm">Rs. {product.price}</span>
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-current" />
                          <span className="text-xs">{product.rating}</span>
                        </div>
                      </div>
                      <button className="w-full bg-green-100 text-green-700 py-1 rounded mt-2 text-sm hover:bg-green-200 transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg border p-6 sticky top-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h2>
                
                {/* Delivery Options */}
                <div className="mb-6">
                  <h3 className="font-medium text-gray-900 mb-3">Delivery Options</h3>
                  <div className="space-y-2">
                    {[
                      { id: 'standard', name: 'Standard Delivery', time: '2-3 days', price: 250 },
                      { id: 'express', name: 'Express Delivery', time: '1 day', price: 500 },
                      { id: 'pickup', name: 'Pickup from Seller', time: 'Flexible', price: 0 }
                    ].map((option) => (
                      <label key={option.id} className="flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                        <div className="flex items-center space-x-3">
                          <input
                            type="radio"
                            name="delivery"
                            value={option.id}
                            checked={deliveryOption === option.id}
                            onChange={(e) => setDeliveryOption(e.target.value)}
                            className="text-green-600"
                          />
                          <div>
                            <span className="font-medium">{option.name}</span>
                            <p className="text-sm text-gray-600">{option.time}</p>
                          </div>
                        </div>
                        <span className="font-medium">
                          {option.price === 0 ? 'Free' : `Rs. ${option.price}`}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Promo Code */}
                <div className="mb-6">
                  <h3 className="font-medium text-gray-900 mb-3">Promo Code</h3>
                  {appliedPromo ? (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-green-800 font-medium">{appliedPromo.code}</span>
                      </div>
                      <button
                        onClick={() => setAppliedPromo(null)}
                        className="text-green-600 hover:text-green-800"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        placeholder="Enter promo code"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      />
                      <button
                        onClick={applyPromoCode}
                        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                      >
                        Apply
                      </button>
                    </div>
                  )}
                  <p className="text-xs text-gray-500 mt-1">Try: FRESH10 for 10% off</p>
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal ({cartItems.length} items)</span>
                    <span className="font-medium">Rs. {subtotal.toLocaleString()}</span>
                  </div>
                  
                  {savings > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>You saved</span>
                      <span className="font-medium">-Rs. {savings.toLocaleString()}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Delivery Fee</span>
                    <span className="font-medium">
                      {deliveryFee === 0 ? 'Free' : `Rs. ${deliveryFee.toLocaleString()}`}
                    </span>
                  </div>
                  
                  {appliedPromo && (
                    <div className="flex justify-between text-green-600">
                      <span>Promo Discount ({appliedPromo.discount}%)</span>
                      <span className="font-medium">-Rs. {promoDiscount.toLocaleString()}</span>
                    </div>
                  )}
                  
                  <div className="border-t pt-3 flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-green-600">Rs. {total.toLocaleString()}</span>
                  </div>
                </div>

                {/* Checkout Button */}
                <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all mb-4">
                  Proceed to Checkout
                </button>

                {/* Security Info */}
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="flex items-center space-x-2 mb-2">
                    <Shield className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium text-gray-900">Secure Checkout</span>
                  </div>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• SSL encrypted payment</li>
                    <li>• Money back guarantee</li>
                    <li>• 24/7 customer support</li>
                  </ul>
                </div>

                {/* Continue Shopping */}
                <button className="w-full mt-4 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}