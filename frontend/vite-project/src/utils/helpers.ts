export const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Beginner': return 'bg-green-100 text-green-800';
    case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
    case 'Advanced': return 'bg-red-100 text-red-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

export const getHealthColor = (health: string) => {
  switch (health) {
    case 'Excellent': return 'text-green-600';
    case 'Good': return 'text-blue-600';
    case 'Needs Attention': return 'text-red-600';
    default: return 'text-gray-600';
  }
};
