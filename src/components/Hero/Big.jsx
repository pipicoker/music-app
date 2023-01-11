import React from 'react'
import guy1 from "../assets/guy1.png"
import guy2 from "../assets/guy2.png"
import guy3 from "../assets/guy3.png"
import guy4 from "../assets/guy4.png"
import guy5 from "../assets/guy5.png"
import love from "../assets/love.png"


const Big = () => {
  return (
    <div className='bg-[#609EAF] h-[553px] w-[370px] md:w-[686px] bg-hero2 bg-right-top md:bg-hero bg-no-repeat md:bg-right rounded-3xl  pl-8 text-left md:ml-6  md:h-[373px] md:flex'>
      <div className='pt-8 md:mb-10 md:pt-9'>
        <div className='flex'>
        <p className='  font-normal text-xs text-white'>Curated playlist</p>
        
      </div>
      

      <p className='pt-60 md:pt-0 md:mt-20 font-bold text-4xl text-white'>R & B Hits</p>

      <p className='pt-2 pr-14  font-normal text-sm text-white'>All mine, Lie again, Petty call me everyday,
Out of time, No love, Bad habit,
        and so much more</p>
      
      <div className='w-full mt-11 flex  items-center '>
        <div className=' flex'>
          <img src={guy1} alt=""  className=''/>
          <img src={guy2} alt=""  className='w-10 h-10 drop-shadow-3xl -ml-6'/>
          <img src={guy3} alt=""  className='w-10 h-10 drop-shadow-3xl -ml-6 rounded-full'/>
          <img src={guy4} alt=""  className='w-10 h-10 drop-shadow-3xl -ml-6 rounded-full'/>
          <img src={guy5} alt=""  className='w-10 h-10 drop-shadow-3xl -ml-6 rounded-full '/>
        </div>
        
        <img src={love} alt="" className='pl-5 md:pl-3 '/>
        <p className='text-white text-2xl pl-4 md:pl-2'>33k Likes</p>
      </div>
      </div>
      
      
      
      <div className='h-full w-full pt-3 hidden md:block bg-man  bg-no-repeat '>
        {/* <img src={man} alt="" className='' /> */}
        

        
      </div>
      
    </div>
  )
}

export default Big
