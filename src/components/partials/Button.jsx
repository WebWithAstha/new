import React from 'react'

const Button = ({title,black}) => {
  return (
    <button className={`${black?'bg-zinc-800 text-white':'bg-zinc-100 text-black'} border whitespace-nowrap px-4 py-2 md:px-10 md:py-2 border-zinc-700`}>{title}</button>
  )
}

export default Button