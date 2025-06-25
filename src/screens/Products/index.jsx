import React from 'react'
import blueshirts from '../../assets/images/blueshirts.jpg';
import blackshirt from '../../assets/images/blackshirt.jpg';

const Products = () => {
    return (
        <div className='xl:w-11/12 lg:w-11/12 m-auto px-2 pt-10'>
            <h2 className='text-[38px] font-medium text-center'>Our Products</h2>
            <p className='text-center'>Recently added shirts!</p>
            <div className='grid xl:grid-cols-3 gap-5 items-center mt-12'>
                <div className='rounded-[20px] bg-white text-center p-3 border-1 border-[#fff]  hover:shadow-xl duration-300 scale-95'>
                <div className='relative'>
                    <div className='bg-black p-2 text-white absolute top-3 right-3 rounded-[10px]'>Sale 20%</div>
                </div>
              <img src={blueshirts} alt='' className='rounded-[20px] w-[100%]' />
              <div className='flex gap-3 justify-center mt-3'>
                <div className='bg-[#f1f1f1] p-1 text-black W-[100%] whitespace-nowrap w-[100%] rounded-[8px]'><p className='text-[12px]'>100% Pure Cotton</p></div>
                <div className='bg-[#f1f1f1] p-1 text-black W-[100%] whitespace-nowrap w-[100%] rounded-[8px]'><p className='text-[12px]'>Super Dry</p></div>
              </div>
              <h3 className='text-[22px] font-medium mt-3 mb-3'>Light Casual Shirts</h3>
              <p className='text-gray-500 font-medium text-[20px]'>₹2400</p>
            </div>
                <div className='rounded-[20px] bg-white text-center p-3 border-1 border-[#fff]  hover:shadow-xl duration-300 scale-90'>
              <img src={blackshirt} alt='' className='rounded-[20px] w-[100%]' />
              <div className='flex gap-3 justify-center mt-3 mb-3'>
                <div className='bg-[#f1f1f1] p-1 text-black W-[100%] whitespace-nowrap w-[100%] rounded-[8px]'><p className='text-[12px]'>100% Pure Cotton</p></div>
                <div className='bg-[#f1f1f1] p-1 text-black W-[100%] whitespace-nowrap w-[100%] rounded-[8px]'><p className='text-[12px]'>Super Dry</p></div>
              </div>
              <h3 className='text-[22px] font-medium mt-3 mb-3'>Black T-Shirts</h3>
              <div className='flex gap-3 justify-center'>
                <div><p className='text-gray-500 font-medium text-[20px]'>₹1500</p></div>
                <div><p className=' font-semibold text-[20px] text-red-600'><del>₹2500</del></p></div>
              </div>
              
            </div>
                <div className='rounded-[20px] bg-white text-center p-3 border-1 border-[#fff]  hover:shadow-xl duration-300  scale-95'>
              <img src={blueshirts} alt='' className='rounded-[20px] w-[100%]' />
              <div className='flex gap-3 justify-center mt-3 '>
                <div className='bg-[#f1f1f1] p-1 text-black W-[100%] whitespace-nowrap w-[100%] rounded-[8px]'><p className='text-[12px]'>100% Pure Cotton</p></div>
                <div className='bg-[#f1f1f1] p-1 text-black W-[100%] whitespace-nowrap w-[100%] rounded-[8px]'><p className='text-[12px]'>Super Dry</p></div>
              </div>
              <h3 className='text-[22px] font-medium mt-3 mb-3'>Light Casual Shirts</h3>
              <p className='text-gray-500 font-medium text-[20px]'>₹1500</p>
            </div>
            </div>
             <button className='bg-black px-8 rounded-full py-2 mt-5 text-white block m-auto'>View More</button>
        </div>
    )
}

export default Products