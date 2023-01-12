import React, {  useRef } from 'react'
import { BiShuffle } from 'react-icons/bi';
import { BiSkipNext } from 'react-icons/bi';
import { BiPlay } from 'react-icons/bi';
import { BiPause } from 'react-icons/bi';
import { AiFillStepBackward } from 'react-icons/ai';
import { RiRepeatOneLine } from 'react-icons/ri';
import { GiSpeaker } from 'react-icons/gi';

const Playsection = ({nav, audioElem, isplaying, setIsplaying, playlist, currentsong, setCurrentsong, }) => {
  const clickRef = useRef()

  const playPause = () => {
    setIsplaying(!isplaying)    
  }

  const onchange = (e) => {
    // let width = clickRef.current.clientWidth
    // const offset = e.nativeEvent.offsetX

    // const divprogress = offset / width * 100.0
    // const progress = parseFloat(divprogress.toFixed(2))
    // const prog = progress / 100 * currentsong.length
    // audioElem.current.currentTime = parseFloat(prog.toFixed(2))

    audioElem.current.currentTime = e.target.value;
    currentsong.progress = audioElem.current.currentTime

  }

  const changeVolume = (event) => {
    audioElem.current.volume = event.target.value / 100
  }


  // const test = (e) => {
  //   let width = clickRef.current.clientWidth
  //   const offset = e.nativeEvent.offsetX

  //   const divprogress = offset / width * 100.0
  //   const progress = parseFloat(divprogress.toFixed(2))
  //   const prog = progress / 100 * currentsong.length
  //   audioElem.current.currentTime = parseFloat(prog.toFixed(2))

  //   console.log(audioElem.current.currentTime)
  // }

// skip song a step backward
  const skipBack = () => {
    audioElem.current.currentTime = 0;
    audioElem.current.oncanplaythrough = () => {
        audioElem.current.play();
    }
    setIsplaying(true);

    const index = playlist.findIndex(x => x.title === currentsong.title)
    if (index === 0) {
      setCurrentsong(playlist[playlist.length - 1])
      
    }
    else {
      setCurrentsong(playlist[index - 1])
      
    }

    
  }

    // skip song one step forward
  const skipToNext = () => {
    audioElem.current.currentTime = 0;
    audioElem.current.oncanplaythrough = () => {
        audioElem.current.play();
    }
    setIsplaying(true);
    const index = playlist.findIndex(x => x.title === currentsong.title)

    if (index === playlist.length - 1) {
      setCurrentsong(playlist[0])      
    }
    else {
      setCurrentsong(playlist[index + 1]);
    }

  }
  

  return (
    <div className={nav ? "hidden " : "fixed bottom-0 h-[102px] w-screen  bg-gradient-to-b from-black bg-blend-lighten backdrop-blur-md px-8 md:pl-24 md:pr-16 pt-8 pb-11 shadow-2xl flex justify-between  z-50"}>
      <div className='flex space-x-4 '>
              <img src={currentsong.png} alt="" className='w-[57.41px] h-[57.41px] md:w-[49px] md:h-[49px] rounded-2xl'/>
              <div className='text-left'>
          <p className='text-base md:text-sm font-bold text-white'>{currentsong.title}</p>
                  <p className='text-gray-200 font-bold text-xs'>{currentsong.artist}</p>
              </div>
      </div>

      <div className=''>
        <div className='flex space-x-8 items-center justify-center'>
          <BiShuffle className='hidden md:block w-6 h-4 text-gray-400'/>
          <AiFillStepBackward className='  w-4 h-6 text-white' onClick={skipBack}/>
          <div className='w-8 h-8 md:w-6 md:h-6 rounded-full bg-yellow-300 shadow-xl flex justify-center items-center' onClick={playPause}>
            {isplaying ? <BiPause className='text-[#EFEEE0] w-4 h-4' /> : <BiPlay className='text-[#EFEEE0] w-4 h-4' />}
          </div>
          <BiSkipNext className='w-6 h-6 text-white' onClick={skipToNext}/>
          <RiRepeatOneLine className='hidden md:block w-4 h-4 text-gray-400'/>
        </div>

        <div className='hidden md:block'>
          <input
            type="range"
            min="0"
            max='100'
            // step="1"
            defaultValue={0}
            value={currentsong.progress}
            onChange={onchange} 
            ref={clickRef}
            
         className='w-[749px] h-1 bg-yellow-300'/>
        </div>
      </div>

      <div className='hidden md:block'>
        <div className='flex items-center space-x-1'>
        <GiSpeaker />
        
          <input type="range" 
            className='w-[160px] h-1'
            
          
            onChange={changeVolume}
          />
          
          
        
      </div>
      </div>
      
    </div>
  )
}

export default Playsection
