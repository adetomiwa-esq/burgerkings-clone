'use client'
import React from 'react';
import { OfferList } from './OfferList'
import { useSelector } from 'react-redux';
import { RootState } from '../GlobalRedux/store';
import { MdOutlineSmartphone } from 'react-icons/md'
import { RiTableFill } from 'react-icons/ri'

export default function Right() {
    const { currentImg } = useSelector((store: RootState) => store.ImageSlice)

  
  return (
    <section className='w-[65%]'>
      {
        
          <div className='text-center px-6'>
            <img src={currentImg.imgSrc} alt='' className='mx-auto h-[250px] w-[250px]' />
            <h1 className='text-4xl font-black mt-6'>{currentImg.h1}</h1>
            <p className='mt-2 font-bold text-lg'>{currentImg.p}</p>

            <div className='w-8/12 mx-auto mt-14'>
                <button className="hover:bg-[rgb(167,27,0)] bg-[rgb(214,35,0)] text-lg text-white flex items-center mx-auto py-2 w-[250px] justify-center rounded-[40px] font-bold mb-4">
                    <i className='text-2xl'><MdOutlineSmartphone /></i>
                    <span className='ml-3'>Add to Order</span>
                </button>

                <div className='flex w-fit mx-auto items-center text-lg mb-4 cursor-pointer hover:text-[rgb(214,35,0)]'>
                    <i><RiTableFill /></i>
                    <span className='font-bold ml-2'>Use at restaurant</span>
                </div>
                <p className='text-[0.75rem] font-semibold'>Not valid in conjunction with any other offer. One voucher per transaction. Valid only in the UK. Subject to availability. Voucher valid at participating restaurants only. Not valid at Burger King motorway service locations, airports train stations and holiday parks. © 2023 Burger King Europe GmbH. All rights reserved.</p>
            </div>
          </div>
      }
    </section>
  )
}
