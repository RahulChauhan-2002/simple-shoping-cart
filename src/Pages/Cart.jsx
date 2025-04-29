import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [TotalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const total = cart.reduce((acc, curr) => acc + curr.price, 0);
    setTotalAmount(total.toFixed(2));
  }, [cart]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {
        cart.length > 0 ? (
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
            
            {/* Left Side: Cart Items */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {cart.map((item, index) => (
                <CartItem key={item.id} item={item} cartIndex={index} />
              ))}
            </div>

            {/* Right Side: Order Summary */}
            <div className="bg-white p-6 rounded-lg shadow-md h-fit">
              <p className="text-gray-600 text-sm font-medium uppercase">Your Cart</p>
              <h2 className="text-2xl font-bold mb-3">Order Summary</h2>
              <p className="text-gray-700 text-sm mb-2">Total Items: <span className="font-semibold">{cart.length}</span></p>
              <p className="text-green-600 text-xl font-bold">Total Amount: ₹{TotalAmount}</p>
              <button className="w-full mt-6 bg-green-600 text-white py-2 px-4 rounded-md text-sm font-semibold hover:bg-green-700 transition duration-300 ease-in-out">
                Checkout Now
              </button>

            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-screen text-center">
            <h1 className="text-3xl font-semibold text-gray-700 mb-4">Your Cart is Empty</h1>
            <NavLink to="/">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
                Shop Now
              </button>
            </NavLink>
          </div>
        )
      }
    </div>
  );
};

export default Cart;
