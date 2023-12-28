'use client'
import { RootState } from '@/app/GlobalRedux/store'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa'
import { useSelector } from 'react-redux'

export default function RatingSection() {
    const { currentOrder } = useSelector((store: RootState) => store.RatingSlice)
    console.log(currentOrder)
    const stars = 5
    const [select, setSelect] = useState(0)

    const [displayForm, setDlisplayForm] = useState(false)
    const router = useRouter()

    function updateRating(i: number){
      setSelect(i + 1)
      setDlisplayForm(true)
    }

    useEffect(() => {
      function navigateBack(){
        if(!currentOrder.imgSrc){
          router.push('/account/rate-orders')
        }
      }

      navigateBack()
    }, [])

    
  return (
    <div className='w-11/12 sm:w-7/12 mx-auto my-7'>
      <div className='flex items-center px-3'>
        <img src={currentOrder.imgSrc} className='w-24 sm:w-36 mr-3' alt="" />
        <h2>{currentOrder.h1}</h2>
      </div>

      <div className='text-center border-t border-[rgb(80,35,20)] mt-4 pt-4'>
        <h3>Tap the stars to select</h3>
        <div className="flex items-center justify-center text-3xl gap-1">
          {
            [...Array(5)].map((x, i) => (
              <i key={i} onClick={() => updateRating(i)}>
                {i >= select ? <FaRegStar /> : <FaStar />}
              </i>
            ))
          }
        </div>
      </div>

      {displayForm &&
        <form action="" className='mt-16'>
          <p className='uppercase mb-5'>
            {
              select === 0 ? '' : select <= 3 ? 'How can we improve it?':select === 4 ? 'How can we make it perfect?' : 'What did you like the most about it?'
            }
          </p>

          <input
            type="text"
            name=""
            id=""
            placeholder='Review Title *'
            className='border-b border-[rgb(121,68,51)] bg-transparent w-full px-1'
          />

          <div className='my-8'>
            <label htmlFor="" className='block mb-3 text-[13px]'>Write a Review *</label>
            <textarea name="" id="" className='bg-transparent border border-[rgb(121,68,51)] resize-none w-full rounded-lg h-24'></textarea>
          </div>

          <div className='mb-8'>
            <label htmlFor="" className='text-[13px]'>Your name *</label>
            <input
              type="text"
              name=""
              id=""
              value='Busayo'
              className='border-b border-[rgb(121,68,51)] bg-transparent w-full px-1'
            />
          </div>

          <button className='bg-[rgb(121,68,51)] text-white w-full h-12 rounded-md'>Submit Review</button>
        </form>
      }
    </div>
  )
}
