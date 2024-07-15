import React from 'react';

const cartItems = [
  { id: 1, name: 'Product 1', price: '$10', quantity: 1 },
  { id: 2, name: 'Product 2', price: '$20', quantity: 2 },
  // Add more items as needed
];

const Cart = () => {
  const total = cartItems.reduce((acc, item) => acc + item.price.slice(1) * item.quantity, 0);

  return (
    <div className="cart bg-neutral-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-gray-900">Shopping Cart</h1>
        <div className="mt-8">
          <table className="min-w-full bg-slate-200">
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
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 border-b border-gray-200">{item.name}</td>
                  <td className="px-6 py-4 border-b border-gray-200">{item.price}</td>
                  <td className="px-6 py-4 border-b border-gray-200">{item.quantity}</td>
                  <td className="px-6 py-4 border-b border-gray-200 text-right">
                    ${item.price.slice(1) * item.quantity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-8 flex justify-end">
            <div className="text-xl font-bold">Total: ${total}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
