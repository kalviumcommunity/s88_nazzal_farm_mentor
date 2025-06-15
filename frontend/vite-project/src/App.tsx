import React, { useState } from 'react';
import Navigation from './components/layout/Navigation';
import HomePage from './components/home/HomePage';
import TutorialList from './components/tutorials/TutorialList';
import Dashboard from './components/dashboard/Dashboard';
import ShopPage from './components/shop/ShopPage';
import { Tutorial, Product, Plant } from './types/interfaces';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'home' | 'tutorials' | 'dashboard' | 'shop'>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return <HomePage featuredTutorials={tutorials} />;
      case 'tutorials':
        return <TutorialList tutorials={tutorials} />;
      case 'dashboard':
        return <Dashboard plants={myPlants} />;
      case 'shop':
        return <ShopPage products={products} />;
      default:
        return <HomePage featuredTutorials={tutorials} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50/50 to-blue-50/30">
      <div className="relative">
        {/* Background patterns */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(52,211,153,0.1),transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(16,185,129,0.1),transparent_50%)] pointer-events-none" />
        
        {/* Content */}
        <Navigation 
          activeSection={activeSection} 
          setActiveSection={setActiveSection}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
        <main className="relative pt-16 min-h-[calc(100vh-4rem)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;