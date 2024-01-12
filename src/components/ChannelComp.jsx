import React, { useEffect, useState } from 'react'
import { CHANNEL_ALLVIDEO, CHANNEL_PLAYLIST } from '../utils/Constant'
import { useSearchParams } from 'react-router-dom'
import ChannelPlaylist from './ChannelPlaylist'
import Videos from './Videos'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { isAction } from '@reduxjs/toolkit'

const ChannelComp = () => {
    const [searchparams] =useSearchParams()
    const [playlist,setPlaylist]=useState([])
    const [video,setVideo]=useState([])
    const [initialstate,setInitialState]=useState(true)
    
    console.log('params of channel',searchparams.get("p"));
    useEffect(()=>{
      getchannelplaylist()
  getchannelvideo()
    },[])
    const getchannelplaylist= async()=>{
      try {
        const data = await fetch(CHANNEL_PLAYLIST+searchparams.get("p"))
        const json = await data.json()
        console.log('video data of channel playlist',json.items);
        setPlaylist(json.items)
      
       
    
      } catch (error) {
        console.log('error of channel playlist',error);
      }
      
    }
    const getchannelvideo =async()=>{
         const data = await fetch(CHANNEL_ALLVIDEO+searchparams.get("p"))
         const json = await data.json()
         console.log('video data of channel',json.items);
         setVideo(json.items)
    }
    // console.log("setdata",playlist);
  return (
    <div className='col-span-11 flex flex-wrap'>
        <div className='sticky justify-center gap-6 bg-slate-100 flex  top-20 w-[100vw]  '>
          
       
            <button onClick={()=>setInitialState(true)} className='cursor-pointer bg-slate-500 hover:bg-slate-700 m-2 p-2 rounded-md text-white'>Vidoes</button>
            <button onClick={()=>setInitialState(false)} className='cursor-pointer bg-slate-500 m-2 p-2 rounded-md text-white hover:bg-slate-700'>Playlist</button>
           
        </div>
        
       {/* {
                    video.map((video)=>(
                      <Link key={video.id.videoId} to={"/watch?v="+video.id.videoId}> 
                                 <Videos info={video}/>
                                 </Link>
          
                      ))
       } */}

       
  




      {
  initialstate
    ? video.map((video) => (
        <Link key={video.id.videoId} to={"/watch?v=" + video?.id?.videoId}> 
          <Videos info={video}/>
        </Link>
      ))
    : playlist.map((video) => (
        <ChannelPlaylist key={video.id} info={video}/>    
      ))
}

      
    </div>
  )
}

export default ChannelComp