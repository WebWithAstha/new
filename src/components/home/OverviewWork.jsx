import React from 'react'
import SvgJoin from '../partials/SvgJoin'
import Button from '../partials/Button'


const Project = ({ title, img }) => {
  return (
    <div className="flex md:mb-0 mb-2 border  border-l-0 border-r-0">
      <div className="img w-1/2 md:w-[40vw] h-[20vh] md:h-80 md:mb-10">
        <img className='object-cover w-full h-full' draggable={false} src={img} alt="" />
      </div>
      <div className="flex flex-col justify-between h-[20vh] md:h-80 flex-1 px-4 md:px-10">
        <h1 className='font-[playfair] md:text-7xl uppercase font-black'>Specializing </h1>
        <div className="flex mb-6 md:gap-0 gap-2 items-center">
          <SvgJoin invert={true} margin={true} />
          <h2 className='md:-mb-6 -mb-4 md:text-3xl md:ml-4'>FullStack</h2>
        </div>

      </div>
    </div>
  )
}

const OverviewWork = () => {
  return (
    <>
      <div className='w-full md:min-h-screen md:py-0 py-10 bg-zinc-800 text-zinc-100 md:pt-20 px-6 md:px-10'>
        <h1 className='flex md:mx-auto w-max md:mb-60 mb-10 items-center gap-2  flex-wrap md:text-7xl text-5xl font-light capitalize'>selected <span className="inline-block md:-mb-8 w-12 rounded-full md:w-40 h-1 bg-zinc-700"></span> projects</h1>

        <Project title="Intenshala" img={"https://cdn.dribbble.com/userupload/11827807/file/original-a61f2d1c196aba9003d76a5dfff201fb.png?resize=400x300&vertical=center"} />
        <Project title="Intenshala" img={"https://cdn.dribbble.com/userupload/10885276/file/still-e60b21990c145cf7b20e2bbe73f51fa3.png?resize=320x240&vertical=center"} />
        <Project title="Intenshala" img={"https://cdn.dribbble.com/userupload/16099456/file/still-6349c8566491a5c359660022feb650b6.png?resize=320x240&vertical=center"} />
        <div className="w-full flex justify-center mt-10 md:mt-20">
          <Button title={"See more projects"} />

        </div>
      </div>
      <div className='w-full min-h-screen flex flex-col items-center bg-zinc-800 text-zinc-100 md:py-20 md:px-10'>
        <h1 className='font-[playfair] md:text-7xl md:mb-4'>Glow ups </h1>
        <h1 className='flex items-center gap-2 md:text-7xl font-light'>Old<span className="inline-block md:-mb-8 rounded-full md:w-64 h-1 bg-zinc-700"></span> New Looks</h1>
        <div className="flex md:mt-20 relative w-full h-[60vh]">
          <div className="absolute top-1/2 left-1/2 bg-zinc-500 -translate-x-[120%] -translate-y-1/2 md:ml-4 md:w-[30vw] md:h-[40vh] flex gap-4 items-center justify-center flex-wrap shrink-0 border -rotate-12 md:p-10">
          <img className='w-full h-full object-cover' src="https://cdn.dribbble.com/userupload/9645187/file/original-ce677efb2717f79d9aa0161985326088.png?resize=400x300&vertical=center" alt="" />
          </div>
          <div className="absolute top-1/2 left-1/2 bg-zinc-400 -translate-x-1/2 -translate-y-1/2 md:ml-4 md:w-[30vw] md:h-[40vh] z-[1] flex gap-4 items-center justify-center flex-wrap shrink-0 border -rotate-0 md:p-10">
          <img className='w-full h-full object-cover' src="https://cdn.dribbble.com/userupload/15421293/file/original-2e18f215f86caf9d54524fa0ea1ab484.jpg?resize=400x300&vertical=center" alt="" />
          </div>
          <div className="absolute top-1/2 left-1/2 bg-zinc-300 translate-x-[20%] -translate-y-1/2 md:ml-4 md:w-[30vw] md:h-[40vh] flex gap-4 items-center justify-center flex-wrap shrink-0 border rotate-12 md:p-10">
          <img className='w-full h-full object-cover' src="https://cdn.dribbble.com/userupload/13960546/file/still-aee98eab7d907c9ec259f4de94c3ebc1.png?resize=450x338&vertical=center" alt="" />
          </div>

        </div>
      </div>
    </>
  )
}

export default OverviewWork