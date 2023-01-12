
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


// import required modules
import { FreeMode, Pagination } from "swiper";

const Popular = ({ popular }) => {
  
  
  return (
    
      <div className='bg-[#1E1E1E]  pl-4 md:pl-0  pt-8 pb-16 '>
      
          <h4 className='font-bold text-xl text-[#EFEEE0] text-left md:pl-8'>Popular songs</h4>
          
      <div className='flex w-full overflow-y-hidden  space-x-8 mt-4'>
        
        
        <Swiper
          slidesPerView={3}
        spaceBetween={20}
          freeMode={true}
        
        modules={[FreeMode, Pagination]}
        className="mySwiper grid  grid-cols-2 md:hidden"
      >
        
            {popular.map((pop) => 
              <SwiperSlide key={pop.id} className="shrink-0 w-[153px] text-left">
                
              <img src={pop.cover} alt="" className="w-[153px] h-[153px] rounded-2xl"/>
                      <p className='text-sm text-[#FFFFFF]'>{pop.title}</p>
                      <p className='text-sm text-gray-400 font-semibold'>{pop.artist}</p>
                      
              </SwiperSlide>
      )}
          
            
        
        </Swiper>
        
        <Swiper
          slidesPerView={7}
        spaceBetween={20}
          freeMode={true}
        
        modules={[FreeMode, Pagination]}
        className="mySwiper md:grid  grid-cols-5 hidden"
      >
        
            {popular.map((pop) => 
              <SwiperSlide key={pop.id} className="shrink-0 w-[153px] text-left">
                
              <img src={pop.cover} alt="" className="w-[153px] h-[153px] rounded-2xl"/>
                      <p className='text-sm text-[#FFFFFF]'>{pop.title}</p>
                      <p className='text-sm text-gray-400 font-semibold'>{pop.artist}</p>
                      
              </SwiperSlide>
      )}
          
            
        
      </Swiper>
      </div>
              
          
    </div>
    
  )
}

export default Popular
