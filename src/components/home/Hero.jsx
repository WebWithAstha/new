import React from 'react'
import Button from '../partials/Button'
import SvgJoin from '../partials/SvgJoin'

const Hero = () => {
    return (
        <div className='w-full md:py-20 px-10'>
            <div className="top w-full flex md:flex-row flex-col justify-center md:items-center">

                <div className="intro md:-mr-10 md:mb-0 mb-2 relative z-[0]">
                    <h1 className='md:text-6xl text-2xl md:text-left font-[playfair] font-bold'>Web Developer</h1>
                    <h1 className='md:text-6xl text-2xl md:text-left font-light'>who codes with style</h1>
                    <h1 className='md:text-6xl text-2xl md:text-left font-light'>and loves design.</h1>
                </div>
                <div className="img md:w-[30vw] h-[40vh] md:h-[60vh]">
                    <img className='w-full h-full md:object-top object-cover' src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
            </div>
            <div className="flex justify-center items-center mx-auto w-max my-10 md:my-0 md:mt-20">
                <Button title={"see my work"}/>
                <SvgJoin/>
                <Button title={"get in touch"} black={true}/>
            </div>
        </div>
    )
}

export default Hero