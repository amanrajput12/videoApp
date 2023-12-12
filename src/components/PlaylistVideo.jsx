import React from 'react';

const PlaylistVideo = ({ info, setVideoId }) => {
  const snippet = info?.snippet;
  const thumbnails = snippet?.thumbnails;

  const handleVideoId = () => {
    console.log('clicked', info);
    setVideoId(info?.contentDetails?.videoId);
  };

  return (
    <div className='cursor-pointer' >
    <div className='flex p-3' onClick={() => handleVideoId()}>
      <img className='rounded-md' src={thumbnails?.default?.url} alt="" />
      <div className='ml-3'>
      <h2>{info?.snippet?.title}</h2>
      <h1>{snippet?.channelTitle}</h1>
      </div>
    </div>
    </div>
  );
};

export default PlaylistVideo;
