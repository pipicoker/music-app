import React, {useState} from 'react'
import Likes from './Likess'
import Likes_coll_btns from './Likes_coll_btns'
import Collections from './Collections'

const Likes_coll = ({ liked, setLiked , newLiked, albumSongss, newAddedAlb, newAddecColl}) => {
  
   const [activeButton, setActiveButton] = useState('likes'); // set default active button to 'likes'

   
  return (
    <div className='h-screen w-screen bg-[#1E1E1E]'>
      <Likes_coll_btns activeButton={activeButton} setActiveButton={setActiveButton} />
      <div>
        {activeButton === 'likes' && (
                <Likes liked={liked} setLiked={setLiked} newLiked={newLiked} />

        )}

        {activeButton === 'collection' && (
          <Collections albumSongss={albumSongss} newAddedAlb={newAddedAlb} newAddecColl={newAddecColl} />

        )}
      </div>
    </div>
  )
}

export default Likes_coll
