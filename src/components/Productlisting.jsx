import React, { useEffect, useState } from 'react';
import Cart from './Cart';

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState([1, 1000]);
  const [cartItems, setCartItems] = useState([]);
  const [newProduct, setNewProduct] = useState({
    productname: '',
    productprice: '',
    productdescription: '',
    productcategory: '',
  });

 

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:3030/product/get');
      const result = await response.json();
      setProducts(result.data);
      setFilteredProducts(result.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const addNewProduct = async () => {
    try {
      const response = await fetch('http://localhost:3030/product/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      });
      const result = await response.json();
      if (result.success) {
        setProducts([...products, result.data]);
        setFilteredProducts([...filteredProducts, result.data]);
        setNewProduct({ productname: '', productprice: '', productdescription: '', productcategory: '' });
      }
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const updateProduct = async (product) => {
    try {
      const response = await fetch(`http://localhost:3030/product/update/${product._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });
      const result = await response.json();
      if (result.success) {
        fetchProducts();
      }
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const deleteProduct = async (productId) => {
    try {
      const response = await fetch(`http://localhost:3030/product/delete/${product._id}`, {
        method: 'DELETE',
      });
      const result = await response.json();
      if (result.success) {
        fetchProducts();
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setPriceRange((prevRange) =>
      name === 'min' ? [value, prevRange[1]] : [prevRange[0], value]
    );
  };

  const filterProducts = () => {
    const filtered = products.filter((product) => {
      return (
        (!selectedCategory || product.productcategory === selectedCategory) &&
        product.productprice >= priceRange[0] &&
        product.productprice <= priceRange[1]
      );
    });
    setFilteredProducts(filtered);
  };

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item._id === product._id);
    if (existingItem) {
      const updatedCartItems = cartItems.map((item) =>
        item._id === product._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item._id !== productId);
    setCartItems(updatedCartItems);
  };

  const increaseQuantity = (productId) => {
    const updatedCartItems = cartItems.map((item) =>
      item._id === productId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCartItems(updatedCartItems);
  };

  const decreaseQuantity = (productId) => {
    const updatedCartItems = cartItems.map((item) =>
      item._id === productId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedCartItems);
  };

  const handleProductClick = (productId) => {
    history.push(`/productdetails/${productId}`);
  };

  const categories = [...new Set(products.map((product) => product.productcategory))];

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
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
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
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Add New Product</h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Product Name"
              value={newProduct.productname}
              onChange={(e) => setNewProduct({ ...newProduct, productname: e.target.value })}
              className="block w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            <input
              type="number"
              placeholder="Product Price"
              value={newProduct.productprice}
              onChange={(e) => setNewProduct({ ...newProduct, productprice: e.target.value })}
              className="block w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            <input
              type="text"
              placeholder="Product Description"
              value={newProduct.productdescription}
              onChange={(e) => setNewProduct({ ...newProduct, productdescription: e.target.value })}
              className="block w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            <input
              type="text"
              placeholder="Product Category"
              value={newProduct.productcategory}
              onChange={(e) => setNewProduct({ ...newProduct, productcategory: e.target.value })}
              className="block w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            <button
              onClick={addNewProduct}
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
              Add Product
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <div
              key={product._id}
              className="bg-white p-6 rounded-lg shadow cursor-pointer"
              onClick={() => handleProductClick(product._id)}
            >
              <div className="h-40 w-full bg-gray-300 mb-4">Image Placeholder</div>
              <h2 className="text-2xl font-bold text-gray-900">{product.productname}</h2>
              <p className="text-gray-700">${product.productprice}</p>
              <p className="text-gray-500">{product.productcategory}</p>
              <p className="text-gray-700 mt-2">{product.productdescription}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const updatedProduct = {
                    ...product,
                    productname: prompt('Enter new product name:', product.productname),
                    productprice: prompt('Enter new product price:', product.productprice),
                    productdescription: prompt('Enter new product description:', product.productdescription),
                    productcategory: prompt('Enter new product category:', product.productcategory),
                  };
                  updateProduct(updatedProduct);
                }}
                className="bg-yellow-500 text-white px-4 py-2 rounded-lg mt-2 mr-2"
              >
                Update
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  deleteProduct(product._id);
                }}
                className="bg-red-500 text-white px-4 py-2 rounded-lg mt-2"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
      <Cart
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
      />
    </div>
  );
};

export default ProductListing;
