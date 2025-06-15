import React from 'react';
import { Plant } from '../../types/interfaces';
import PlantCard from './PlantCard';
import { Users, Award, Leaf } from 'lucide-react';

interface DashboardProps {
  plants: Plant[];
}

const Dashboard: React.FC<DashboardProps> = ({ plants }) => {
  const stats = [
    {
      icon: Users,
      label: 'Total Plants',
      value: plants.length
    },
    {
      icon: Award,
      label: 'Healthy Plants',
      value: plants.filter(plant => plant.health === 'Excellent' || plant.health === 'Good').length
    },
    {
      icon: Leaf,
      label: 'Need Attention',
      value: plants.filter(plant => plant.health === 'Needs Attention').length
    }
  ];

  return (
    <div className="space-y-8">
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-3xl font-semibold text-gray-900">{stat.value}</p>
              </div>
              <stat.icon className="h-8 w-8 text-green-500" />
            </div>
          </div>
        ))}
      </div>

      {/* Plants Grid */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">My Plants</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plants.map(plant => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
