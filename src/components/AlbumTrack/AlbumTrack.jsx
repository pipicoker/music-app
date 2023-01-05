import React from 'react'
import Main from './Main'
import Header from './Header'

const AlbumTrack = ({playlist, newAddedAlb, mappedData, currentAlbumDetails, GetFavorite, clickedAlbumDetails, addSongToCollections, changeSongPlaying}) => {
  return (
    <div className=' bg-[#1E1E1E] w-full h-full'>
      <Header newAddedAlb={newAddedAlb} mappedData={mappedData} currentAlbumDetails={currentAlbumDetails} clickedAlbumDetails={clickedAlbumDetails} addSongToCollections={addSongToCollections} />
      <Main playlist={playlist} newAddedAlb={newAddedAlb} GetFavorite={GetFavorite} changeSongPlaying={changeSongPlaying} />
    </div>
  )
}

export default AlbumTrack
