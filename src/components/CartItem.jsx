import React from 'react'
import toast from 'react-hot-toast';
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import {removeFromcart} from '../Redux/Slices/CartSlice'

const CartItem = ({item, index}) => {
  const dispatch=useDispatch();

  const removeItem=()=>{
    dispatch(removeFromcart(item.id))
    toast.error("Item removed from cart")
  }
  return (
    <div>
      <div>
        <div>
          <img src={item.image} alt="" />
        </div>
        <div>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <div>
            <p>{item.price}</p>
            <div onClick={removeItem}>
              <MdDelete />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem