'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import ResponsiveNav from './ResponsiveNav'
import { AiOutlineClose } from 'react-icons/ai'
import Cart from './Cart'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [displayNav, setDisplayNav] = useState(false)
  const pathname = usePathname()

  function toggleNav(){
    setDisplayNav(prev => !prev)
  }

  const [displayCart, setDisplayCart] = useState(false)


  function toggleCart() {
      setDisplayCart(prev => !prev);
  }

  useEffect(() => {
    
  }, [])
  return (
    <header className={`bg-[rgb(245,235,220)] flex items-center px-7 text-[rgb(80,35,20)] fixed top-0 left-0 w-full justify-between sm:justify-normal h-[60px] sm:h-[80px] z-50 ${pathname === '/signup' ? 'hidden' : '' }`}>
        <div className='sm:hidden' onClick={toggleNav}>
          <span>{displayNav ? <AiOutlineClose /> : <FaBars />}</span>
        </div>
        <ul className="hidden items-center w-[380px] justify-between font-extrabold text-lg sm:flex">
          <li><Link href='/'><FaBars /></Link></li>
          <li><Link href='/order'>Order</Link></li>
          <li><Link href='/offers'>Offers</Link></li>
          <li><Link href='/'>Menu</Link></li>
          <li><Link href='/delivery'>Delivery</Link></li>
          <li><Link href='/'>More</Link></li>
        </ul>

        <div className='flex items-center sm:ml-auto sm:mr-8'>
          <Image src='/images/burger.png' width={70} height={62} alt='logo' className='w-[50px] h-[40px] sm:w-[75px] sm:h-[75px]'/>
          <p className='font-bold hidden sm:block'>For item availability <Link className='underline hover:decoration-transparent font-normal' href='/'>Choose your location</Link></p>
        </div>

        <div className='font-bold flex items-center'>
          <button className='bg-[rgb(214,35,0)] text-white mr-3 py-[2px] px-5 text-sm rounded-[15px] h-fit'>Sign Up</button>
          <button className='bg-[rgb(80,35,20)] text-[rgb(245,235,220)] py-[2px] px-7 text-sm rounded-[15px] h-fit hidden sm:block' onClick={toggleCart}>£0.00</button>
        </div>

        <ResponsiveNav displayNav={displayNav}/>

        <Cart displayCart={displayCart}/>
    </header>
  )
}
