import React from 'react'
//Component
import MinuteSecondCounter from '../Component/Navbar_component/MinuteSecondCounter';
//currency img 
import COIN1 from '/Images/currency/coin1.png'
import COIN2 from '/Images/currency/coin2.png'
//icons
import { FaPeopleGroup } from "react-icons/fa6";
import { MdLocalGroceryStore } from "react-icons/md";
import { BsFillBackpack4Fill } from "react-icons/bs";


const Navbar = () => {
  return (
    <div className='w-screen  justify-between flex px-16 z-50'>
        <div>
            Imad Elharchaoui
        </div>
        <div className='flex   h-8'>
                <div className="w-0 h-0 
                        border-l-[20px] border-l-transparent
                        border-t-[32px] border-t-black/25"></div>
                <div className='flex px-4 bg-black/25'>
                    <FaPeopleGroup color='white' size={30} style={{marginLeft:"2px" , marginRight:"2px"}}/>
                    <FaPeopleGroup color='white' size={30} style={{marginLeft:"2px" , marginRight:"2px"}}/>
                    <FaPeopleGroup color='white' size={30} style={{marginLeft:"2px" , marginRight:"2px"}}/>
                </div>
                <div className="w-0 h-0 bg-black/25 
                        border-l-[20px] border-l-transparent
                        border-t-[32px] border-t-red-500"></div>
                <div className='flex h-8 w-40 bg-red-500 text-white font-bold text-3xl justify-center items-center'>
                    
                       <MinuteSecondCounter/>
                     
                </div>
                <div className="w-0 h-0  bg-black/25
                        border-r-[20px] border-r-transparent
                        border-t-[32px] border-t-red-500"></div>
                <div className='flex px-4 bg-black/25'>
                    <FaPeopleGroup color='white' size={30} style={{marginLeft:"2px" , marginRight:"2px"}} />
                    <MdLocalGroceryStore color='white' size={30} style={{marginLeft:"2px" , marginRight:"2px"}} />
                    <BsFillBackpack4Fill color='white' size={30} style={{marginLeft:"2px" , marginRight:"2px"}} />
                </div>
                <div className="w-0 h-0 
                        border-r-[20px] border-r-transparent
                        border-t-[32px] border-t-black/25"></div>
        </div>
        <div className='flex items-center'>
            <img className='h-12 w-12' src={COIN1} alt="" />14
            <img className='h-12 w-12' src={COIN2} alt="" />16K
            
        </div>

    </div>
  )
}

export default Navbar