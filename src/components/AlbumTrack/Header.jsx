import React from 'react'

import { BiPlay } from 'react-icons/bi';
import { AiFillHeart } from 'react-icons/ai';
import {IoIosMusicalNotes} from 'react-icons/io'


const Header = ({ currentAlbumDetails,  addSongToCollections}) => {
  
  
  return (
    <div className=' ml-7  '>
       {currentAlbumDetails.map((data) => 
          <section className='py-16  bg-no-repeat shadow-md' key={data.id}>
            <div className='md:flex md:items-end '>

                <div>
                  <img src={data.cover} alt="" className='w-[357px] md:w-[284px] h-[289px] rounded-3xl' />
                </div>

                <div className='md:pl-6 md:pb-4'>
               <p className='font-bold mt-6 text-4xl text-[#A4C7C6]'>{data.title}</p>

                  <p className='text-[#EFEEE0] mt-2 text-sm font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>

                  <p className='text-[#EFEEE0] mt-2.5 text-sm font-normal'>64 songs ~ 16 hrs+</p>

                  <div className='mt-6 flex flex-3 space-x-2 mr-2 md:mr-0'>
                    <div className='bg-gray-700 px-2 md:px-5 py-3 space-x-3 cursor-pointer  flex rounded-3xl items-center  justify-center '>
                      <div className='bg-[#FACD66] w-4  h-4 rounded-full '>
                        <BiPlay />
                      </div>
                      <p className='text-xs md:text-sm font-normal text-[#FFFFFF] '>Play all</p>
                    </div>

                    <div className='bg-gray-700 px-2 md:px-4 py-4 space-x-3  flex cursor-pointer rounded-3xl items-center  justify-center '>
                      <div className='bg-[#FACD66] text-black w-4  h-4 rounded-sm '>
                        <IoIosMusicalNotes />
                      </div>
                   <p className= 'text-xs md:text-sm font-normal text-[#FFFFFF] '
                   onClick={() => {
                    addSongToCollections({
                      title: data.title,
                      id: data.id,
                      cover: data.cover
                      })
                    }}
                   >Add to collections</p>
                    </div>

                    <div className='bg-gray-700 px-4 md:px-5 py-3 space-x-3  flex cursor-pointer rounded-3xl items-center  justify-center '>
                      <div className=' text-[#E5524A]  '>
                        <AiFillHeart />
                      </div>
                      <p className='text-xs md:text-sm font-normal text-[#FFFFFF]'>Like</p>
                    </div>
                  </div>
                </div>
            </div>
        </section>
      )} 
      
      
      
    </div>
  )
}

export default Header


