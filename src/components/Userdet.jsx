import React from 'react'
import { useParams } from 'react-router-dom'

function Userdet() {
   const {name}=useParams();
  return (
    <div className='w-full h-screen bg-black flex items-center justify-center'>
        <h1 className='text-white text-3xl'>hello ! {name}</h1>
    </div>
  )
}

export default Userdet