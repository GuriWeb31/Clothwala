import React from 'react'
import pants from '../../assets/images/pants.png';
import shirts from '../../assets/images/shirts.png';
import menfull from '../../assets/images/menfull.jpg';
import winter from '../../assets/images/winter.jpg';
import popcorn from '../../assets/images/popcorn.jpg';
import arrow from '../../assets/images/arrow.svg';

const Ourfeatured = () => {
  return (
    <div className='xl:w-11/12 m-auto px-2 pt-12'>
      <h2 className='text-[38px] font-medium text-center'>Our Categories List</h2>
      <p className='text-center'>Recently added shirts!</p>
      <div className='grid xl:grid-cols-3 gap-5 mt-12'>
        <div>
          <div className='flex flex-col gap-5'>
            <div className="relative rounded-[24px] overflow-hidden">
              {/* Background image */}
              <img src={pants} alt="" className="w-full h-[265px] object-cover object-top"/>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

              {/* Content overlay */}
              <div className="absolute inset-0 flex items-end justify-between p-4 text-white">
                <div>
                  <p className="text-lg font-medium ">Top Pants</p>
                  <p className="text-sm ">Series</p>
                </div>

                <img src={arrow} alt="" className="w-[40px]" />
              </div>
            </div>

            <div className='rounded-[24px] relative overflow-hidden'>
              <img src={shirts} alt='' className='w-[100%] rounded-[24px] object-cover object-top h-[265px]' />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

              {/* Content overlay */}
              <div className="absolute inset-0 flex items-end justify-between p-4 text-white">
                <div>
                  <p className="text-lg font-medium ">Top Shirts</p>
                  <p className="text-sm ">Series</p>
                </div>

                <img src={arrow} alt="" className="w-[40px]" />
              </div>
              
              </div>

          </div>
        </div>
        <div className='relative rounded-[24px] overflow-hidden'>
          
          <img src={menfull} alt='' className='w-[100%] block m-auto object-cover h-[550px] object-top rounded-[24px]' />
          {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

              {/* Content overlay */}
              <div className="absolute inset-0 flex items-end justify-between p-4 text-white">
                <div>
                  <p className="text-lg font-medium ">Top Full Set</p>
                  <p className="text-sm ">Series</p>
                </div>

                <img src={arrow} alt="" className="w-[40px]" />
              </div>
        </div>
        <div >
          <div className='flex flex-col gap-5'>

            <div className='rounded-[24px] relative overflow-hidden'>
              <img src={winter} alt='' className='w-[100%] rounded-[24px] object-cover object-center h-[265px]' />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

              {/* Content overlay */}
              <div className="absolute inset-0 flex items-end justify-between p-4 text-white">
                <div>
                  <p className="text-lg font-medium ">Winter Sweater</p>
                  <p className="text-sm ">Series</p>
                </div>

                <img src={arrow} alt="" className="w-[40px]" />
              </div>
              
              </div>
            <div className='rounded-[24px] relative overflow-hidden'>
              <img src={popcorn} alt='' className='w-[100%] rounded-[24px] object-cover object-top h-[265px]' />
            {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

              {/* Content overlay */}
              <div className="absolute inset-0 flex items-end justify-between p-4 text-white">
                <div>
                  <p className="text-lg font-medium ">New Trendy Popcorn Shirt</p>
                  <p className="text-sm ">Series</p>
                </div>

                <img src={arrow} alt="" className="w-[40px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ourfeatured