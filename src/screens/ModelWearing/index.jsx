import React from 'react'
import jacket from '../../assets/images/jacket.jpg'
import jackettwo from '../../assets/images/jackettwo.jpg'


const Modelwearing = () => {
  return (
    <div className='xl:w-11/12 lg:w-11/12 m-auto px-2 pt-5'>
      <div className='grid xl:grid-cols-3 gap-5 items-center'>
        <div><img src={jacket} alt='' className='w-[100%] rounded-[32px]  ' /></div>
        <div><img src={jackettwo} alt='' className='w-[100%] rounded-[32px]  ' /></div>
        <div className='h-full bg-white rounded-[32px] flex flex-col justify-center items-center text-center px-4 py-8'>
          <h2 className='text-[38px] font-medium leading-12'>
            Models wearing <br /> full outfits
          </h2>
          <button className='bg-black px-8 rounded-full py-2 mt-5 text-white'>
            Explore More
          </button>
        </div>

      </div>
    </div>
  )
}

export default Modelwearing