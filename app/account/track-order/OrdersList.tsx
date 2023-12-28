'use client'
import { OrderList } from './OrderList'
import { useDispatch } from 'react-redux'
import { changeImg } from '../../GlobalRedux/Features/ImageSlice'

export default function Left() {

  const dispatch = useDispatch()
  return (
    <section className='mx-2 md:w-9/12 lg:w-7/12 md:mx-auto'>
      {
        OrderList.map((item, index) => (
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
              <p className='text-sm mb-3'>{item.p.length > 65 ? item.p.slice(0, 65) + '...' : item.p}</p>

                {
                    item.status?.toLowerCase() === "delivered" ?

                    <button className='bg-green-500 text-white rounded-md py-1 px-3'>DELIVERED</button> :

                    <div>
                      <div className='relative w-full h-1 bg-white'>
                        <div className='bg-green-500 h-full w-7/12'></div>
                        <div className="absolute h-3 top-1/2 bg-green-500 w-1 -translate-y-1/2"></div>
                        <div className="absolute h-3 top-1/2 bg-green-500 w-1 right-0 -translate-y-1/2"></div>
                      </div>

                      <p className='mt-2'>
                        <span>Estimated time of delivery: </span>
                        <span>2:00:00</span>
                      </p>
                    </div>
                }
            </div>
          </div>
        ))
      }
    </section>
  )
}
