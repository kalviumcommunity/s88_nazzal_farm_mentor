import React from 'react';
import { Product } from '../../types/interfaces';
import ProductCard from './ProductCard';

interface ShopPageProps {
  products: Product[];
}

const ShopPage: React.FC<ShopPageProps> = ({ products }) => {
  const categories = ['all', ...new Set(products.map(product => product.category))];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-900">Shop</h2>
        <select className="rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500">
          <option value="">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
