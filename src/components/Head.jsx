import React from 'react'
import { AiOutlineMenu,AiOutlineSearch } from 'react-icons/ai';
import { BsYoutube } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import {toggleMenu} from '../utils/AppSlice'
const Head = () => {
  const dispatch =useDispatch()
  const togleMenuHandler=()=>{
    console.log('hello');
    dispatch(toggleMenu())
  }
  return (
    <div className='grid grid-flow-col  p-5 m-2  shadow-xl items-center'>   
     <div className=' col-span-1 flex  '>
        <AiOutlineMenu  className='text-2xl hover:cursor-pointer' onClick={()=>togleMenuHandler()}/>
        <p className='flex font-extrabold mx-3 '>
        <BsYoutube className='text-2xl text-red-700'/>
        Youtube
        </p>
    </div>
   <div className='col-span-10 flex ml-36 items-center  '>
    <input className='w-1/2 border border-gray-700 p-2 pl-6 rounded-l-full' type="text" placeholder='search' />
   <button className='rounded-r-full p-2 border border-gray-800  h-full'>🔍</button>
  {/* <AiOutlineSearch className='rounded-r-xl text-3xl p-2 border border-gray-500 h-full ' /> */}
 
   </div>
    <div className='col-span-1'>
    <FaUserCircle className='text-2xl'/> 
    </div>

    </div>
  )
}

export default Head