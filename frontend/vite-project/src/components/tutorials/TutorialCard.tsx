import React from 'react';
import { Star, Clock, User } from 'lucide-react';
import { Tutorial } from '../../types/interfaces';
import { getDifficultyColor } from '../../utils/helpers';

interface TutorialCardProps {
  tutorial: Tutorial;
}

const TutorialCard: React.FC<TutorialCardProps> = ({ tutorial }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating)
            ? 'text-yellow-400 fill-current'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-green-100">
      <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
      <div className="relative">
        {/* Image container */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={tutorial.thumbnail}
            alt={tutorial.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-white">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{tutorial.duration}</span>
            </div>
            <div
              className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(
                tutorial.difficulty
              )}`}
            >
              {tutorial.difficulty}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-200">
            {tutorial.title}
          </h3>

          <div className="flex items-center text-gray-600 space-x-4">
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span className="text-sm">{tutorial.farmer}</span>
            </div>
            <div className="flex items-center space-x-1 text-sm">
              <div className="flex">{renderStars(tutorial.rating)}</div>
              <span className="text-gray-500">({tutorial.views})</span>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-100">
            <button className="w-full py-2 text-green-600 font-medium hover:text-green-700 transition-colors duration-200">
              Watch Tutorial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialCard;
