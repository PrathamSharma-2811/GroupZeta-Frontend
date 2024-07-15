import React, { useState } from 'react';

const Filter = ({ categories, onFilter }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState([0, 100]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    onFilter(e.target.value, priceRange);
  };

  const handlePriceChange = (e) => {
    const range = e.target.value.split(',').map(Number);
    setPriceRange(range);
    onFilter(selectedCategory, range);
  };

  return (
    <div className="filter bg-white p-6 rounded-lg shadow mb-6">
      <h2 className="text-2xl font-bold mb-4">Filter</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Category</label>
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-gray-700">Price Range</label>
        <input
          type="range"
          min="0"
          max="100"
          value={priceRange.join(',')}
          onChange={handlePriceChange}
          className="mt-1 block w-full bg-gray-100"
        />
        <div className="flex justify-between text-gray-700">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>
    </div>
  );
};

export default Filter;
