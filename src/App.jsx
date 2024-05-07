import React from 'react'
import ChampList from './Pages/ChampList'
import Navbar from './Pages/Navbar'

const App = () => {
  return (
    <div className=' flex flex-col items-center font-sedan h-screen w-screen'>
      <Navbar />
      <ChampList />
    </div>
  )
}

export default App