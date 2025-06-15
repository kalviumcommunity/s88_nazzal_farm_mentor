import React from 'react';
import { Tutorial } from '../../types/interfaces';
import TutorialCard from '../tutorials/TutorialCard';
import { Play, BarChart3, ShoppingCart } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface HomePageProps {
  featuredTutorials: Tutorial[];
}

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
}

const features: Feature[] = [
  {
    icon: Play,
    title: 'Expert Tutorials',
    description: 'Learn from experienced urban farmers through our curated video tutorials.',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: BarChart3,
    title: 'Plant Dashboard',
    description: 'Track and monitor your plants\' growth with our smart dashboard.',
    gradient: 'from-emerald-500 to-teal-500'
  },
  {
    icon: ShoppingCart,
    title: 'Garden Shop',
    description: 'Get all your gardening supplies from our trusted marketplace.',
    gradient: 'from-teal-500 to-green-500'
  }
];

const HomePage: React.FC<HomePageProps> = ({ featuredTutorials }) => {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <div className="relative py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Grow Your
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"> Urban Garden</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Learn from expert farmers through video tutorials, track your plants, and shop for everything you need - all in one place.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-green-200">
                Start Learning
              </button>
              <button className="px-8 py-4 border-2 border-green-600 text-green-600 rounded-xl font-semibold hover:bg-green-50 transition-all duration-200">
                Browse Shop
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:rotate-0 transition-transform duration-500 hover:shadow-green-200/50 border border-green-100">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/4503271/pexels-photo-4503271.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Urban Garden"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="bg-white p-6">
                <h3 className="text-xl font-semibold text-gray-900">Indoor Herb Garden</h3>
                <p className="text-green-600">Perfect for beginners</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Why Choose FarmMentor?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We connect urban gardeners with real farmers to provide authentic, practical guidance for growing in small spaces.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 text-white`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Tutorials */}
      <div className="py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Tutorials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTutorials.slice(0, 3).map(tutorial => (
            <TutorialCard key={tutorial.id} tutorial={tutorial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
