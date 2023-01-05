import React, { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Topdata from '../data/topdata'


import love2 from "../assets/love2.png"
import { IoIosHeartEmpty } from 'react-icons/io';


const Top = ({ liked, setLiked, album, GetFavorite, activecolor, func, mappedData, addSongToalbumSongs, clickedAlbumDetails }) => {
  
  

  return (
    <div className='md:ml-12 '>
      <p className='text-[#EFEEE0] font-bold text-xl text-left pt-12 md:pt-0 md:text-left' onClick={func}>Top charts</p>

      <div className='flex md:flex-col mt-4 w-[400px] md:w-[100%] md:h-80  md:block space-x-4 md:space-x-0 md:space-y-4  overflow-y-hidden md:overflow-y-scroll overflow-x-scroll md:overflow-x-hidden rounded-md'>
        {mappedData.map((data) => 
          
          <div className='bg-[#1A1E1F] w-[323px] h-[233px] flex  justify-between md:items-center pt-4 pb-6 md:pb-5 pl-3.5 md:pl-0 pr-3.5 md:w-[417px] md:h-[96px] shrink-0' key={data.id} onClick={() => {
            addSongToalbumSongs(data.individualSongId)
            clickedAlbumDetails([{
              title: data.title,
              id: data.id,
              cover: data.cover
            }])
          }}
          >

            
              <div className='flex justify-between md:items-center'>
                <Link to='AlbumTrack'>
                  <div className='md:flex px-3 md:px-0 md:space-x-6' >
                  <div className='flex justify-between '>
                    <img src={data.cover} alt="" className='w-[108px] h-[99px] rounded-md'
                    
                    />
                  
                  </div>
              
                  <div >
                    <p className='text-left mt-4 text-lg text-white'  >{data.title}</p>
                    <p className='text-left text-xs text-gray-500'>{data.title}</p>
                    <p className='text-left mt-6 md:mt-2 text-white text-sm'>2:45:32</p>
                  </div>
                
                
                
                  </div>
                </Link>
                
                
              
            </div>
            <div className="w-[37px] h-[37px] border-2 border-gray-800 rounded-full flex items-center justify-center text-[#D7BE69]"
                onClick={(event) => {
                  GetFavorite({
                    title: data.title,
                    artist: data.title,
                    id: data.id,
                    cover: data.cover
            }, event)
                } }>
                <IoIosHeartEmpty className='w-6 h-5'/>
            </div>
              
          
            
            
          
            
          </div>
        )}

        
      </div>
    </div>
  )
}

export default Top
