import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import jacketpink from '../../assets/images/jacketpink.jpg';
import bluejacket from '../../assets/images/bluejacket.jpg';
import herojean from '../../assets/images/herojean.jpg';

const categoriesData = [
  {
    image: bluejacket,
    title: 'Track Suits',
    items: '35 Items',
  },
  {
    image: herojean,
    title: 'Jean Jackets',
    items: '35 Items',
  },
  {
    image: jacketpink,
    title: 'Pink Jacket',
    items: '20 Items',
  },
  {
    image: herojean,
    title: 'Jean Jackets',
    items: '35 Items',
  },
  {
    image: bluejacket,
    title: 'Track Suits',
    items: '35 Items',
  },
];

const Categories = () => {
  return (
    <div className='xl:w-11/12 m-auto px-2 pt-12'>
      <h2 className='text-[38px] font-medium mb-6 '>Our Categories</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {categoriesData.map((cat, index) => (
          <SwiperSlide key={index}>
            <div className='rounded-[20px] bg-white text-center p-3 border-2 border-[#fff] hover:border-[#000] hover:shadow-xl duration-300 hover:scale-90'>
              <img src={cat.image} alt={cat.title} className='rounded-[20px] w-[100%] block m-auto' />
              <h3 className='text-[20px] font-medium mt-2'>{cat.title}</h3>
              <p className='text-gray-500'>{cat.items}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Categories;
