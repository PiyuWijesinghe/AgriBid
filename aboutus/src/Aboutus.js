import React from 'react';
import { Users, Target, Award, Leaf, TrendingUp, Globe } from 'lucide-react';

const Aboutus = () => {
  const stats = [
    { number: '10K+', label: 'Active Farmers' },
    { number: '500+', label: 'Buyer Partners' },
    { number: '95%', label: 'Success Rate' },
    { number: '50+', label: 'Cities Covered' }
  ];

  const values = [
    {
      icon: <Leaf className="w-8 h-8 text-green-600" />,
      title: 'Sustainability',
      description: 'Promoting eco-friendly farming practices and sustainable agricultural solutions for a better tomorrow.'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: 'Community First',
      description: 'Building strong relationships between farmers and buyers to create a thriving agricultural ecosystem.'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
      title: 'Innovation',
      description: 'Leveraging cutting-edge technology to revolutionize traditional agricultural trading methods.'
    },
    {
      icon: <Award className="w-8 h-8 text-orange-600" />,
      title: 'Quality Assurance',
      description: 'Ensuring the highest standards of produce quality through rigorous verification processes.'
    }
  ];

  const teamMembers = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b332c3a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&h=387&q=80',
      description: 'Former agricultural consultant with 15 years of experience in farm-to-market solutions.'
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&h=387&q=80',
      description: 'Tech entrepreneur passionate about using AI and blockchain to transform agriculture.'
    },
    {
      name: 'Dr. Priya Patel',
      role: 'Head of Agriculture',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&h=387&q=80',
      description: 'Agricultural scientist with expertise in crop optimization and sustainable farming practices.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Navbar */}
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-green-600">AgriBid</div>
          <nav className="space-x-6 hidden md:block">
            <a href="/" className="text-gray-600 hover:text-green-600 font-medium">Home</a>
            <a href="/products" className="text-gray-600 hover:text-green-600 font-medium">Products</a>
            <a href="/about" className="text-green-600 font-semibold">About Us</a>
            <a href="/contact" className="text-gray-600 hover:text-green-600 font-medium">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-700 via-green-600 to-emerald-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              About <span className="text-green-200">AgriBid</span>
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Revolutionizing agriculture through technology, connecting farmers directly with buyers for fair, transparent, and efficient trading.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Target className="w-10 h-10 text-green-600 mr-4" />
                <h2 className="text-4xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At AgriBid, we believe in empowering farmers by eliminating middlemen and creating direct connections with buyers. Our platform ensures fair pricing, transparent transactions, and sustainable agricultural practices.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We're building a future where technology serves agriculture, making farming more profitable, efficient, and environmentally responsible.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Modern farming technology"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-6 rounded-xl shadow-lg">
                <Globe className="w-8 h-8 mb-2" />
                <p className="font-semibold">Global Impact</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-green-100 text-lg font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at AgriBid
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="mb-6 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate experts dedicated to transforming agriculture through innovation
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6 inline-block">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-2xl transition-shadow duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-green-600/0 group-hover:bg-green-600/10 transition-colors duration-300"></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-green-600 font-semibold mb-4 text-lg">
                  {member.role}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join the Agricultural Revolution
          </h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            Whether you're a farmer looking to get fair prices for your produce or a buyer seeking quality agricultural products, AgriBid is here to connect you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg">
              Get Started Today
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutus;
