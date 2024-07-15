import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const fetchProductDetails = async () => {
    try {
      const response = await fetch(`http://localhost:3030/product/get/${id}`);
      const result = await response.json();
      setProduct(result.data);
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-details bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">{product.productname}</h1>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="h-40 w-full bg-gray-300 mb-4">Image Placeholder</div>
          <p className="text-gray-700">${product.productprice}</p>
          <p className="text-gray-500">{product.productcategory}</p>
          <p className="text-gray-700 mt-2">{product.productdescription}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
