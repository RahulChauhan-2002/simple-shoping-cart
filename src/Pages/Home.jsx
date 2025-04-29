import React, { useState, useEffect } from 'react';
import Spinner from '../components/Spinner';
import Product from '../components/Product';

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [Loading, setLoading] = useState(false);
  const [cartData, setCartData] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setCartData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setCartData([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-6">
      {Loading ? (
        <div className="flex justify-center items-center min-h-[60vh]">
          <Spinner />
        </div>
      ) : cartData.length > 0 ? (
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cartData.map((post) => (
            <Product key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-[60vh]">
          <p className="text-xl text-gray-600">No data present</p>
        </div>
      )}
    </div>
  );
};

export default Home;
