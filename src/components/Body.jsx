import React from 'react'
import Sidebar from './Sidebar'
import Maincomp from './Maincomp'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='grid grid-flow-col'>
     
        <Sidebar/>
        <Outlet/>
    </div>
  )
}

export default Body