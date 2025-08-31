'use client';

import Image from 'next/image';
import { type Product } from '@/lib/db/schema';
import { useCartStore } from '@/lib/store';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem(product);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 w-full">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
        />
        {product.featured && (
          <div className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded text-sm font-medium">
            Featured
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="mb-2">
          <h3 className="font-semibold text-lg text-gray-900 mb-1 line-clamp-2">
            {product.name}
          </h3>
          <p className="text-sm text-gray-600 mb-2 line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
              {product.category}
            </span>
            <span className="text-sm text-gray-600">
              Stock: {product.stock}
            </span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">
            ${product.price}
          </div>
          <button
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
}