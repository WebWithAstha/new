import React from 'react'
import SvgJoin from '../partials/SvgJoin'


const design = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3vteG2DudlxILcIB8idhgX49HFuCk4_nEtQ&s",
  "https://i0.wp.com/css-tricks.com/wp-content/uploads/2021/01/gsap-scrolltrigger.png?fit=1800%2C900&ssl=1",

]
const frontend = [
  'https://cdn-icons-png.flaticon.com/128/9559/9559322.png',
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",

]
const backend = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",

]
const tools = [

  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",

]

const Skill = ({ icons, title }) => {
  return (
    <div className="flex md:w-[40vw] w-full md:flex-row flex-col-reverse gap-4 md:gap-0 shrink-0 md:items-center py-10 md:py-0">
      <h1 className='font-[playfair] md:text-7xl text-5xl md:w-max  md:mr-4'>{title}</h1>
      <SvgJoin invert={true} hidden={true} margin={true} />
      <div className="md:w-[20vw] w-[50vw] min-h-[40vh] md:h-max md:ml-4 flex gap-8 md:gap-4 items-center justify-center flex-wrap shrink-0 border md:-rotate-12 md:p-10">
        {icons && icons.map((img, i) => (
          <img className='md:w-20 w-12 shrink-0 h-max rounded-lg' src={img} alt="" />
        ))}
      </div>
    </div>
  )

}


const OverviewSkills = () => {
  return (
    <div className='w-full min-h-screen flex flex-col md:gap-10 items-center px-10 py-10 md:py-20 text-zinc-100 bg-zinc-800'>
      <h1 className='font-[playfair] mb-4 md:mb-0 md:w-max w-1/2 text-5xl'>Specializing </h1>
      <h1 className='flex items-center gap-2 mb-4 md:mb-0 md:text-7xl text-5xl font-light'>in <span className="inline-block md:-mb-8 -mb-4 rounded-full md:w-64 w-12 h-1 bg-zinc-700"></span> crafting</h1>
      <div className="w-full border md:pb-5 md:py-4 py-4 md:px-4 px-2 flex gap-4 md:gap-8 overflow-hidden">
        <h1 className='md:text-5xl text-6xl opacity-50 hover:opacity-100 duration-200 cursor-pointer'>Responsive</h1>
        <h1 className='md:text-5xl text-6xl opacity-50 hover:opacity-100 duration-200 cursor-pointer'>Creative</h1>
        <h1 className='md:text-5xl text-6xl opacity-50 hover:opacity-100 duration-200 cursor-pointer'>Secure</h1>
        <h1 className='md:text-5xl text-6xl opacity-50 hover:opacity-100 duration-200 cursor-pointer'>Unique</h1>
        <h1 className='md:text-5xl text-6xl opacity-50 hover:opacity-100 duration-200 cursor-pointer'>Functional</h1>
        <h1 className='md:text-5xl text-6xl opacity-50 hover:opacity-100 duration-200 cursor-pointer'>Luxurious</h1>
        <h1 className='md:text-5xl text-6xl opacity-50 hover:opacity-100 duration-200 cursor-pointer'>Stunning</h1>
      </div>
      <h1 className='font-[playfair] md:text-7xl text-5xl md:mt-0 mt-4'>Websites</h1>
      <h1 className='font-light md:text-7xl text-5xl'>using</h1>
      <div className="flex shrink-0 md:gap-20 gap-2 overflow-hidden overflow-x-auto md:p-10 md:mt-10 mt-4 w-full">
        <Skill icons={design} title={"Design & Animation"} />
        <Skill icons={frontend} title={"Frontend"} />
        <Skill icons={backend} title={"backend"} />
        <Skill icons={tools} title={"tools"} />
      </div>
    </div>
  )
}

export default OverviewSkills