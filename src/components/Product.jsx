import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTocart, removeFromcart } from '../Redux/Slices/CartSlice';
import { toast } from 'react-hot-toast';

const Product = ({ post }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addTocart(post));
    toast.success("Item added to cart");
  };

  const removeFromCart = () => {
    dispatch(removeFromcart(post.id));
    toast.error("Item removed from cart");
  };

  const isInCart = cart.some((item) => item.id === post.id);

  return (
    <div className="flex flex-col items-center justify-between gap-3 bg-white rounded-lg p-4 shadow-lg transition-transform transform hover:scale-105">
      
      {/* Title */}
      <p className="text-gray-800 font-semibold text-lg text-center truncate w-44">
        {post.title}
      </p>

      {/* Description */}
      <p className="text-gray-500 text-sm text-center w-44">
        {post.description.split(" ").slice(0, 10).join(" ") + " ..."}
      </p>

      {/* Product Image */}
      <div className="h-40 w-40 flex items-center justify-center overflow-hidden">
        <img src={post.image} alt={post.title} className="object-contain h-full w-full" />
      </div>

      {/* Price and Button */}
      <div className="flex justify-between items-center w-full mt-2">
        <p className="text-green-600 font-bold text-md">${post.price}</p>

        {isInCart ? (
          <button
            onClick={removeFromCart}
            className="text-sm px-3 py-1 border-2 border-gray-700 rounded-full text-gray-700 hover:bg-gray-700 hover:text-white transition"
          >
            Remove Item
          </button>
        ) : (
          <button
            onClick={addToCart}
            className="text-sm px-3 py-1 border-2 border-gray-700 rounded-full text-gray-700 hover:bg-gray-700 hover:text-white transition"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
