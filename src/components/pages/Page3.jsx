import React from 'react';
import Card from './Cards';

function Page3() {
  const cardsData = [
    { img:"/public/img/farmer.png", title: 'Real-Time Virus Detection', description: 'Detects plant viruses quickly and accurately with just a camera scan.'},
    { img:"/public/img/farmers.png", title: 'User-Friendly Interface', description: 'Designed for ease of use, requiring no specialized knowledge to operate.'},
    { img:"/public/img/peasant.png", title: 'Instant Insights', description: 'Provides immediate feedback and actionable recommendations for plant care.'},
    { img:"/public/img/farmer.png", title: 'Accessible Technology', description: 'Makes advanced plant health monitoring accessible to farmers of all levels.'},
  ];

  return (
    <div className='w-full h-screen bg-slate-100 p-10'>
      <h1 className='text-center text-5xl font-black'>Featured</h1>
      <div className='w-full h-full flex items-center justify-center gap-16'>
        {cardsData.map((card, index) => (
          <div key={index}>
            <Card imgs={card.img} title={card.title} description={card.description} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page3;
