import React, {useState} from 'react'
import Likes from './Likess'
import LikesCollBtns from './Likes_Coll_Btns'
import Collections from './Collections'

const LikesColl = ({ liked, setLiked , newLiked, albumSongss, newAddedAlb, newAddecColl}) => {
  
   const [activeButton, setActiveButton] = useState('likes'); // set default active button to 'likes'

   
  return (
    <div className='h-screen w-screen bg-[#1E1E1E]'>
      <LikesCollBtns activeButton={activeButton} setActiveButton={setActiveButton} />
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

export default LikesColl
