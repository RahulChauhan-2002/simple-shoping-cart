import React from 'react'
import Spinner from '../components/Spinner'
import Product from '../components/Product'
import { useState, useEffect } from 'react'

const Home = () => {
  const API_URL="https://fakestoreapi.com/products";
  const [Loading, setLoading] = useState(false)
  const [cartData, setcartData] = useState([])

  const fetchData=async ()=>{
    setLoading(true);
    try {
      const res=await fetch(API_URL)
      const data=await res.json()
      setcartData(data)
    } catch (error) {
      console.log("error",error)
      setcartData([])
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])
  
  return (
    <div>
      {
        Loading ? <Spinner/>:
        cartData.length>0?
        (
          <div>
            {
              cartData.map((post) => (
                <Product key={post.id} post={post} />
              ))              
            }
          </div>
        ):
        <div>
          <p>No data present</p>
        </div>
        
      }
    </div>
  )
}

export default Home