import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import CartItem from '../components/CartItem'
import { useState } from 'react'

const Cart = () => {
  const {cart}=useSelector((state)=>state)
  const [TotalAmount, setTotalAmount] = useState(0)


  useEffect(() => {
    const total = cart.reduce((acc, curr) => acc + curr, 0);
    setTotalAmount(total);
  }, [cart]);
  
  
  return (
    <div>
      <div>
        {
          Cart.length > 0 ?
          (
            <div>
              <div>
                {
                  cart.map((item,index)=>{
                    return <CartItem key={cart.id} item={item} cartIndex={index}/>
                  })
                }
              </div>
            </div>
          ):
          (
            <div>
              <h1>Cart Empty</h1>
              <NavLink to="/">
              <button>Shop Now</button>
              </NavLink>
            </div>
          )
        }
      </div>

      <div>
        <div>
          <p>YOUR CART</p>
          <h1>Order Summary</h1>
          <span>Total Item: {cart.length}</span>
        </div>

        <div>
          <span>Total Amount:{TotalAmount}</span>
        </div>
      </div>
    </div>
  )
}

export default Cart