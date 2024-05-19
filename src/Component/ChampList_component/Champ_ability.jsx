import React, {useEffect, useRef, useState} from 'react'
import gsap from 'gsap';

const Champ_ability = ({characterName , LastName}) => {
    const basPath = '../Images/Ability/';
    const descRef = useRef(null);
    const [descText, setDescText] = useState(0)

    const TextArray = ["Satoru Gojo (五ご条じょう悟さとる Gojō Satoru?) is one of the main protagonists of the Jujutsu Kaisen series. He is a special grade jujutsu sorcerer and widely recognized as the strongest in the world. Satoru is the pride of the Gojo Clan, the first person to inherit both the Limitless and the Six Eyes in four hundred years. He works as a teacher at the Tokyo Jujutsu High and uses his influence to protect and train strong young allies." , "ability 1 description", "ability 2 description", "ability 3 description", "ability 4 description"]
    useEffect(()=>{
        gsap.fromTo(descRef.current,
             {  
                opacity:0
             } ,
            {   
                opacity:1,
                 duration:1
            } 
        )

        
    }, [characterName, descText])




  return (
    <div className='h-[600px] w-[400px]  absolute right-40 z-10' ref={descRef}>
        <div className='text-black text-3xl font-kode font-extrabold p-4 bg-white/50' onClick={()=>{setDescText(0);}}>
            <p>{characterName}</p>
            <p>{LastName}</p>
        </div>

        <div className='flex  mt-4 p-4 justify-around'>
            <div className=' bg-white/50 w-20 h-24 flex flex-col justify-center items-center' onClick={()=>{setDescText(1)}}>
                <img className='h-16 w-16' src={basPath + characterName + "1.png"} alt="" />
                <p className='bg-white/25'>Ability1</p>
            </div>
            <div className=' bg-white/50 w-20 h-24 flex flex-col justify-center items-center ' onClick={()=>{setDescText(2)}}>
                <img className='h-16 w-16' src={basPath + characterName + "2.png"} alt="" />
                <p className='bg-white/25'>Ability2</p>
            </div>
            <div className=' bg-white/50 w-20 h-24 flex flex-col justify-center items-center ' onClick={()=>{setDescText(3)}}>
                <img className='h-16 w-16' src={basPath + characterName + "3.png"} alt="" />
                <p className='bg-white/25'>Ability3</p>
            </div>
            <div className=' bg-white/50 w-20 h-24 flex flex-col justify-center items-center ' onClick={()=>{setDescText(4)}}>
                <img className='h-16 w-16' src={basPath + characterName + "4.png"} alt="" />
                <p className='bg-white/25'>Ability4</p>
            </div>
            
        </div>
        <div className='bg-white/50 p-4 py-7 text-black font-bold min-h-[700px]:' >
            <p >{TextArray[descText]}</p></div>

    </div>
  )
}

export default Champ_ability