import React from 'react'

const OverviewAbout = () => {
  return (
    <div className='w-full flex flex-col md:gap-10 items-center   '>
    <h1 className='font-[playfair] mb-4 md:mb-0 md:w-max mx-auto md:text-5xl text-4xl '>Specializing </h1>
    <h1 className='flex items-center gap-2 mb-4 md:mb-0 md:text-7xl text-4xl  font-light'>in <span className="inline-block md:-mb-8 -mb-4 rounded-full md:w-64 w-12 h-1 bg-zinc-700"></span> crafting</h1>
    <div className="w-full border md:pb-5 md:py-4 py-4 md:px-4 px-2 flex gap-4 md:gap-8 overflow-hidden">
      <h1 className='md:text-5xl text-4xl opacity-50 hover:opacity-100 duration-200 cursor-pointer'>Responsive</h1>
      <h1 className='md:text-5xl text-4xl opacity-50 hover:opacity-100 duration-200 cursor-pointer'>Creative</h1>
      <h1 className='md:text-5xl text-4xl opacity-50 hover:opacity-100 duration-200 cursor-pointer'>Secure</h1>
      <h1 className='md:text-5xl text-4xl opacity-50 hover:opacity-100 duration-200 cursor-pointer'>Unique</h1>
      <h1 className='md:text-5xl text-4xl opacity-50 hover:opacity-100 duration-200 cursor-pointer'>Functional</h1>
      <h1 className='md:text-5xl text-4xl opacity-50 hover:opacity-100 duration-200 cursor-pointer'>Luxurious</h1>
      <h1 className='md:text-5xl text-4xl opacity-50 hover:opacity-100 duration-200 cursor-pointer'>Stunning</h1>
    </div>
    </div>
  )
}

export default OverviewAbout