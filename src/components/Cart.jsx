import React from 'react';
 
const cartItems = [
  { id: 1, name: 'Product 1', price: '$10', quantity: 1 ,image: 'https://assets.ajio.com/medias/sys_master/root/20240621/PSPe/66759fe86f60443f3170c0ad/-473Wx593H-469635025-green-MODEL5.jpg'},
  { id: 2, name: 'Product 2', price: '$20', quantity: 2 ,image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRx7r3yurInj3l2ccMaDnokChFI5C4DsAuutTMo4PfsyH_zrNIgaZa7fmTiF7AQYpaLULYLuPOyNQnQ1dokpKNNjdFplKNoIr5KmSJ-aABLqQpm7qaJBkJu'},
  // Add more items as needed
];
 
const Cart = ({ removeFromCart }) => {
  const total = cartItems.reduce((acc, item) => acc + parseFloat(item.price.slice(1)) * item.quantity, 0);
 
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
<th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
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
<td className="px-6 py-4 border-b border-gray-200">{item.price}</td>
<td className="px-6 py-4 border-b border-gray-200">{item.quantity}</td>
<td className="px-6 py-4 border-b border-gray-200 text-right">
                    ${parseFloat(item.price.slice(1)) * item.quantity}
</td>
<td className="px-6 py-4 border-b border-gray-200 text-right">
<button onClick={() => removeFromCart(item.id)} className="bg-red-500 text-white px-4 py-2 rounded-lg">
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