import React, { useEffect, useState } from 'react'
import { PLAYLIST } from '../utils/Constant'
import PlaylistVideo from './PlaylistVideo'
import { Link } from 'react-router-dom'

const Playlist = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
  Playlist()
    },[])
    const Playlist = async()=>{
    const data = await fetch(PLAYLIST)
    const json = await data.json()
    // console.log('json data',json.items);
    setData(json.items)
    }
  return (
    <div>
{data.map((video)=>

<PlaylistVideo  data={video}/>

)}
    </div>
  )
}

export default Playlist