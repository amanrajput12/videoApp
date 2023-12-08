import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/AppSlice'
import { useSearchParams } from 'react-router-dom'
import ComentContanier from './ComentContanier'
import { YOUTUBE_COMMENTS_URL } from '../utils/Constant'
const Watch = () => {
    const dispatch =useDispatch()
    const [searchparams] = useSearchParams()
    const [commentData,setCommentData]= useState([])
    console.log(searchparams.get("v"));
    
    useEffect(()=>{
dispatch(closeMenu())
getComment()
    },[])
    const getComment = async()=>{
      const data = await fetch(YOUTUBE_COMMENTS_URL+searchparams.get("v"))
      const json = await data.json()
      // console.log('comment ',json);
      setCommentData(json.items)
    }
  return (
  <div>
    <div className='col-span-11 px-5'>
        <iframe width="1100"
         height="600" 
         src={"https://www.youtube.com/embed/"+searchparams.get("v")+"?autoplay=1"} 
         title="YouTube video player"
          frameBorder="0"
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
       </div> 
       {/* <ComentContanier commentInfo={commentData}/>  */}
    </div>
  
  )
}

export default Watch