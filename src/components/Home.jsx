import React from 'react'
import Navbar from './pages/Navbar'
import Page1 from './pages/Page1'

function Home() {
  return (
    <div className='w-full h-screen overflow-hidden relative'>
        <Navbar/>
        <Page1/>
    </div>
  )
}

export default Home