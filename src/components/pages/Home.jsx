import React from 'react'
import Hero from '../home/Hero'
import Nav from '../navbar/Nav'
import OverviewSkills from '../home/OverviewSkills'
import OverviewWork from '../home/OverviewWork'
import Footer from '../footer/Footer'
import OverviewAbout from '../home/OverviewAbout'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Cursor from '../partials/Cursor'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SvgFlower from '../partials/SvgFlower'

const Home = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to('#title-h1', { y: 8, repeat: -1, yoyo: true, duration: .9, ease: "linear" });


 
    gsap.from("#project1 .img",{
      width:0,
      duration:.6,
      ease: "linear",
      scrollTrigger:{
        trigger:'#project1',
        scroller:'body',
        start:'top 80%',
        end:'top 90%',
        scrub:2,
        // markers:true
      }
    },"q")
    gsap.from("#project2 .img",{
      width:0,
      duration:.6,
      ease: "linear",
      scrollTrigger:{
        trigger:'#project2',
        scroller:'body',
        start:'top 80%',
        end:'top 90%',
        scrub:2,
      }
    })
    gsap.from("#project3 .img",{
      width:0,
      duration:.6,
      ease: "linear",
      scrollTrigger:{
        trigger:'#project3',
        scroller:'body',
        start:'top 80%',
        end:'top 90%',
        scrub:2,
      }
    })

  }, [])


  return (
    <>
    <div className="w-full h-screen z-[9] fixed top-0 left-0 bg-black/[.7] text-zinc-200  flex flex-col md:gap-6 items-center md:pt-64 pt-40">
    <SvgFlower/>
    <h1 className='font-[playfair] mb-4 md:mb-0 md:w-max mx-auto md:text-5xl text-4xl'>Under Construction </h1>
    <p>You can scroll though</p>
    </div>
      <Cursor />
      <div className="w-full min-h-screen overflow-x-hidden bg-zinc-100">
        <Nav />
        <Hero />
        <div className='w-full flex flex-col md:gap-10 items-center px-10 py-10 md:py-20 text-zinc-100 bg-zinc-800'>
          <OverviewAbout />
        </div>
        <OverviewWork />
        <Footer />
      </div>
    </>
  )
}

export default Home