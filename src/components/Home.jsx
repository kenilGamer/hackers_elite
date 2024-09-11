import React from 'react'
import Navbar from './pages/Navbar'
import Page1 from './pages/Page1'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function Home() {
  useGSAP(()=>{
    const tl = gsap.timeline();
    tl.from('.nav-l ', {opacity:0, duration:1, y:-100})
    tl.from(".nav-r ",{
        opacity:1, 
        duration:1, 
        y:-100, 
        stagger:0.2
    })  
    
})
  return (
    <div className='w-full h-screen overflow-hidden relative'>
        <Navbar/>
        <Page1/>
    </div>
  )
}

export default Home