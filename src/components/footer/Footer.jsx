import React from 'react'
import Button from '../partials/Button'
import img from '../../assets/img/pro.jpg'

const Footer = () => {
  return (
    <div className='w-full flex md:flex-row flex-col px-6 py-6 md:items-end md:gap-6 bg-zinc-100 min-h-40 md:px-10 md:py-8'>
        <div className="img md:w-[20vw] h-[30vh] md:h-[50vh]">
                    <img className='w-full h-full md:object-top object-cover' src={img} alt="" />
                </div>
                <div className="">
                <h1 className='md:text-9xl text-6xl md:leading-none w-[60%] mb-4 md:mb-4'>Let's connect</h1>
                <div className="flex flex-wrap gap-4 md:gap-6">
                <h1 className='font-[playfair] text-2xl md:text-4xl'>Instagram</h1>
                <h1 className='font-[playfair] text-2xl md:text-4xl'>Linkedin</h1>
                <h1 className='font-[playfair] text-2xl md:text-4xl'>Github</h1>

                </div>

                </div>
                <div className="md:ml-auto flex flex-col gap-4 md:mt-0 mt-4 md:gap-4">
                    <Button title="see my projects" black={true}/>
                    <Button title="get in touch"/>
                    <Button title="know about me" black={true}/>
                </div>
        </div>
  )
}

export default Footer