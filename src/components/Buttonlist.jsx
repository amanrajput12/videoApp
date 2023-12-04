import React from 'react'
import Button from './Button'
const list =["All","Game","Songs","Cricker","Movies",]
const Buttonlist = () => {
  return (
    <div className='flex'>

      {
        list.map((btn)=>
        
         <Button key={btn} name={btn}/>
        )
      }
    </div>
  )
}

export default Buttonlist