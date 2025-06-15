import React, { useState } from 'react';
import { Sprout, Play, BarChart3, ShoppingCart, Menu, X, Star, Users, Award, Leaf } from 'lucide-react';

interface Tutorial {
  id: string;
  title: string;
  farmer: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  thumbnail: string;
  category: string;
  rating: number;
  views: string;
}

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'Seeds' | 'Fertilizers' | 'Equipment';
  rating: number;
  inStock: boolean;
}

interface Plant {
  id: string;
  name: string;
  type: string;
  plantedDate: string;
  nextWatering: string;
  health: 'Excellent' | 'Good' | 'Needs Attention';
  progress: number;
  image: string;
}

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'home' | 'tutorials' | 'dashboard' | 'shop'>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const tutorials: Tutorial[] = [
    {
      id: '1',
      title: 'Growing Tomatoes in Small Spaces',
      farmer: 'Sarah Martinez',
      duration: '12:34',
      difficulty: 'Beginner',
      thumbnail: 'https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Vegetables',
      rating: 4.8,
      views: '15.2K'
    },
    {
      id: '2',
      title: 'Indoor Herb Garden Setup',
      farmer: 'Michael Chen',
      duration: '8:45',
      difficulty: 'Beginner',
      thumbnail: 'https://images.pexels.com/photos/4503271/pexels-photo-4503271.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Herbs',
      rating: 4.9,
      views: '23.1K'
    },
    {
      id: '3',
      title: 'Balcony Flower Garden Design',
      farmer: 'Emma Thompson',
      duration: '15:22',
      difficulty: 'Intermediate',
      thumbnail: 'https://images.pexels.com/photos/1409999/pexels-photo-1409999.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Flowers',
      rating: 4.7,
      views: '8.9K'
    },
    {
      id: '4',
      title: 'Composting in Apartments',
      farmer: 'Robert Kim',
      duration: '10:15',
      difficulty: 'Beginner',
      thumbnail: 'https://images.pexels.com/photos/4503270/pexels-photo-4503270.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Sustainability',
      rating: 4.6,
      views: '12.7K'
    }
  ];

  const products: Product[] = [
    {
      id: '1',
      name: 'Organic Tomato Seeds Pack',
      price: 12.99,
      image: 'https://images.pexels.com/photos/209339/pexels-photo-209339.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Seeds',
      rating: 4.8,
      inStock: true
    },
    {
      id: '2',
      name: 'Indoor Plant Fertilizer',
      price: 18.50,
      image: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Fertilizers',
      rating: 4.7,
      inStock: true
    },
    {
      id: '3',
      name: 'Smart Plant Monitor',
      price: 45.00,
      image: 'https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Equipment',
      rating: 4.9,
      inStock: false
    },
    {
      id: '4',
      name: 'Herb Garden Starter Kit',
      price: 29.99,
      image: 'https://images.pexels.com/photos/4503271/pexels-photo-4503271.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Seeds',
      rating: 4.6,
      inStock: true
    }
  ];

  const myPlants: Plant[] = [
    {
      id: '1',
      name: 'Cherry Tomatoes',
      type: 'Vegetable',
      plantedDate: '2024-01-15',
      nextWatering: '2024-02-01',
      health: 'Excellent',
      progress: 75,
      image: 'https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: '2',
      name: 'Basil',
      type: 'Herb',
      plantedDate: '2024-01-20',
      nextWatering: '2024-02-02',
      health: 'Good',
      progress: 60,
      image: 'https://images.pexels.com/photos/4503271/pexels-photo-4503271.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: '3',
      name: 'Marigolds',
      type: 'Flower',
      plantedDate: '2024-01-10',
      nextWatering: '2024-02-03',
      health: 'Needs Attention',
      progress: 40,
      image: 'https://images.pexels.com/photos/1409999/pexels-photo-1409999.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  const navigationItems = [
    { id: 'home', label: 'Home', icon: Sprout },
    { id: 'tutorials', label: 'Tutorials', icon: Play },
    { id: 'dashboard', label: 'My Plants', icon: BarChart3 },
    { id: 'shop', label: 'Shop', icon: ShoppingCart }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getHealthColor = (health: string) => {
    switch (health) {
      case 'Excellent': return 'text-green-600';
      case 'Good': return 'text-blue-600';
      case 'Needs Attention': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const filteredTutorials = selectedCategory === 'all' 
    ? tutorials 
    : tutorials.filter(tutorial => tutorial.category.toLowerCase() === selectedCategory.toLowerCase());

  const renderHome = () => (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-green-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Grow Your 
                  <span className="text-green-600"> Urban Garden</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Learn from expert farmers through video tutorials, track your plants, and shop for everything you need - all in one place.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setActiveSection('tutorials')}
                  className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Start Learning
                </button>
                <button 
                  onClick={() => setActiveSection('shop')}
                  className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-green-600 hover:text-white transition-all duration-300"
                >
                  Browse Shop
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://images.pexels.com/photos/4503271/pexels-photo-4503271.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Urban Garden" 
                  className="w-full h-80 object-cover rounded-xl"
                />
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-900">Indoor Herb Garden</h3>
                  <p className="text-gray-600">Perfect for beginners</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Why Choose FarmMentor?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We connect urban gardeners with real farmers to provide authentic, practical guidance for growing in small spaces.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Play,
              title: 'Farmer-Led Tutorials',
              description: 'Learn from experienced farmers with step-by-step video guides tailored for small spaces.',
              color: 'bg-blue-50 text-blue-600'
            },
            {
              icon: BarChart3,
              title: 'Plant Care Dashboard',
              description: 'Track your plants\' progress, get watering reminders, and monitor their health.',
              color: 'bg-green-50 text-green-600'
            },
            {
              icon: ShoppingCart,
              title: 'Integrated Shop',
              description: 'Buy seeds, fertilizers, and equipment directly linked to your learning materials.',
              color: 'bg-purple-50 text-purple-600'
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className={`w-16 h-16 rounded-xl ${feature.color} flex items-center justify-center mb-6`}>
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Users, number: '50K+', label: 'Happy Gardeners' },
              { icon: Play, number: '500+', label: 'Video Tutorials' },
              { icon: Award, number: '98%', label: 'Success Rate' },
              { icon: Leaf, number: '100K+', label: 'Plants Grown' }
            ].map((stat, index) => (
              <div key={index} className="space-y-4">
                <stat.icon className="w-12 h-12 mx-auto opacity-80" />
                <div className="text-3xl font-bold">{stat.number}</div>
                <div className="text-green-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  const renderTutorials = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Video Tutorials</h1>
        <p className="text-xl text-gray-600">Learn from expert farmers with hands-on video guides</p>
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-3">
          {['all', 'vegetables', 'herbs', 'flowers', 'sustainability'].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Tutorial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredTutorials.map((tutorial) => (
          <div key={tutorial.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="relative">
              <img src={tutorial.thumbnail} alt={tutorial.title} className="w-full h-48 object-cover" />
              <div className="absolute top-4 right-4 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                {tutorial.duration}
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                <Play className="w-12 h-12 text-white opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(tutorial.difficulty)}`}>
                  {tutorial.difficulty}
                </span>
                <div className="flex items-center space-x-1">
                  {renderStars(tutorial.rating)}
                  <span className="text-sm text-gray-600 ml-1">{tutorial.rating}</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{tutorial.title}</h3>
              <p className="text-gray-600 text-sm mb-3">by {tutorial.farmer}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{tutorial.views} views</span>
                <span>{tutorial.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderDashboard = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">My Plant Dashboard</h1>
        <p className="text-xl text-gray-600">Track your garden's progress and get personalized care tips</p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        {[
          { label: 'Total Plants', value: myPlants.length, color: 'bg-green-50 text-green-600' },
          { label: 'Healthy Plants', value: myPlants.filter(p => p.health === 'Excellent').length, color: 'bg-blue-50 text-blue-600' },
          { label: 'Need Attention', value: myPlants.filter(p => p.health === 'Needs Attention').length, color: 'bg-red-50 text-red-600' },
          { label: 'Avg Progress', value: `${Math.round(myPlants.reduce((acc, p) => acc + p.progress, 0) / myPlants.length)}%`, color: 'bg-purple-50 text-purple-600' }
        ].map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
            <div className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center mb-4`}>
              <Leaf className="w-6 h-6" />
            </div>
            <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
            <div className="text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Plant Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {myPlants.map((plant) => (
          <div key={plant.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <img src={plant.image} alt={plant.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold text-gray-900">{plant.name}</h3>
                <span className={`text-sm font-medium ${getHealthColor(plant.health)}`}>
                  {plant.health}
                </span>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Type: {plant.type}</span>
                  <span>Planted: {new Date(plant.plantedDate).toLocaleDateString()}</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Growth Progress</span>
                    <span>{plant.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${plant.progress}%` }}
                    ></div>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg p-3">
                  <div className="text-sm text-blue-800 font-medium">Next Watering</div>
                  <div className="text-sm text-blue-600">{new Date(plant.nextWatering).toLocaleDateString()}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Plant Button */}
      <div className="mt-12 text-center">
        <button className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
          Add New Plant
        </button>
      </div>
    </div>
  );

  const renderShop = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Garden Shop</h1>
        <p className="text-xl text-gray-600">Everything you need for your urban garden</p>
      </div>

      {/* Category Tabs */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-3">
          {['All', 'Seeds', 'Fertilizers', 'Equipment'].map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all duration-300"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="relative">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              {!product.inStock && (
                <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded text-sm">
                  Out of Stock
                </div>
              )}
            </div>
            <div className="p-6">
              <div className="mb-3">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                  {product.category}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
              <div className="flex items-center space-x-1 mb-3">
                {renderStars(product.rating)}
                <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-green-600">${product.price}</span>
                <button 
                  disabled={!product.inStock}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    product.inStock 
                      ? 'bg-green-600 text-white hover:bg-green-700 transform hover:scale-105' 
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'home': return renderHome();
      case 'tutorials': return renderTutorials();
      case 'dashboard': return renderDashboard();
      case 'shop': return renderShop();
      default: return renderHome();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="bg-green-600 p-2 rounded-xl">
                <Sprout className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">FarmMentor</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id as any)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-green-100 text-green-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-600 hover:text-gray-900 p-2"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <div className="space-y-2">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveSection(item.id as any);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center space-x-2 w-full px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                      activeSection === item.id
                        ? 'bg-green-100 text-green-700'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-green-600 p-2 rounded-xl">
                  <Sprout className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">FarmMentor</span>
              </div>
              <p className="text-gray-400">
                Empowering urban gardeners with expert farmer guidance and quality supplies.
              </p>
            </div>
            
            {[
              {
                title: 'Learn',
                links: ['Video Tutorials', 'Plant Guides', 'Beginner Tips', 'Advanced Techniques']
              },
              {
                title: 'Shop',
                links: ['Seeds', 'Fertilizers', 'Equipment', 'Gift Cards']
              },
              {
                title: 'Support',
                links: ['Contact Us', 'FAQ', 'Shipping Info', 'Returns']
              }
            ].map((section, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-lg font-semibold">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 FarmMentor. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;