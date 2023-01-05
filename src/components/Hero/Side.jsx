import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Navdata from '../data/navdata'

import {AiFillHome} from 'react-icons/ai'
import {SiApplemusic} from 'react-icons/si'
import {RiRadio2Fill} from 'react-icons/ri'
import {HiOutlineSquares2X2} from 'react-icons/hi2'
import {HiUser} from 'react-icons/hi'
import {IoLogIn} from 'react-icons/io5'

const Side = () => {
   const [activeButtonId, setActiveButtonId] = useState("one");

  const handleClick = data => {
    setActiveButtonId(data);
  };
    

  
    return (
      <div className='hidden md:block bg-[#1E1E1E] pl-5'>
        <div className='py-7 bg-[#1A1E1F] px-4 w-[52px] space-y-8 rounded-3xl'
        >
          {Navdata.slice(0, 4).map((data) =>
            <div key={data.id}   >
              <Link to={data.path} className={` flex items-center space-x-8 w-[17.42px] h-[18.33px] ${data.id === activeButtonId ? 'text-yellow-700' : 'text-[#EFEEE0]'} `} onClick={() => handleClick(data.id)}>
                {data.pix}
              </Link>
              
              
            </div>

          )}
        
    

        </div>

        <div className='mt-5 py-7  bg-[#1A1E1F] px-4 w-[52px] space-y-8 rounded-3xl'>
          {Navdata.slice(5).map((data) =>
            <div key={data.id} className={ ` flex items-center space-x-8 w-[17.42px] h-[18.33px] ${data.id === activeButtonId ? 'text-yellow-700' : 'text-[#EFEEE0]'}`} onClick={() => handleClick(data.id)} >
              {data.pix}
              
            </div>
          )}
        </div>

          
      </div>
    )
}


export default Side
