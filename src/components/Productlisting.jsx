import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Filter from './Filter';

const products = [
  { id: 1, name: 'Product 1', price: '$10', image: 'images/product1.jpg', category: 'Category 1' },
  { id: 2, name: 'Product 2', price: '$20', image: 'images/product2.jpg', category: 'Category 2' },
  // Add more products as needed
];

const categories = [...new Set(products.map(product => product.category))];

const ProductListing = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilter = (category, priceRange) => {
    const [minPrice, maxPrice] = priceRange;
    const filtered = products.filter(product => {
      const price = parseInt(product.price.slice(1));
      return (
        (!category || product.category === category) &&
        price >= minPrice &&
        price <= maxPrice
      );
    });
    setFilteredProducts(filtered);
  };

  return (
    <div className="product-listing bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Products</h1>
        <Filter categories={categories} onFilter={handleFilter} />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white p-6 rounded-lg shadow">
              <img src={product.image} alt={product.name} className="h-40 w-full object-cover mb-4" />
              <h2 className="text-2xl font-bold text-gray-900">{product.name}</h2>
              <p className="text-gray-700">{product.price}</p>
              <Link to={`/product/${product.id}`} className="mt-4 inline-block text-indigo-600 hover:text-indigo-900">
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
