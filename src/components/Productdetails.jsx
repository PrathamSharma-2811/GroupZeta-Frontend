import React from 'react';
import { useParams } from 'react-router-dom';

const products = [
  { id: 1, name: 'Product 1', price: '$10', image: 'images/product1.jpg', description: 'This is a great product.' },
  { id: 2, name: 'Product 2', price: '$20', image: 'images/product2.jpg', description: 'This is another great product.' },
  // Add more products as needed
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-details bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row">
          <img src={product.image} alt={product.name} className="h-64 w-full lg:w-1/2 object-cover mb-4 lg:mb-0 lg:mr-4" />
          <div className="lg:flex-1">
            <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
            <p className="mt-2 text-lg text-gray-700">{product.price}</p>
            <p className="mt-4 text-gray-700">{product.description}</p>
            <button className="mt-6 bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
