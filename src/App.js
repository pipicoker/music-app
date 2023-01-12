import {Routes, Route} from 'react-router-dom'
import { useRef, useState } from 'react';
import { useEffect } from 'react';
import Side from './components/Hero/Side';

import Nav from './components/Nav';
import Home from './components/Home';
import LikesColl from './components/Likes_coll';
import Playsection from './components/Playsection';
import AlbumTrack from './components/AlbumTrack/AlbumTrack';

function App() {
   const [nav, setNav] = useState(false)

  const [playlist, setPlaylist] = useState([
    {
      id: "one",
      png: "https://musica-api.onrender.com/cover/cover_8.jpeg",
      title: "We Outside",
      artist: "Olamide",
      audio: "https://musica-api.onrender.com/audio/audio_8.mp3",
      
      
    },
    {
      id: "two",
      png: "https://musica-api.onrender.com/cover/cover_16.jpeg",
      title: "Sungba Remix",
      artist: "Asake ft Burna Boy",
      audio: "https://musica-api.onrender.com/audio/audio_16.mp3"
    },
    {
      id: "three",
      png: "https://musica-api.onrender.com/cover/cover_10.jpg",
      title: "Call Of Duty",
      artist: "Zinoleesky",
      audio: "https://musica-api.onrender.com/audio/audio_10.mp3"
    },
    {
      id: "four",
      png: "https://musica-api.onrender.com/cover/cover_2.jpeg",
      title: "Love Don't Cost A Dime",
      artist: "Magix ft Ayra Starr",
      audio: "https://musica-api.onrender.com/audio/audio_12.mp3"
    },
    {
      id: "five",
      png: "https://musica-api.onrender.com/cover/cover_14.jpeg",
      title: "Buga",
      artist: "Kizz Daniel ft Tekno",
      audio: "https://musica-api.onrender.com/audio/audio_14.mp3"
    },
    {
      id: "six",
      png: "https://musica-api.onrender.com/cover/cover_18.png",
      title: "Kenkele",
      artist: "BNXN ft Wande Coal",
      audio: "https://musica-api.onrender.com/audio/audio_18.mp3"
    },
    {
      id: "seven",
      png: "https://musica-api.onrender.com/cover/cover_2.jpeg",
      title: "Love Don't Cost A Dime",
      artist: "Magix ft Ayra Starr",
      audio: "https://musica-api.onrender.com/audio/audio_12.mp3"
    },
  ])
  const [isplaying, setIsplaying] = useState(false)
  const [currentsong, setCurrentsong] = useState(playlist[0])

  const [collections, setCollections] = useState([])
  const [liked, setLiked] = useState([])
  const [albumSongs, setAlbumSongs] = useState([]);

  const [album, setAlbum] = useState([])

  const [activecolor, setActivecolor] = useState(false)
  const [loved, setLoved] = useState('white')


  // toggle the sidebar
  const handleNav = () => {
        setNav(!nav)
    }

  
  // const log = () => {
  //   console.log(liked)
  // }

  const audioElem = useRef(null)

  useEffect(() => {
    if (isplaying) {
      audioElem.current.play()
    }
    else {
      audioElem.current.pause()
    }
  }, [isplaying])
  

  
  const onPlaying = () => {
    const duration = audioElem.current.duration
    const ct = audioElem.current.currentTime

    setCurrentsong({ ...currentsong, "progress": ct / duration * 100, "length": duration })
  }
  
  // skips to the next song when the current song finish playing
  const skipToNextSongOnEnded = () => {
    audioElem.current.currentTime = 0;
    audioElem.current.play();
    setIsplaying(true);

    const index = playlist.findIndex(x => x.title === currentsong.title)

    setCurrentsong(playlist[index + 1]);

  }


  // change song playing to the current song clicked on
  const changeSongPlaying = (data) => {
     setCurrentsong(data)
   }
  
  
  // onclick, it gets the data of the element loved and adds it to the liked array
  const GetFavorite = (data, event )=> {

    if (liked.some(item => item.id === data.id)) {
      const filteredArr = liked.filter(item => item.id !== data.id)
      setLiked(filteredArr)
      window.newLiked = filteredArr

    } else {
      window.newLiked = [...liked, data]
      setLiked([...liked, data])
      
    }  
      const btn = event.target
      btn.style.color = loved === '#D7BE69' ? 'red' : '#D7BE69'
      setLoved(loved === '#D7BE69' ? 'red' : '#D7BE69')
  }
  
  const func = () => {
    console.log(collections);
  }

  // cant remember
  const mappedData = album.map(item => ({
    id: item.id,
    title: item.title,
    cover: item.cover,
    individualSongId: item.files
  }));

  // gets the information of the album clicked
  const clickedAlbumDetails = data => {
    window.currentAlbumDetails = data
   
  }
  
  // gets the data of the songs in the album clicked
  const addSongToalbumSongs = data => {
    setAlbumSongs(data );
    window.addedalbumSongs =  data
  };

  //add songs to collections
  const addSongToCollections = data => {
    if (collections.some(item => item.id === data.id)) {

      const filteredArr = liked.filter(item => item.id !== data.id)
      setCollections(filteredArr)
      window.addedCollection = filteredArr
      
      
    }
    else{
      window.addedCollection = [...collections, data]
      setCollections([...collections, data]);
    }
    console.log(collections);
  };

  

    
  


  return (
    <div className="App ">

      <Nav nav={nav} handleNav={handleNav} />
      <audio src={currentsong.audio} ref={audioElem} onTimeUpdate={onPlaying} onEnded={skipToNextSongOnEnded } />
      <Playsection nav={nav} playlist={playlist} setPlaylist={setPlaylist} isplaying={isplaying} setIsplaying={setIsplaying} audioElem={audioElem} currentsong={currentsong} setCurrentsong={setCurrentsong} 
      />
      {/* <button onClick={func}>click me</button> */}
      <div className='flex '>
        <Side className="h-full"/>
        <Routes className="top-0">
          <Route path="/" element={<Home album={album} setAlbum={setAlbum} liked={liked} setLiked={setLiked} GetFavorite={GetFavorite} activecolor={activecolor} setActivecolor={setActivecolor} func={func} mappedData={mappedData} addSongToalbumSongs={addSongToalbumSongs} clickedAlbumDetails={clickedAlbumDetails} />} />

          <Route path="/Likes_coll" element={<LikesColl liked={liked} setLiked={setLiked} newLiked={window.newLiked} albumSongs={albumSongs} newAddedAlb={document.addedalbumSongs} newAddecColl={window.addedCollection} />} />

          <Route path="/AlbumTrack" element={<AlbumTrack playlist={playlist} newAddedAlb={window.addedalbumSongs} mappedData={mappedData} currentAlbumDetails={window.currentAlbumDetails} GetFavorite={GetFavorite} clickedAlbumDetails={clickedAlbumDetails} addSongToCollections={addSongToCollections} changeSongPlaying={changeSongPlaying} />} />

          

        </Routes>
        
      </div>
      
    </div>
  );
}

export default App;
