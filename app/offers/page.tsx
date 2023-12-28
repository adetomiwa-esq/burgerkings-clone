import React from 'react'
import { FaTag } from 'react-icons/fa'
import Left from './Left'
import Right from './Right'

export default function page() {
  return (
    <div className='mt-28'>
        <div className='flex items-center mb-5 pl-6'>
            <div className='text-white bg-[rgb(214,35,0)] w-9 h-9 rounded-full flex items-center justify-center'><FaTag /></div>

            <p className='font-black text-lg'>Have a Promo Code?</p>
        </div>

        <div className='flex mb-8'>
          <Left />
          <Right />
        </div>
    </div>
  )
}
