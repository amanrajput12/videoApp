import React from 'react'

const Videos = ({info}) => {
    // console.log(info);
    // console.log(info.statistics);
    const snippet = info.snippet
    const statistics = info.statistics
    // console.log(snippet,statistics);
    const {channelTitle,title,thumbnails}=snippet
  return (
    
    <div className='p-2 m-2 w-72 shadow-lg rounded-sm  '>
        <img className='rounded-lg pt-2' src={thumbnails.high.url} alt="thumbnail" />
        <ul>
          <li className='font-bold py-3'>{title}</li>
          <li>{channelTitle}</li>
          <li>{statistics.viewCount} views </li>
        </ul>
    </div>
  )
}

export default Videos