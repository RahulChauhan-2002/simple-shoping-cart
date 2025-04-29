import React from 'react';
import { FaCartShopping } from "react-icons/fa6";
import logo from '../assets/logo.jpg';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { cart } = useSelector((state) => state);

  return (
    <div className="bg-slate-900 text-white shadow-md">
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto px-4">
        
        {/* Logo */}
        <NavLink to='/'>
          <div className="w-28 h-14 flex items-center">
            <img src={logo} alt="Logo" className="h-full w-full object-contain" />
          </div>
        </NavLink>

        {/* Navigation Links */}
        <div className="flex items-center font-medium space-x-6">
          <NavLink to="/" className="hover:text-green-400 transition">
            Home
          </NavLink>

          <NavLink to="/Cart" className="relative hover:text-green-400 transition">
            <FaCartShopping className="text-2xl" />

            {/* Cart Badge */}
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full animate-bounce">
                {cart.length}
              </span>
            )}
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
