import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import logo from '../assets/logo.jpg'
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
      <div className='flex justify-between'>
        <NavLink to='/'>
          <div className='w-[150px] h-[100px]'>
            <img src={logo} alt="Logo" className='w-full h-full object-contain' />
          </div>
        </NavLink>

        <div>
          <NavLink to='/'>
             <p>Home</p>
          </NavLink>
          <NavLink to='/Cart'>
            <FaCartShopping />
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar