import React from 'react'
import Home from './components/Home'
import Page2 from './components/pages/Page2'
import LocomotiveScroll from 'locomotive-scroll';
import Page3 from './components/pages/Page3';
import CanvasAnimation from './components/pages/Canvas';
import Page4 from './components/pages/Page4';

function App() {
  const locomotiveScroll = new LocomotiveScroll({
    lenisOptions: {
      autoResize: true,
      smoothScrolling: true,
      wrapper: window,
      content: document.documentElement,
      lerp: 0.1,
      duration: 4.5,
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      smoothTouch: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      normalizeWheel: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    },
  });
  return (
    <div className='w-full h-screen bg-green-500'>
      <CanvasAnimation/>
      <Home/>
      <Page2/>
      <Page3/>
      <Page4/>
    </div>
  )
}

export default App