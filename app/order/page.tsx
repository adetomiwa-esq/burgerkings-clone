import React from 'react'
import Delivery from './Delivery'
import Navbar from '../components/Navbar'

export default function page() {
  return (
    <div className='mt-[60px] sm:mt-[80px]'>
      <Navbar />
      <Delivery />
    </div>
  )
}
