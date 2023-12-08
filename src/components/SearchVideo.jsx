import React from 'react'
import { Link } from 'react-router-dom';

const SearchVideo = ({info}) => {
  console.log('in search video',info);
 const {id}=info
  const {snippet}=info
  const {thumbnails}=snippet
console.log('in comp search',thumbnails);
  return (
    <Link to={'/watch?v='+id.videoId}> 
       <div className='grid grid-flow-col py-3 shadow-md m-4 rounded-md '>
      <div className='col-span-2'>
      <img className='w-96 rounded-lg' src={thumbnails.high.url} alt="" />
      </div>
      <div className='col-span-11 py-10'>
        <h1>{snippet.title}</h1>
        <h3>{snippet.channelTitle}</h3>
      </div>
    </div>
    </Link>

  )
}

export default SearchVideo