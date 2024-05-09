import React from 'react'
import Playercard from '../Component/Queue_component/Playercard'

const Queue = () => {
  return (
    <div className='flex justify-center relative items-center text-5xl h-screen w-screen bg-slate-600'>
        <div className='mx-4 absolute left-5 top-20 scale-95 '>
          <Playercard exist={false} />
        </div>
        <div className='mx-4 absolute left-[21.5rem] top-28 scale-100'>
          <Playercard exist={true} />
        </div>
        <div className='mx-4 absolute scale-105'>
          <Playercard exist={true} />
        </div>
        <div className='mx-4 absolute right-[21.5rem] top-28 scale-100 '>
          <Playercard exist={true} />
        </div>
        <div className='mx-4 absolute right-5 top-20 scale-95 '>
          <Playercard exist={false} />
        </div>
        
    </div>
  )
}

export default Queue