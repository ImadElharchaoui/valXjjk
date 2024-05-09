import React,{useEffect , useRef, useState} from 'react'
import Navbar from './Navbar'
import Champ_ability from '../Component/ChampList_component/Champ_ability'
import Background from '../Component/ChampList_component/Background'

import gsap from 'gsap'

const ChampList = () => {
  const [selected, setSelected] = useState(0);
  const [characterName , setCharacterName] = useState('Name')
  const [LastName , setLastName] = useState('Name')
  const characterArray = ["gojo", "itodori", "sukuna", "yuta"]
  const LastNameArray = ["saturo", "saturo", "saturo", "saturo"]
  const BGName = useRef(null);
   
  useEffect(()=>{

    setCharacterName(characterArray[selected])
    setLastName(LastNameArray[selected])

    gsap.fromTo(
      BGName.current,
      {
        x:600
      },{
        x:0,
        duration:1
      }
    )

  }, [selected])
  return (
    <div className='w-screen h-screen absolute justify-around  items-center flex overflow-hidden'>
      <div className='w-screen h-screen absolute justify-around  items-center flex overflow-hidden'>

      {/*background color based of color img*/}
      <img
                className='-z-50 absolute scale-[2] blur-xl w-full h-full object-cover'
                src={'/Images/background/' + characterName + '.png'}
                alt=''
      />
      <div className='absolute left-16 top-24 text-black font-banger font-extrabold text-9xl drop-shadow-[0_4px_4px_rgba(255,255,255,1)]' ref={BGName}>
        {characterName + " " + LastName} <br />
        {characterName + " " + LastName} <br />
        {characterName + " " + LastName} <br />
        {characterName + " " + LastName} <br />
        {characterName + " " + LastName}  
        
        
      </div>
      <div>
        
      </div>
      <Background characterName={characterName} LastName={LastName} />
      <Champ_ability characterName={characterName} LastName={LastName}/>
      </div>
        <div className='bg-black/25 p-4 absolute bottom-10 flex border-t-2 border-white w-screen justify-center'>
      {characterArray.length === 0 ? (
          <p className="text-white ">No characters found.</p>
        ) : (
          characterArray.map((character, index) => (
            <div key={index} className="text-white mb-2 mx-2 border-2 border-white" 
                onClick={()=>{setSelected(index)}}>
              <img className='h-20 w-20' src={`/Images/icon/${character}_icon.jpg`} alt="" />
            </div>
          ))
        )}
       
    </div>
  </div>
 
  )
}

export default ChampList