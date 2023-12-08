import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_SEARCH } from '../utils/Constant'
import { useSearchParams } from 'react-router-dom'

import SearchVideo from './SearchVideo'
const SearchVideoComp = () => {
  const [searchparams] = useSearchParams()
  const [searchVideo,setSearchVideo]=useState([])
  console.log('searchvide ',searchparams.get("search"));
  useEffect(()=>{
getSearchVideo()
  },[searchparams])

  const getSearchVideo = async()=>{
    const data = await fetch(YOUTUBE_VIDEO_SEARCH+searchparams.get("search"))
    const json = await data.json()
    console.log('sarchdata',json);
    setSearchVideo(json.items)
    console.log(searchVideo);
  }
  return (
    <div>
      {
        searchVideo.map((info)=>
        <SearchVideo info={info}/>
        )
      }
    </div>
  )
}

export default SearchVideoComp