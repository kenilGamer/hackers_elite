import React from 'react'

function Navbar() {
  return (
    <div className='font1 w-full h-[70px] bg-green-200 flex items-center justify-between p-5 absolute top-0 left-0 z-10'>
        <div className='nav-l '>
            <div className='w-16 h-16 bg-red-400 rounded-full overflow-hidden'>
                <img src="/public/img/Leonardo_Phoenix_A_vintageinspired_logo_that_embodies_the_spir_1.jpg" alt="" />
            </div>
        </div>
        <div className='nav-r flex gap-10 items-center '>
            {["Home","About","Featured","Login"].map((k,i)=>(
                <a key={k}  className={`text-white hover:text-gray-400 transition duration-300`}>
                    {k}
                </a>
            ))
            }
            <input type="search" placeholder='search here' className='p-2 ' />
        </div>
       
    </div>
  )
}

export default Navbar