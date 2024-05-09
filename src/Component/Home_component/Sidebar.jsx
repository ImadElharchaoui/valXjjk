import React from 'react'
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { useNavigate } from 'react-router-dom';


const Sidebar = () => {
    const navigate = useNavigate()
  return (
    <div className='absolute left-4 top-80 text-white flex flex-col items-start text-4xl drop-shadow-[0_4px_4px_rgba(0,0,0,1)]'>
        <button className='mb-8 text-6xl text-red-700 flex items-center' onClick={()=>{navigate('/queue')}}>
        <VscDebugBreakpointLog color='white' size={20} style={{marginRight:"8px"}} /> Play
        </button>
        <button className='mb-8 flex items-center' onClick={()=>{navigate(`/champions`)}}>
        <VscDebugBreakpointLog color="white" size={20} style={{marginRight:"8px"}} /> Champions
        </button>
        <button className='mb-8 flex items-center'>
        <VscDebugBreakpointLog color='white' size={20} style={{marginRight:"8px"}}/> Profile
        </button>
        <button className='mb-8 flex items-center'>
        <VscDebugBreakpointLog color='white' size={20} style={{marginRight:"8px"}}/> Store
        </button>
        <button className='mb-8 flex' items-center>
        <VscDebugBreakpointLog color='white' size={20} style={{marginRight:"8px"}}/> BattlePass
        </button>
        <button className=' flex items-center'>
        <VscDebugBreakpointLog color='white' size={20} style={{marginRight:"8px"}}/> Settings
        </button>
    </div>
  )
}

export default Sidebar