import React from 'react'
import Hero from '../home/Hero'
import Nav from '../navbar/Nav'
import OverviewSkills from '../home/OverviewSkills'
import OverviewWork from '../home/OverviewWork'
import Footer from '../footer/Footer'

const Home = () => {
  return (
    <>
    <div className="w-full min-h-screen overflow-x-hidden bg-zinc-100">

    <Nav/>
    <Hero/>
    <OverviewSkills/>
    <OverviewWork/>
    <Footer/>
    </div>
    </>
  )
}

export default Home