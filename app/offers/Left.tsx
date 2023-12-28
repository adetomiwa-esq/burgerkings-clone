'use client'
import { OfferList } from './OfferList'
import { useDispatch } from 'react-redux'
import { changeImg } from '../GlobalRedux/Features/ImageSlice'

export default function Left() {

  const dispatch = useDispatch()
  return (
    <section className='w-[35%] h-screen overflow-y-scroll px-5'>
      {
        OfferList.map((item, index) => (
          <div
            key={index}
            className='flex py-5 border-b border-b-[rgb(187,163,145)] cursor-pointer'
            onClick={() => dispatch(changeImg(item))}>
            <div className={`${index > 7 ? 'bg-[#feaa00]' : ''} mr-2 w-[160px] max-w-[160px]`}>
              <img
                src={item.imgSrc}
                alt='burger pic'
                className='max-w-[140px]'/>
            </div>
            

            <div className='w-[calc(100%-168px)]'>
              <h3 className='font-black mb-2 leading-[19px]'>{item.h1}</h3>
              <p className='text-sm'>{item.p.length > 65 ? item.p.slice(0, 65) + '...' : item.p}</p>
            </div>
          </div>
        ))
      }
    </section>
  )
}
