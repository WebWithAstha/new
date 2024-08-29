import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect, useRef, useState } from 'react'

const Cursor = () => {

    const cursorRef = useRef();
let moveX = useRef(0);
let moveY = useRef(0);

useEffect(() => {
    const handleMouseMove = (e) => {
        moveX.current = e.clientX;
        moveY.current = e.clientY;

        gsap.to(cursorRef.current, {
            x: moveX.current,
            y: moveY.current,
            ease: "linear",
        });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
        document.removeEventListener('mousemove', handleMouseMove);
    };
}, []);

  return (
    <div ref={cursorRef} className='border md:block hidden -translate-x-1/2 -translate-y-1/2 fixed border-black w-max rounded-full aspect-square p-4'>
        <div className="bg-black w-1 aspect-square rounded-full"></div>
    </div>
  )
}

export default Cursor