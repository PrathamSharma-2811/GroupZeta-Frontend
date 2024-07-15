import React from 'react';

const Cart = ({ cartItems, removeFromCart, increaseQuantity, decreaseQuantity }) => {
  const total = cartItems.reduce((acc, item) => acc + parseFloat(item.price) * item.quantity, 0);

  return (
    <div className="cart bg-gray-100 p-4 shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Shopping Cart</h1>
      <div>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b border-gray-600 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Quantity
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Remove
                </th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 border-b border-gray-200">
                    <img src={item.image} alt={item.name} className="w-12 h-12 object-cover inline-block mr-4" />
                    {item.name}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200">${item.price}</td>
                  <td className="px-6 py-4 border-b border-gray-200">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="bg-gray-300 text-gray-700 px-2 py-1 rounded-lg mr-2"
                    >
                      -
                    </button>
                    {item.quantity}
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="bg-gray-300 text-gray-700 px-2 py-1 rounded-lg ml-2"
                    >
                      +
                    </button>
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200 text-right">
                    ${parseFloat(item.price) * item.quantity}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200 text-right">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <div className="mt-8 flex justify-end">
          <div className="text-xl font-bold">Total: ${total.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
