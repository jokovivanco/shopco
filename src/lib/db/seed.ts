import { db } from './index';
import { products, type NewProduct } from './schema';

const sampleProducts: NewProduct[] = [
  {
    name: 'Wireless Bluetooth Headphones',
    description: 'High-quality wireless headphones with noise cancellation and 30-hour battery life.',
    price: '99.99',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
    category: 'Electronics',
    stock: 25,
    featured: true,
  },
  {
    name: 'Organic Cotton T-Shirt',
    description: 'Comfortable and sustainable organic cotton t-shirt in various colors.',
    price: '29.99',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500',
    category: 'Clothing',
    stock: 50,
    featured: false,
  },
  {
    name: 'Stainless Steel Water Bottle',
    description: 'Insulated stainless steel water bottle keeps drinks hot or cold for hours.',
    price: '24.99',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500',
    category: 'Accessories',
    stock: 35,
    featured: true,
  },
  {
    name: 'Ergonomic Office Chair',
    description: 'Comfortable ergonomic office chair with lumbar support and adjustable height.',
    price: '199.99',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500',
    category: 'Furniture',
    stock: 15,
    featured: false,
  },
  {
    name: 'Wireless Phone Charger',
    description: 'Fast wireless charging pad compatible with all Qi-enabled devices.',
    price: '39.99',
    image: 'https://images.unsplash.com/photo-1609592363932-22c2a5018e4f?w=500',
    category: 'Electronics',
    stock: 40,
    featured: true,
  },
  {
    name: 'Premium Coffee Beans',
    description: 'Single-origin arabica coffee beans with rich flavor and smooth finish.',
    price: '18.99',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500',
    category: 'Food & Beverage',
    stock: 60,
    featured: false,
  },
  {
    name: 'Smart Fitness Watch',
    description: 'Advanced fitness tracker with heart rate monitoring and GPS.',
    price: '249.99',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500',
    category: 'Electronics',
    stock: 20,
    featured: true,
  },
  {
    name: 'Leather Laptop Bag',
    description: 'Professional leather laptop bag with multiple compartments and shoulder strap.',
    price: '89.99',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500',
    category: 'Accessories',
    stock: 30,
    featured: false,
  },
];

export async function seedProducts() {
  try {
    console.log('Starting database seeding...');
    
    // Clear existing products
    await db.delete(products);
    
    // Insert sample products
    await db.insert(products).values(sampleProducts);
    
    console.log('Database seeded successfully with', sampleProducts.length, 'products');
  } catch (error) {
    console.error('Error seeding database:', error);
    throw error;
  }
}

// Run seeding if this file is executed directly
if (require.main === module) {
  seedProducts().then(() => {
    console.log('Seeding completed');
    process.exit(0);
  }).catch((error) => {
    console.error('Seeding failed:', error);
    process.exit(1);
  });
}