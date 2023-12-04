import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/AppSlice'
import { useSearchParams } from 'react-router-dom'

const Watch = () => {
    const dispatch =useDispatch()
    const [searchparams] = useSearchParams()
    console.log(searchparams.get("v"));
    useEffect(()=>{
dispatch(closeMenu())
    },[])
  return (
    <div className='col-span-11 px-5'>
        <iframe width="1100"
         height="600" 
         src={"https://www.youtube.com/embed/"+searchparams.get("v")+"?autoplay=1"} 
         title="YouTube video player"
          frameBorder="0"
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  )
}

export default Watch