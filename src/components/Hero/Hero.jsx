import React from 'react'
import Big from './Big'
import Top from './Top'

const Hero = ({liked, setLiked, album, GetFavorite, activecolor, func,mappedData,addSongToalbumSongs, clickedAlbumDetails}) => {
  return (
    <div className='md:flex  bg-[#1E1E1E] pl-5 pr-5  pt-6'>
      {/* <Side className=""/> */}
      <Big className=""/>
      <Top className="" liked={liked} setLiked={setLiked} album={album} GetFavorite={GetFavorite} activecolor={activecolor} func={func} mappedData={mappedData} addSongToalbumSongs={addSongToalbumSongs} clickedAlbumDetails={clickedAlbumDetails} />
      
    </div>
  )
}

export default Hero
