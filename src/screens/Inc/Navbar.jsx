import React from 'react'
import login from '../../assets/images/login.svg';
import cart from '../../assets/images/cart.svg';
import { Icon } from '@iconify/react';
import ScrollMenu from '../ScrollMenu';
import { Link } from 'react-router-dom';



const Navbar = () => {
  return (
    <>
    
     <div className='xl:w-11/12 lg:w-11/12 m-auto px-2 pt-4'>
     <nav className='grid lg:grid-cols-2 items-center'>
      <div>
       <p className='text-[32px] font-semibold uppercase'>TrendLoom</p>
      </div>
      <div>
       <ul className='xl:flex space-x-3 justify-end items-center md:flex sm:block'>
        <Link to='/' className='hover:text-[#343434]  duration-300 hover:shadow-lg px-5 rounded-full'><li>About Us</li></Link>
        <Link to='/' className='hover:text-[#343434] duration-300 hover:shadow-lg px-5 rounded-full'><li>Blog</li></Link>
        <Link to='/' className='hover:text-[#343434] duration-300 hover:shadow-lg px-5 rounded-full'><li>Products</li></Link>
        <div className='flex gap-3'> 
          <img src={login} alt='' className='w-[32px] bg-white rounded-full hover:border-[#000] hover:border-1 border-1 border-[#fff] duration-300'/>
          <img src={cart} alt='' className='w-[32px] bg-white rounded-full hover:border-[#000] hover:border-1 border-1 border-[#fff] duration-300'/>
        </div>
    
        
       </ul>
      </div>
      
     </nav>
     <div className='nav-2 mt-3'>
      <div className='grid lg:grid-cols-2 items-center gap-5'>
        <div className='flex gap-3 '>
          <div className="flex items-center w-full  mx-auto bg-white rounded-full px-4 py-2 border-2">
      <input
        type="text"
        placeholder="Search Cloth"
        className="w-full bg-transparent focus:outline-none text-sm"
      />
      <Icon icon="mdi:magnify" className="text-gray-600" width="20" height="20" />
    </div>
    <div className="relative w-full  mx-auto">
      <select
        className="appearance-none w-full bg-white text-black text-sm py-2 pl-4 pr-10 rounded-full  focus:outline-none"
        defaultValue=""
      >
        <option value="" disabled>Clothing</option>
        <option value="men">Men</option>
        <option value="women">Women</option>
        <option value="kids">Kids</option>
      </select>

      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
        <Icon icon="mdi:chevron-down" className="text-black" width="20" height="20" />
      </div>
    </div>
        </div>
    <ScrollMenu />
      </div>
     </div>
     </div>
    </>
  )
}

export default Navbar