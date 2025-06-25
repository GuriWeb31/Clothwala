import React from 'react'
import hero from '../../assets/images/hero.png';
import male1 from '../../assets/images/male1.svg';
import girl2 from '../../assets/images/girl2.svg';
import mal2 from '../../assets/images/mal2.svg';
import girl3 from '../../assets/images/girl3.svg';

const Banner = () => {
  return (
    <div>
        <div className='xl:w-11/12 lg:w-11/12 m-auto px-2'>
            <div class="mt-6 space-y-12 lg:grid lg:grid-cols-2 lg:space-y-0 gap-5 ">
                <div className='text-start rounded-[32px] bg-white p-6'>
                    <h1 className='text-[52px] font-semibold leading-16 pt-5'>Unleash Your Style Shop the Latest Trends</h1>
                    <p className='mt-5 text-[16px]'>Discover the latest trends & express your style effortlessly. Shop exclusive collection with premium designs, just for you!</p>
                    <button className='bg-black px-8 rounded-full py-2 mt-5 text-white'>Shop Now</button>

                     <div className='review-banner pt-10'>
                        <div><h2 className='text-[28px] font-medium'>25 Million+</h2></div>
                        <div className='flex justify-between items-center gap-16'>
                            <div className='text-[12px]'>Real reviews from our happy customers! See what fashion lovers are saying about our quality, style, and service.</div>
                            <div>
                                <div className='flex '>
                                    <div><img src={male1} alt='' className='border-1 border-[#fff] rounded-full w-[124px]'/></div>
                                    <div><img src={girl2} alt='' className='relative right-1.5 border-2 border-[#fff] rounded-full w-[124x]'/></div>
                                    <div><img src={mal2} alt='' className='relative right-3.5 border-2 border-[#fff] rounded-full w-[124x]'/></div>
                                    <div><img src={girl3} alt='' className='relative right-5.5 border-2 border-[#fff] rounded-full w-[124px]'/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    
                    <img src={hero} alt='' className='rounded-[6%]'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner