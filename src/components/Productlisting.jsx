import React, { useState } from 'react';

 
const products = [
  { id: 1, name: 'Product 1', price: 10, image: 'https://assets.ajio.com/medias/sys_master/root/20240621/PSPe/66759fe86f60443f3170c0ad/-473Wx593H-469635025-green-MODEL5.jpg', category: 'Category 1' },
  { id: 2, name: 'Product 2', price: 20, image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRx7r3yurInj3l2ccMaDnokChFI5C4DsAuutTMo4PfsyH_zrNIgaZa7fmTiF7AQYpaLULYLuPOyNQnQ1dokpKNNjdFplKNoIr5KmSJ-aABLqQpm7qaJBkJu', category: 'Category 2' },
  // Add more products as needed
];
 
const categories = [...new Set(products.map(product => product.category))];
 
const ProductListing = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState([1, 100]);
 
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };
 
  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setPriceRange(prevRange => name === 'min' ? [value, prevRange[1]] : [prevRange[0], value]);
  };
 
  const filterProducts = () => {
    const filtered = products.filter(product => {
      return (
        (!selectedCategory || product.category === selectedCategory) &&
        product.price >= priceRange[0] &&
        product.price <= priceRange[1]
      );
    });
    setFilteredProducts(filtered);
  };
 
  return (
    <div className="product-listing bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">View All Products</h1>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Category</label>
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="block w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Price Range</label>
          <div className="flex space-x-4">
            <input
              type="number"
              name="min"
              value={priceRange[0]}
              onChange={handlePriceChange}
              className="block w-1/2 bg-gray-100 border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Min Price"
            />
            <input
              type="number"
              name="max"
              value={priceRange[1]}
              onChange={handlePriceChange}
              className="block w-1/2 bg-gray-100 border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Max Price"
            />
          </div>
        </div>
        <button
          onClick={filterProducts}
          className="bg-green-900 text-white py-2 px-4 rounded-md hover:bg-green-700 mb-8"
        >
          Apply Filters
        </button>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white p-6 rounded-lg shadow">
              <img src={product.image} alt={product.name} className="h-40 w-full object-cover mb-4" />
              <h2 className="text-2xl font-bold text-gray-900">{product.name}</h2>
              <p className="text-gray-700">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
 
export default ProductListing;