import React from 'react'
import Card from './Cards';
import Cardteam from './Cardsteam';

function Page4() {
    const cardsData = [
        {roll:"Researchers", img:"/public/img/botdownloader.com-1725292695.909232[1].jpg", title: 'VAGH VIVEK'},
        {roll:"Group Leader", img:"/public/img/127214403.jpeg", title: 'KENIL SANGANI', },
        {roll:"Resource Collector", img:"/public/img/images.jfif.jpg", title: 'HARSH REVER',  },
        // { img:"/public/img/farmer.png", title: 'Accessible Technology', description: 'Makes advanced plant health monitoring accessible to farmers of all levels.'},
      ];
  return (
    <div className='w-full h-screen bg-slate-100 p-10'>
    <h1 className='text-center text-5xl font-black'>Team</h1>
    <div className='w-full h-full flex items-center justify-center gap-16'>
      {cardsData.map((card, index) => (
        <div key={index}>
          <Cardteam imgs={card.img} title={card.title} roll={card.roll} />
        </div>
      ))}
    </div>
  </div>
  )
}

export default Page4