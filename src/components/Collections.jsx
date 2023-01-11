import React from 'react'

const Collections = ({  newAddecColl }) => {

 const condition = newAddecColl
  return (
      <div>
        <div>
          {typeof condition === 'undefined' ?
            <p>You have no favorite song yet</p>
            
            : 
            
            <div className='mb-24 md:grid md:grid-cols-5 md:space-x-4 to'>
              {newAddecColl.map((data, index) =>
          
                <div key={index} className="py-4 relative flex justify-center ">
                      <img src={data.cover} alt="cover" className='w-[359px] h-[234px] md:w-[213px] md:h-[234px] rounded-3xl hover:animate-pulse ' />
                      <div className='absolute top-40 md:top-44 left-16 md:left-8 z-10'>
                          <div className='text-[#EFEEE0]'>
                            <p className=' text-2xl font-normal'>{data.title}</p> 
                            <p className='text-sm'>{data.title}</p> 
                          </div>
                          <p className='md:hidden mt-4 text-[#FFFFFF] text-base'>2.3m likes</p>
                      </div>
                      
                </div>
              )}
          </div>
          }
          
          </div>
    </div>
  )
}

export default Collections
