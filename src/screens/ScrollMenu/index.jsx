import React, { useRef, useState } from 'react';

const ScrollMenu = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    scrollRef.current.classList.add('cursor-grabbing');
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    scrollRef.current.classList.remove('cursor-grabbing');
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    scrollRef.current.classList.remove('cursor-grabbing');
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // lower = smoother, higher = faster
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="w-full overflow-hidden">
      <div
        ref={scrollRef}
        className="flex items-center gap-4 overflow-x-auto justify-between scrollbar-hide  cursor-pointer select-none transition-all duration-300 ease-out scroll-smooth"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {['Trending', 'Sales', 'Man', 'Women', "Kid's", 'Brand', 'Shopping', 'Latest Product'].map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-full px-5 py-2 text-sm whitespace-nowrap w-[100%] text-center   hover:bg-[#000] hover:text-[#fff] duration-500 "
          >
            <p className=''>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollMenu;
