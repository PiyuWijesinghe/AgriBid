import React, { useState } from 'react';
import { 
  CreditCard, Smartphone, Building2, Wallet, Shield, Lock, 
  CheckCircle, ArrowLeft, MapPin, Clock, Star, AlertCircle,
  Eye, EyeOff, Calendar, User, Mail, Phone, Home
} from 'lucide-react';

export default function Payment() {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [showCardDetails, setShowCardDetails] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Billing Info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    
    // Payment Info
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
    
    // Mobile Payment
    mobileNumber: '',
    
    // Bank Transfer
    bankAccount: '',
    
    // Delivery
    deliveryMethod: 'pickup',
    deliveryAddress: '',
    specialInstructions: ''
  });

  const orderItems = [
    {
      id: 1,
      name: 'Fresh Coconuts',
      seller: 'Farmer Nimal',
      quantity: 10,
      pricePerUnit: 150,
      image: '🥥',
      location: 'Colombo'
    },
    {
      id: 2,
      name: 'Organic Rice',
      seller: 'Rice Mills Ltd',
      quantity: 5,
      pricePerUnit: 180,
      image: '🌾',
      location: 'Anuradhapura'
    }
  ];

  const subtotal = orderItems.reduce((sum, item) => sum + (item.quantity * item.pricePerUnit), 0);
  const deliveryFee = formData.deliveryMethod === 'delivery' ? 250 : 0;
  const serviceFee = Math.round(subtotal * 0.02); // 2% service fee
  const total = subtotal + deliveryFee + serviceFee;

  const paymentMethods = [
    {
      id: 'card',
      name: 'Credit/Debit Card',
      icon: CreditCard,
      description: 'Visa, Mastercard, American Express'
    },
    {
      id: 'mobile',
      name: 'Mobile Payment',
      icon: Smartphone,
      description: 'Dialog eZ Cash, Mobitel mCash'
    },
    {
      id: 'bank',
      name: 'Bank Transfer',
      icon: Building2,
      description: 'Direct bank transfer'
    },
    {
      id: 'wallet',
      name: 'Digital Wallet',
      icon: Wallet,
      description: 'PayPal, Skrill'
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\s/g, '');
    value = value.replace(/(.{4})/g, '$1 ').trim();
    if (value.length <= 19) {
      setFormData({
        ...formData,
        cardNumber: value
      });
    }
  };

  const handleExpiryChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length >= 2) {
      value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }
    setFormData({
      ...formData,
      expiryDate: value
    });
  };

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handlePayment = () => {
    // Simulate payment processing
    alert('Payment processed successfully! Order confirmed.');
  };

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
            
            {/* Progress Steps */}
            <div className="hidden md:flex items-center space-x-4">
              {[
                { step: 1, label: 'Order Review' },
                { step: 2, label: 'Payment Details' },
                { step: 3, label: 'Confirmation' }
              ].map((item) => (
                <div key={item.step} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    currentStep >= item.step 
                      ? 'bg-green-600 text-white' 
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {currentStep > item.step ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : (
                      item.step
                    )}
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-700">{item.label}</span>
                  {item.step < 3 && (
                    <div className={`ml-4 w-8 h-0.5 ${
                      currentStep > item.step ? 'bg-green-600' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Shield className="w-4 h-4 text-green-600" />
              <span>Secure Checkout</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Step 1: Order Review */}
            {currentStep === 1 && (
              <div className="bg-white rounded-2xl shadow-lg border p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Review</h2>
                
                {/* Order Items */}
                <div className="space-y-4 mb-6">
                  {orderItems.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-xl">
                      <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                        {item.image}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{item.name}</h3>
                        <p className="text-sm text-gray-600">Sold by {item.seller}</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin className="w-3 h-3 mr-1" />
                          {item.location}
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">Rs. {item.pricePerUnit} x {item.quantity}</p>
                        <p className="text-lg font-bold text-green-600">Rs. {item.quantity * item.pricePerUnit}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Delivery Options */}
                <div className="border-t pt-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Delivery Method</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div 
                      onClick={() => setFormData({...formData, deliveryMethod: 'pickup'})}
                      className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${
                        formData.deliveryMethod === 'pickup' 
                          ? 'border-green-500 bg-green-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Pickup from Seller</h4>
                          <p className="text-sm text-gray-600">Free - Arrange with seller</p>
                        </div>
                        <div className={`w-4 h-4 rounded-full border-2 ${
                          formData.deliveryMethod === 'pickup' 
                            ? 'border-green-500 bg-green-500' 
                            : 'border-gray-300'
                        }`}>
                          {formData.deliveryMethod === 'pickup' && (
                            <div className="w-full h-full rounded-full bg-white scale-50"></div>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div 
                      onClick={() => setFormData({...formData, deliveryMethod: 'delivery'})}
                      className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${
                        formData.deliveryMethod === 'delivery' 
                          ? 'border-green-500 bg-green-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Home Delivery</h4>
                          <p className="text-sm text-gray-600">Rs. 250 - 1-2 business days</p>
                        </div>
                        <div className={`w-4 h-4 rounded-full border-2 ${
                          formData.deliveryMethod === 'delivery' 
                            ? 'border-green-500 bg-green-500' 
                            : 'border-gray-300'
                        }`}>
                          {formData.deliveryMethod === 'delivery' && (
                            <div className="w-full h-full rounded-full bg-white scale-50"></div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Delivery Address */}
                {formData.deliveryMethod === 'delivery' && (
                  <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                    <h4 className="font-medium mb-3">Delivery Address</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Street Address"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="City"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                    <textarea
                      name="specialInstructions"
                      value={formData.specialInstructions}
                      onChange={handleInputChange}
                      placeholder="Special delivery instructions (optional)"
                      rows="2"
                      className="w-full mt-3 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    ></textarea>
                  </div>
                )}
              </div>
            )}

            {/* Step 2: Payment Details */}
            {currentStep === 2 && (
              <div className="space-y-6">
                {/* Billing Information */}
                <div className="bg-white rounded-2xl shadow-lg border p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Billing Information</h2>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="+94 77 123 4567"
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="bg-white rounded-2xl shadow-lg border p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Method</h2>
                  
                  {/* Payment Method Selection */}
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {paymentMethods.map((method) => (
                      <div
                        key={method.id}
                        onClick={() => setPaymentMethod(method.id)}
                        className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${
                          paymentMethod === method.id 
                            ? 'border-green-500 bg-green-50' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <method.icon className={`w-6 h-6 ${
                            paymentMethod === method.id ? 'text-green-600' : 'text-gray-600'
                          }`} />
                          <div className="flex-1">
                            <h3 className="font-medium">{method.name}</h3>
                            <p className="text-sm text-gray-600">{method.description}</p>
                          </div>
                          <div className={`w-4 h-4 rounded-full border-2 ${
                            paymentMethod === method.id 
                              ? 'border-green-500 bg-green-500' 
                              : 'border-gray-300'
                          }`}>
                            {paymentMethod === method.id && (
                              <div className="w-full h-full rounded-full bg-white scale-50"></div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Payment Forms */}
                  {paymentMethod === 'card' && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                        <div className="relative">
                          <input
                            type="text"
                            value={formData.cardNumber}
                            onChange={handleCardNumberChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            placeholder="1234 5678 9012 3456"
                            maxLength="19"
                          />
                          <CreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                          <input
                            type="text"
                            value={formData.expiryDate}
                            onChange={handleExpiryChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            placeholder="MM/YY"
                            maxLength="5"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                          <div className="relative">
                            <input
                              type={showCardDetails ? 'text' : 'password'}
                              name="cvv"
                              value={formData.cvv}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                              placeholder="123"
                              maxLength="4"
                            />
                            <button
                              type="button"
                              onClick={() => setShowCardDetails(!showCardDetails)}
                              className="absolute right-3 top-1/2 transform -translate-y-1/2"
                            >
                              {showCardDetails ? (
                                <EyeOff className="w-4 h-4 text-gray-400" />
                              ) : (
                                <Eye className="w-4 h-4 text-gray-400" />
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Name on Card</label>
                        <input
                          type="text"
                          name="cardName"
                          value={formData.cardName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>
                  )}

                  {paymentMethod === 'mobile' && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
                        <input
                          type="tel"
                          name="mobileNumber"
                          value={formData.mobileNumber}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="+94 77 123 4567"
                        />
                      </div>
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <p className="text-sm text-blue-800">
                          You will receive an SMS with payment instructions after confirming your order.
                        </p>
                      </div>
                    </div>
                  )}

                  {paymentMethod === 'bank' && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Bank Account Number</label>
                        <input
                          type="text"
                          name="bankAccount"
                          value={formData.bankAccount}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="Account Number"
                        />
                      </div>
                      <div className="p-4 bg-yellow-50 rounded-lg">
                        <p className="text-sm text-yellow-800">
                          Bank transfer details will be provided after order confirmation. Please allow 1-2 business days for processing.
                        </p>
                      </div>
                    </div>
                  )}

                  {paymentMethod === 'wallet' && (
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <p className="text-sm text-purple-800">
                        You will be redirected to your chosen digital wallet to complete the payment.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Step 3: Confirmation */}
            {currentStep === 3 && (
              <div className="bg-white rounded-2xl shadow-lg border p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Order Confirmed!</h2>
                <p className="text-gray-600 mb-6">
                  Thank you for your purchase. Your order has been successfully placed.
                </p>
                
                <div className="bg-gray-50 rounded-xl p-4 mb-6">
                  <h3 className="font-semibold mb-2">Order Details</h3>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span>Order ID:</span>
                      <span className="font-mono">#AG{Date.now().toString().slice(-6)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Payment Method:</span>
                      <span className="capitalize">{paymentMethods.find(m => m.id === paymentMethod)?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total Amount:</span>
                      <span className="font-semibold">Rs. {total.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4 justify-center">
                  <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all">
                    Track Order
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                    Continue Shopping
                  </button>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            {currentStep < 3 && (
              <div className="flex justify-between">
                <button
                  onClick={handlePrevStep}
                  disabled={currentStep === 1}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    currentStep === 1
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Previous
                </button>
                <button
                  onClick={currentStep === 2 ? handlePayment : handleNextStep}
                  className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all"
                >
                  {currentStep === 2 ? 'Complete Payment' : 'Continue'}
                </button>
              </div>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border p-6 sticky top-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h3>
              
              {/* Items */}
              <div className="space-y-3 mb-4">
                {orderItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                      <span className="text-lg">{item.image}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{item.name}</p>
                      <p className="text-xs text-gray-600">{item.quantity} × Rs. {item.pricePerUnit}</p>
                    </div>
                    <p className="text-sm font-semibold">Rs. {item.quantity * item.pricePerUnit}</p>
                  </div>
                ))}
              </div>
              
              {/* Totals */}
              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>Rs. {subtotal.toLocaleString()}</span>
                </div>
                {deliveryFee > 0 && (
                  <div className="flex justify-between text-sm">
                    <span>Delivery Fee</span>
                    <span>Rs. {deliveryFee}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm">
                  <span>Service Fee</span>
                  <span>Rs. {serviceFee}</span>
                </div>
                <div className="flex justify-between text-lg font-bold border-t pt-2">
                  <span>Total</span>
                  <span className="text-green-600">Rs. {total.toLocaleString()}</span>
                </div>
              </div>
              
              {/* Security Badge */}
              <div className="mt-6 p-3 bg-green-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-green-800 font-medium">Secure Payment</span>
                </div>
                <p className="text-xs text-green-700 mt-1">
                  Your payment information is encrypted and secure
                </p>
              </div>

              {/* Support */}
              <div className="mt-4 text-center">
                <p className="text-xs text-gray-600">
                  Need help? <button className="text-green-600 hover:underline">Contact Support</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}