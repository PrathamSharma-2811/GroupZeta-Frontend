import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png'

const Navbar = () => {
const linkclass = ({isActive}) =>{
    return isActive ? 'text-white bg-black hover:bg-gray-900 rounded-md px-3 py-2' : 'text-white hover:bg-gray-900 rounded-md px-3 py-2'
}

  return (
    <nav className="bg-green-950  border-b border-gray-700">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <img className="h-10 w-auto" src={logo} alt="E-Shop" />
              <span className="hidden md:block text-white text-2xl font-bold font-mono ml-2">ZetaShop</span>
            </NavLink>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink to="/" className={linkclass}>
                  Home
                </NavLink>
                <NavLink to="/products" className={linkclass}>
                  Products
                </NavLink>
                <NavLink to="/cart" className={linkclass}>
                  Cart
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
