import React, { useEffect, useState } from 'react'
import { CHANNEL_ALLVIDEO, CHANNEL_PLAYLIST } from '../utils/Constant'
import { useSearchParams } from 'react-router-dom'
import ChannelPlaylist from './ChannelPlaylist'
import Videos from './Videos'

const ChannelComp = () => {
    const [searchparams] =useSearchParams()
    const [playlist,setPlaylist]=useState([])
    const [video,setVideo]=useState([])
    const [intialstate,setIntialState]=useState(true)
    console.log('params of channel',searchparams.get("p"));
    useEffect(()=>{
  getchannelplaylist()
  getchannelvideo()
    },[])
    const getchannelplaylist= async()=>{
        const data = await fetch(CHANNEL_PLAYLIST+searchparams.get("p"))
        const json = await data.json()
        console.log('json data of channel',json);
        setPlaylist(json.items)
    }
    const getchannelvideo =async()=>{
         const data = await fetch(CHANNEL_ALLVIDEO+searchparams.get("p"))
         const json = await data.json()
         console.log('video data of channel',json);
         setVideo(json.items)
    }
    // console.log("setdata",playlist);
  return (
    <div className='col-span-11 flex flex-wrap'>
        <div className='sticky justify-center gap-6 bg-zinc-400 flex  top-20 w-[100vw]  '>
          
            <button className='cursor-pointer bg-slate-500 hover:bg-slate-700 m-2 p-2 rounded-md text-white'>Vidoes</button>
            <button className='cursor-pointer bg-slate-500 m-2 p-2 rounded-md text-white hover:bg-slate-700'>Playlist</button>
           
        </div>
        
       

        {
          
            video.map((video)=>
            <Videos info={video}/>
            )
        } 
        {
            playlist.map((video)=>
            <ChannelPlaylist key={video.id} info={video}/>    
            )
        } 
    </div>
  )
}

export default ChannelComp