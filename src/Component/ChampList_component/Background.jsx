import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Background = ({ characterName }) => {
  const imgRef = useRef(null);
  const basePath = '/Images/background/';

  useEffect(() => {
    if (imgRef.current) { 
      gsap.fromTo(
        imgRef.current, 
        { x: -400 }, 
        { x: 100, duration: 1.25 } 
      );
    }
  }, [characterName]); 

  return (
    <div className='w-[70vh] h-[90vh] absolute bottom-0 z-0'>
      <img
        className='z-10 drop-shadow-[0_4px_4px_rgba(255,255,255,1)]'
        src={(basePath + characterName + '.png')}
        alt={`Background with ${characterName}`}
        ref={imgRef} 
      />
    </div>
  );
};

export default Background;
