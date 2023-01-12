
import { AiFillHeart } from 'react-icons/ai';


function Likes({  newLiked}) {
  
  const condition = newLiked
  // const check = () => {
  //   console.log(newLiked);
  // }
 
  return (
    <div className="Likes py-12 px-12">
      <div>
        <div>
          {typeof condition === 'undefined' ?
            <p className='text-gray-100'>You have no favorite song yet</p>
            
            : 
            
            <div className='md:grid md:grid-cols-3 md:space-x-4'>
              {newLiked.map((data, index) =>
          
                <div key={index} className="py-4 ">
                  <div className='flex justify-between items-center bg-[#1D2123] py-4 px-4 rounded-lg'>
                    <div className='flex space-x-6   items-center '>
                      <img src={data.cover} alt="cover" className='w-16 h-16 rounded-lg' />
                
                      <div>
                        <p className='text-gray-300 text-lg font-semibold'>{data.title}</p>
                        <p className='text-gray-200 text-xs font-semibold'>{data.artist}</p>
                        <p className='text-gray-200 text-xs font-semibold'>{data.duration}</p>
                      </div>
                    </div>

                    <div className='text-red-500 w-8 h-8 flex justify-center items-center rounded-full border  border-gray-600'>
                      <AiFillHeart />
                    </div>
                  </div>
              
              
              
                </div>
              )}
          </div>
          }
          
          </div>
        </div>
    </div>
  )
}

export default Likes