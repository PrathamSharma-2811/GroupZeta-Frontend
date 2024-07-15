import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import MainLayouts from './layouts/MainLayouts';
import Home from './components/Home';
import ProductListing from './components/Productlisting';
import ProductDetails from './components/Productdetails';
import Cart from './components/Cart';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayouts />}>
       <Route index element={<Home />} />
        <Route path="/products" element={<ProductListing />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} /> 
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
