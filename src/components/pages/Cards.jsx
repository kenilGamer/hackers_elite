import React from 'react';

function Card({ title, description, imgs }) {
  return (
    /* From Uiverse.io by dzoshi */
    <div className="card">
      <div className="heading">
        {/* <img className='w-24 ' src={`${imgs}`} alt="" /> */}
        <div className='w-[75px] h-[75px] ml-12 -mt-10 rounded-full'>
            <img src={`${imgs}`} alt="" />
        </div>
        <h1>{title}</h1>
        <p className='text-[2px]'>{description}</p>
      </div>
    </div>
  );
}

export default Card;
