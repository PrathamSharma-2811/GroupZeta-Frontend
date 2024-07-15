import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayouts from "./layouts/MainLayouts";
import Home from './components/Home';
import ProductListing from './components/Productlisting';
import ProductDetails from './components/Productdetails';
import Cart from './components/Cart';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayouts />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
