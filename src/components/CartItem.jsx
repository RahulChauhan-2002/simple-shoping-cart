import React from 'react';
import toast from 'react-hot-toast';
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { removeFromcart } from '../Redux/Slices/CartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeItem = () => {
    dispatch(removeFromcart(item.id));
    toast.error("Item removed from cart");
  };

  return (
    <div className="flex items-center gap-6 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
      <div className="w-32 h-32 flex-shrink-0 overflow-hidden rounded-md border">
        <img src={item.image} alt={item.title} className="h-full w-full object-contain" />
      </div>

      <div className="flex flex-col justify-between w-full">
        <h1 className="text-gray-800 font-semibold text-lg truncate">{item.title}</h1>
        <p className="text-gray-500 text-sm my-2">
          {item.description.split(" ").slice(0, 12).join(" ") + " ..."}
        </p>

        <div className="flex justify-between items-center">
          <p className="text-green-600 font-bold text-md">${item.price}</p>
          <button
            onClick={removeItem}
            className="text-red-500 hover:text-red-700 transition text-xl"
            title="Remove from cart"
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
