import React from 'react'

const Button = ({name}) => {
  return (
    <div className=''>
        <button className='px-5 py-2  bg-gray-200 rounded-lg m-2'>{name}</button>
    </div>
  )
}

export default Button