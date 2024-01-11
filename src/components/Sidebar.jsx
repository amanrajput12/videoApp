import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = () => {
 const isMenuOpen = useSelector(store=>store.app.isMenuOpen)
 if(!isMenuOpen) return null
  return (
    
    <div className='p-2 shadow-lg col-span-1 text-center h-full relative'>
      <div className='sticky top-20'>
      <ul>
        <Link to="/"><li>Home</li></Link>
        
      
      </ul>
      
      <ul>
        <li>Music</li>
        <li>sport</li> 
        <li>Gaming</li>
        <li>Movies </li>
      </ul>

      
      <ul>
        <li>Music</li>
        <li>sport</li>
        <li>Gaming</li>
        <li>Movies </li>
      </ul>
    </div>
    </div>
  )
}

export default Sidebar