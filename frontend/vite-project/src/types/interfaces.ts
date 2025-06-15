export interface Tutorial {
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

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'Seeds' | 'Fertilizers' | 'Equipment';
  rating: number;
  inStock: boolean;
}

export interface Plant {
  id: string;
  name: string;
  type: string;
  plantedDate: string;
  nextWatering: string;
  health: 'Excellent' | 'Good' | 'Needs Attention';
  progress: number;
  image: string;
}
