import React from 'react'
import SvgJoin from '../partials/SvgJoin'



const frontend = [
  'https://cdn-icons-png.flaticon.com/128/9559/9559322.png',
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg",

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
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3vteG2DudlxILcIB8idhgX49HFuCk4_nEtQ&s",

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
    <div className='w-full flex flex-col md:gap-10 items-center'>
     
      <h1 className='font-[playfair] md:text-7xl text-4xl md:mt-0 mt-4'>Websites <span>using</span></h1>
      {/* <h1 className='font-light md:text-7xl text-3xl'>using</h1> */}
      <div className="flex shrink-0 md:gap-20 gap-2 overflow-hidden overflow-x-auto md:p-10 md:mt-10 mt-4 w-full">
        <Skill icons={frontend} title={"Frontend"} />
        <Skill icons={backend} title={"backend"} />
        <Skill icons={tools} title={"tools"} />
      </div>
    </div>
  )
}

export default OverviewSkills