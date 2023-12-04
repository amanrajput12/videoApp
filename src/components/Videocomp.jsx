import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/Constant'
import Videos from './Videos'
import { Link } from 'react-router-dom'

const Videocomp = () => {
  const [videos,setVideos]=useState([])
  useEffect(()=>{
  getVideos()
  },[])
  const getVideos = async ()=>{
    const data =await fetch(YOUTUBE_VIDEO_API)
    const json = await data.json()
    console.log('data get',json);
    setVideos(json.items)
  }
  return (
    <div className='flex flex-wrap justify-around'>
 {
  videos.map((videos)=>
  <Link to={"/watch?v="+videos.id}>
    <Videos key={videos.id} info={videos}/>
    </Link>
  )
 }
    </div>
  )
}

export default Videocomp