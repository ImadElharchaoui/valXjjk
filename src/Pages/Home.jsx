import React from 'react'
import Navbar from './Navbar'
import Sidebar from '../Component/Home_component/Sidebar'
import Wallpaper from './Images/background/wallpaper.png'



const Home = () => {

  return (
    <div className= 'h-screen w-screen relative'>
        <img className='h-screen w-screen' src={Wallpaper} alt="Wallpaper" />
        <Sidebar />

    </div>
  )
}

export default Home