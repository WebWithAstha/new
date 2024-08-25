import React from 'react'
import Button from '../partials/Button'

const Footer = () => {
  return (
    <div className='w-full flex md:flex-row flex-col px-6 py-6 md:items-end md:gap-6 bg-zinc-100 min-h-40 md:px-10 md:py-8'>
        <div className="img md:w-[20vw] h-[50vh]">
                    <img className='w-full h-full object-top object-cover' src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div className="">
                <h1 className='md:text-9xl text-6xl md:leading-none w-[60%] mb-4 md:mb-4'>Let's connect</h1>
                <div className="flex flex-wrap gap-4 md:gap-6">
                <h1 className='font-[playfair] text-3xl md:text-4xl'>Instagram</h1>
                <h1 className='font-[playfair] text-3xl md:text-4xl'>Linkedin</h1>
                <h1 className='font-[playfair] text-3xl md:text-4xl'>Github</h1>

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