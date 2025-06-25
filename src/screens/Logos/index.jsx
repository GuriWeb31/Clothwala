import React from 'react'
import graphic from '../../assets/images/graphic.svg'
import vfashion from '../../assets/images/vfashion.svg'

const Logos = () => {
  return (
    <div className='xl:w-11/12 m-auto p-2 mt-10 bg-[#000] rounded-[24px]'>
         
        <div className='grid xl:grid-cols-4'>
            <div><img src={graphic} alt='' className='block m-auto w-[150px] p-2 filter brightness-0 invert '/></div>
            <div><img src={vfashion} alt='' className='block m-auto w-[150px] p-2 filter brightness-0 invert '/></div>
            <div><img src={graphic} alt='' className='block m-auto w-[150px] p-2 filter brightness-0 invert '/></div>
            <div><img src={vfashion} alt='' className='block m-auto w-[150px] p-2 filter brightness-0 invert '/></div>
        </div>
            
    </div>
  )
}

export default Logos