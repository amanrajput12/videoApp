import React, { useEffect, useState } from 'react';
import { PLAYLIST } from '../utils/Constant';
import PlaylistVideo from './PlaylistVideo';
import { Link, useSearchParams } from 'react-router-dom';

const Playlist = () => {
  const [playlist, setPlaylist] = useState([]);
  const [searchparams] = useSearchParams();
  const [playvideoId, setPlayVideoId] = useState('');

  useEffect(() => {
    getplaylist();
  }, []);

  const getplaylist = async () => {
    const data = await fetch(PLAYLIST + searchparams.get('s'));
    const json = await data.json();
    setPlaylist(json.items);
    setPlayVideoId(json.items[0].contentDetails.videoId);
  };

  return (
    <div className='col-span-11 flex'>
      <div className='w-3/4'>
      
        <iframe className='rounded-lg mr-2 ml-2'
          width='800'
          height='500'
          src={'https://www.youtube.com/embed/' + playvideoId + '?autoplay=1'}
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        ></iframe>
      </div>
      <div className='h-[500px] overflow-y-scroll mr-7 mt-7 p-5 shadow-xl rounded-lg '>
        {playlist.map((video) => (
          <PlaylistVideo key={video.id} setVideoId={setPlayVideoId} info={video} />
        ))}
      </div>
    </div>
  );
};

export default Playlist;
