import React from 'react';
import { Plant } from '../../types/interfaces';
import { getHealthColor } from '../../utils/helpers';

interface PlantCardProps {
  plant: Plant;
}

const PlantCard: React.FC<PlantCardProps> = ({ plant }) => {
  const healthColorClass = getHealthColor(plant.health);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <img 
          src={plant.image} 
          alt={plant.name}
          className="w-full h-full object-cover"
        />
        <div className={`absolute top-2 right-2 px-2 py-1 rounded-full ${healthColorClass} bg-white bg-opacity-90`}>
          {plant.health}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{plant.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{plant.type}</p>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Planted:</span>
            <span className="font-medium">{new Date(plant.plantedDate).toLocaleDateString()}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Next Watering:</span>
            <span className="font-medium">{new Date(plant.nextWatering).toLocaleDateString()}</span>
          </div>
          
          <div className="mt-4">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-600">Growth Progress</span>
              <span className="font-medium">{plant.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-green-500 h-2 rounded-full" 
                style={{ width: `${plant.progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
