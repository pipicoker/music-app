import NewReleases from './NewReleases'
import Popular from './Popular'
import Hero from './Hero/Hero'

import {useEffect, useState} from 'react'


function Home({album, setAlbum, liked, setLiked, GetFavorite, activecolor, func, mappedData, addSongToalbumSongs, clickedAlbumDetails }) {
      const [latests, setLatests] = useState([])
    const [popular, setPopular] = useState([])
    
    // fetching data for the latest songs
    const fetchNew = async () => {
      const res = await fetch('https://musica-api.onrender.com/new')
      const data = await res.json()

         return data
    }
  
    // setting latest songs to the data fetched from fetchNew() on page load
  useEffect(() => {
      const getSongs = async () => {
        const songsFromServer = await fetchNew()
        setLatests(songsFromServer)
        // console.log(songsFromServer)
      }
    getSongs()
  },[])

  
  // fetching data for the popular songs
    const fetchPopular = async () => {
      const res = await fetch('https://musica-api.onrender.com/popular')
      const data = await res.json()

         return data
    }
  
      // setting popular songs to the data fetched from fetchNew() on page load
    useEffect(() => {
        const getPopular = async () => {
          const songsFromServer = await fetchPopular()
          setPopular(songsFromServer)
          // console.log(songsFromServer)
        }
      getPopular()
    }, [])
  
  // fetching data for the Albums
    const fetchAlbum = async () => {
      const res = await fetch('https://musica-api.onrender.com/playlist')
      const data = await res.json()

         return data
    }
  
      // setting Albums to the data fetched from fetchNew() on page load
    useEffect(() => {
        const getAlbum = async () => {
          const songsFromServer = await fetchAlbum()
          setAlbum(songsFromServer)
          // console.log(songsFromServer)
        }
      getAlbum()
    }, [setAlbum])

    return (
        <div className="Home ">
        
        
          
        <Hero liked={liked} setLiked={setLiked} album={album} GetFavorite={GetFavorite} activecolor={activecolor} func={func} mappedData={mappedData} addSongToalbumSongs={addSongToalbumSongs} clickedAlbumDetails={clickedAlbumDetails} />
  
            <NewReleases latests={latests} />
            <Popular popular={ popular} />
        </div>
    )
}
export default Home;
