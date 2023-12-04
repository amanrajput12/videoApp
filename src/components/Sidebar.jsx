import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = () => {
 const isMenuOpen = useSelector(store=>store.app.isMenuOpen)
 if(!isMenuOpen) return null
  return (
    <div className='p-2 shadow-lg col-span-1 text-center '>
      <ul>
        <Link to="/"><li>Home</li></Link>
        <li>Short</li>
        <li>Live</li>
      </ul>
      <h1 className='font-bold'>subscription</h1>
      <ul>
        <li>Music</li>
        <li>sport</li> 
        <li>Gaming</li>
        <li>Movies </li>
      </ul>

      <h1 className='font-bold py-2 '>Watch later</h1>
      <ul>
        <li>Music</li>
        <li>sport</li>
        <li>Gaming</li>
        <li>Movies </li>
      </ul>
    </div>
  )
}

export default Sidebar