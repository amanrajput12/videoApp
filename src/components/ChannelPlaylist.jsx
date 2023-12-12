import React from 'react'
import { Link } from 'react-router-dom';

const ChannelPlaylist = ({info}) => {
    const snippet = info?.snippet;
    const thumbnails = snippet?.thumbnails;

  return (
    <div className=''>
        
        <Link to={`/playlist?s=${info?.id}`}>
            <div className='flex p-4 m-5 shadow-2xl rounded-lg'>
        <img  className ="rounded-md" src={thumbnails?.medium?.url} alt="" />
        <h2 className='mx-9 mt-10'>{snippet?.title}</h2>
        </div>
        </Link>
    </div>
  )
}

export default ChannelPlaylist