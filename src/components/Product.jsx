import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addTocart, removeFromcart} from '../Redux/Slices/CartSlice'
import { toast } from 'react-hot-toast';


const Product = ({post}) => {
  const cart = useSelector((state) => state.cart);
  const dispatch=useDispatch();

  const addtoCart=()=>{
    dispatch(addTocart(post))
    toast.success("Item added to cart")
  }
  const removeFromCart=()=>{
    dispatch(removeFromcart(post.id))
    toast.error("Item removed from cart")
  }
  return (
    <div>
      <div>
        <p>{post.title}</p>
      </div>
      <div>
        <p>{post.description}</p>
      </div>
      <div>
        <img src={post.image} alt="" />
      </div>
      <div>
        <p>{post.price}</p>
      </div>
      <div>
        {
          cart.some((p)=>p.id===post.id)?
          (
            <button onClick={removeFromCart}>
              Remove From cart
            </button>
          ):
          (
            <button onClick={addtoCart}>
              Add to cart
            </button>
          )
        }
      </div>
    </div>
  )
}

export default Product