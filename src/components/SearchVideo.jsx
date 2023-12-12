import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SearchVideo = ({ info }) => {
  // console.log('in search video', info);
  const { id } = info;
  const { playlistId } = id;
  const { snippet } = info;
  const { thumbnails } = snippet;
  // console.log('in comp search', thumbnails);
  // console.log('playlist id', playlistId);

  
 const navigate =useNavigate()
  const videoLink =()=>{
    console.log('clicked on video comp');
    if(playlistId){
      navigate(`/playlist?s=${playlistId}`)
    }
    else if (id?.videoId){
    navigate(`/watch?v=${id.videoId}`)
    }
    else if(id?.channelId){
      navigate(`/channel?p=${id.channelId}`)
    }
  }

  return (
  
      <div onClick={videoLink} className='grid grid-flow-col py-3 shadow-md m-4 rounded-md '>
        <div className='col-span-2'>
          <img className='w-96 rounded-lg h-56' src={thumbnails.high.url} alt="" />
        </div>
        <div className='col-span-11 py-10'>
          <h1>{snippet.title}</h1>
          <h3>{snippet.channelTitle}</h3>
        </div>
      </div>
    
  );
};

export default SearchVideo;
