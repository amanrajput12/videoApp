import React from 'react'

const PlaylistVideo = ({data}) => {
    // console.log('data in playlist vide',data);
    const {snippet}=data
    const {thumbnails}= snippet
    //  console.log('snippet',thumbnails);


  return (
    <div>PlaylistVideo
        <img src={thumbnails.medium.url} alt="" />
    </div>
  )
}

export default PlaylistVideo