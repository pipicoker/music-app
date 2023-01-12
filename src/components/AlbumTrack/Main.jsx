import React from 'react'

import { SlOptionsVertical } from 'react-icons/sl';
import { IoIosHeartEmpty } from 'react-icons/io';



const Main = ({  newAddedAlb, GetFavorite, changeSongPlaying }) => {
  
  if (typeof newAddedAlb !== 'undefined') {
         document.mappedArray = newAddedAlb.map((item) => {
  return {
    id: item.id,
    artist: item.artist,
    duration: item.duration,
    title: item.title,
    cover: item.cover,
    audio: item.audio
  };
    })
    }

    const globalArray = document.mappedArray
    
   
      return (
      <section className=' pt-6 bg-[#1E1E1E] space-y-8 md:mr-14 mx-4 md:mx-0 pb-32'>
          {globalArray.map((list) => 
            <div key={list.id} className="px-2.5 py-3 bg-[#33373B] flex justify-between items-center rounded-2xl"
              onClick={() => {
                changeSongPlaying({
                  title: list.title,
                  artist: list.title,
                  id: list.id,
                  png: list.cover,
                  audio: list.audio
                })
              }}
            >

              <div className='flex items-center   space-x-6 md:w-3/5'>
                <div className='md:w-1/5 flex items-center   space-x-6 text-white'>
                  <img src={list.cover} alt="cover" className='w-10 h-10 rounded-lg' />
                  <IoIosHeartEmpty
                    className="w-6 h-5 text-[#D7BE69]"
                    // onMouseEnter={handleClick}
                    onClick={ (event) => {
                  GetFavorite({
                    title: list.title,
                    artist: list.title,
                    id: list.id,
                    cover: list.cover
                  }, event)
                    
                } }/>

                </div>
                <div className='md:w-4/5 md:flex md:justify-between'>
                      <p className='text-xs font-normal text-[#FFFFFF]'>{list.title} <span>~ {list.artist}</span></p>
                      <p className='text-[10px] md:text-xs font-normal text-[#FFFFFF] '>Single</p>
                </div>
              </div>

              <div className='md:w-1/5 md:flex md:justify-between md:items-center'>
                  <SlOptionsVertical className='md:order-2  text-[#FACD66]'/>
                <p className='text-[#FFFFFF]'>{list.duration}</p>
              </div>
          </div>  
          )}
          
    </section>
  )
}

export default Main