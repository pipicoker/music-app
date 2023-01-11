
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


import { FreeMode, Pagination } from "swiper";

const NewReleases = ({ latests }) => { 

 

     
  return (
    <div className='bg-[#1E1E1E] pl-4 md:pl-0 pt-10 pb-4  '>
      
          <h4 className='font-bold text-xl text-[#EFEEE0] text-left  md:pl-8'>New releases</h4>
          
      <div className='flex w-full overflow-y-hidden  space-x-8 mt-4'>
        

        <Swiper
          slidesPerView={3}
        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper grid  grid-cols-2 md:hidden"
      >
        
            {latests.map((latest) => 
              <SwiperSlide key={latest.id} className="shrink-0 w-[153px] text-left">
                
              <img src={latest.cover} alt="" className="w-[153px] h-[153px] rounded-2xl"/>
                      <p className='text-sm text-[#FFFFFF]'>{latest.title}</p>
                      <p className='text-sm text-gray-400 font-semibold'>{latest.artist}</p>
                      
              </SwiperSlide>
      )}
          
            
        
        </Swiper>
        
        <Swiper
          slidesPerView={7}
        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper md:grid  grid-cols-5 hidden"
      >
        
            {latests.map((latest) => 
              <SwiperSlide key={latest.id} className="shrink-0 w-[153px] text-left">
                
              <img src={latest.cover} alt="" className="w-[153px] h-[153px] rounded-2xl"/>
                      <p className='text-sm text-[#FFFFFF]'>{latest.title}</p>
                      <p className='text-sm text-gray-400 font-semibold'>{latest.artist}</p>
                      
              </SwiperSlide>
      )}
          
            
        
      </Swiper>
      </div>
              
          
    </div>
  )
}

export default NewReleases



 