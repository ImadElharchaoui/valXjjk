import React from 'react'

const Playercard = ({exist}) => {
    const playercardId = Math.floor(Math.random() * 1) +1
    
  return (
        exist ? 
        (<div className=' h-[620px] w-[300px] bg-white/10 flex flex-col items-center relative hover:scale-[1.02]
                          '> 
            <p className='text-lg bg-black text-white rounded-3xl px-4 absolute -top-4 border-2 border-white'>800</p>
            <img src={`/Images/Wallpaper_card/${playercardId}.jpeg`} className='h-[550px] w-[300px] object-cover border-t-2 border-white pt-4' alt="" />
            <p className='text-2xl bg-green-500 w-full text-center mt-4'>Imad Elharchaoui </p>
            <div className='absolute border-r-[150px] border-r-transparent
                                    border-l-[150px] border-l-transparent
                                    border-t-[40px] border-t-white/10 h-0 w-0 -bottom-10 '>
                                        
                                    </div>
        </div>
        )
        :

        (<div className=' h-[620px] w-[300px] bg-white/10 flex flex-col items-center relative justify-center text-green-500 hover:scale-[1.02]'>
            +
            <div className='absolute border-r-[150px] border-r-transparent
                                    border-l-[150px] border-l-transparent
                                    border-t-[40px] border-t-white/10 h-0 w-0 -bottom-10'>
                                        
                                    </div>
        </div>)

    
  )
}

export default Playercard