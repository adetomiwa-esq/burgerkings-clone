import React from 'react'
import { MenuList } from '../components/MenuList'

export default function Menu() {
  return (
    <div>
      <div className='bg-[#f5ebdc mt-[80px]'>
        <div className='bg-[rgb(80,35,20)] text-[rgb(245,235,220)] font-black text-6xl text-center py-12'>
           Our Menu
        </div>

        <div className='flex flex-wrap flex-col md:flex-row md:w-[93%] xl:w-9/12 mx-auto justify-between md:py-8'>
         {
            MenuList.map((item, index) => (
              <div key={index} className='w-full py-2 px-2 flex md:block md:mb-4 md:rounded-lg overflow-hidden border-b border-b-[rgb(215,199,181)] md:border-b-0 md:shadow-2xl md:bg-white delay-500 duration-500 ease-in-out md:w-[32%] md:py-0 md:px-0'>
                <img className='w-[100px] rounded-lg md:rounded-none md:w-full md:h-60' src={item.imgSrc} alt={item.title} />
                <div className='md:text-center font-extrabold md:font-normal text-lg ml-2 md:0 py-5 uppercase'>{item.title}</div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
