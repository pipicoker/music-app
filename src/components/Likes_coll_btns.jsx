import React from 'react'

const Likes_coll_btns = ({activeButton, setActiveButton}) => {
  return (
    <div className='pl-10 md:pl-6'>
          <div className='space-x-4'>
        <button className={`bg-[#1E1E1E] rounded-3xl border border-gray-100 text-[#EFEEE0] px-8 md:px-5 py-2 ${activeButton === 'collection' ? 'active bg-[#FACD66] border-none' : ''}`}
        onClick={() => setActiveButton('collection')}>
                  My collections 
              </button>

              <button className={`bg-[#1E1E1E] rounded-3xl border border-gray-100 text-[#EFEEE0] px-16 md:px-8 py-2 ${activeButton === 'likes' ? 'active bg-[#FACD66]' : ''}`}
        onClick={() => setActiveButton('likes')}>
                  Likes 
              </button>
      </div>
    </div>
  )
}

export default Likes_coll_btns
