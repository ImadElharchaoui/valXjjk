import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import ChampList from './Pages/ChampList'
import Navbar from './Pages/Navbar'
import Home from './Pages/Home'
import Queue from './Pages/Queue'


const App = () => {
  return (
    <div className=' flex flex-col items-center font-sedan h-screen w-screen'>
      <BrowserRouter>
          <div className=' absolute top-0 z-50'><Navbar /></div>
        <Routes>
          <Route path="/champions"  element={<ChampList />}/> 
          <Route path="/"  element={<Home />}/> 
          <Route path="/queue"  element={<Queue />}/> 
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App