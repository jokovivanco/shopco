import { ProductGrid } from '@/components/ProductGrid';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-2xl font-bold text-gray-900">ShopCo</h1>
            <nav className="flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-gray-900">Products</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Categories</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">About</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Products</h2>
          <p className="text-gray-600">Discover our carefully curated selection of premium items</p>
        </div>
        
        <ProductGrid />
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">ShopCo</h3>
            <p className="text-gray-400">Your trusted e-commerce destination</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
