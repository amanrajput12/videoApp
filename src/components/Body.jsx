import React from 'react'
import Sidebar from './Sidebar'
import Maincomp from './Maincomp'
import { Outlet } from 'react-router-dom'
import Head from './Head'

const Body = () => {
  return (
    <div className=''>
     <Head/>
    <div className='grid grid-flow-col'>
        <Sidebar/>
        <Outlet/>
    </div>
    </div>
  )
}

export default Body