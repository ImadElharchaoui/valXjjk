import React, {useState} from 'react'
//Component
import MinuteSecondCounter from '../Component/Navbar_component/MinuteSecondCounter';
//currency img 
import COIN1 from '/src/Images/currency/coin1.png'
import COIN2 from '/src/Images/currency/coin2.png'
//icons
import { FaPeopleGroup } from "react-icons/fa6";
import { MdLocalGroceryStore } from "react-icons/md";
import { BsFillBackpack4Fill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { CgSearchLoading } from "react-icons/cg";


import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const [clicked, setClicked] = useState(false);
    const navigate = useNavigate()
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
                    <FaHome color='white' size={30} style={{marginLeft:"4px" , marginRight:"4px"}} onClick={()=>{navigate(`/`)}}/>
                    <CgSearchLoading color='white' size={30} style={{marginLeft:"4px" , marginRight:"4px"}} onClick={()=>{navigate('/queue')}}/>
                    <FaPeopleGroup color='white' size={30} style={{marginLeft:"4px" , marginRight:"4px"}}/>
                </div>
                <div className="w-0 h-0 bg-black/25 
                        border-l-[20px] border-l-transparent
                        border-t-[32px] border-t-red-500"></div>
                <div onClick={()=>{setClicked(!clicked); console.log(clicked)}} className='flex h-8 w-40 bg-red-500 text-white font-bold text-3xl justify-center items-center'>
                
                       <MinuteSecondCounter clicked={clicked}/>
              
                     
                </div>
                <div className="w-0 h-0  bg-black/25
                        border-r-[20px] border-r-transparent
                        border-t-[32px] border-t-red-500"></div>
                <div className='flex px-4 bg-black/25'>
                    <FaPeopleGroup color='white' size={30} style={{marginLeft:"4px" , marginRight:"4px"}} onClick={()=>{navigate(`/champions`)}} />
                    <MdLocalGroceryStore color='white' size={30} style={{marginLeft:"4px" , marginRight:"4px"}} />
                    <BsFillBackpack4Fill color='white' size={30} style={{marginLeft:"4px" , marginRight:"4px"}} />
                </div>
                <div className="w-0 h-0 
                        border-r-[20px] border-r-transparent
                        border-t-[32px] border-t-black/25"></div>
        </div>
        <div className='flex items-center'>
            <img className='h-12 w-12' src={COIN1} alt="" /> <p className='text-white drop-shadow-[4px_4px_rgba(0,0,0,1)]'>14</p>
            <img className='h-12 w-12' src={COIN2} alt="" /> <p className='text-white drop-shadow-[4px_4px_rgba(0,0,0,1)]'>16K</p>
            
        </div>

    </div>
  )
}

export default Navbar