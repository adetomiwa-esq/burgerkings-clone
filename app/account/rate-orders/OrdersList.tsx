'use client'
import { OrderList } from './OrderList'
import { useDispatch } from 'react-redux'
import { changeImg } from '../../GlobalRedux/Features/ImageSlice'
import { useRouter } from 'next/navigation'
import { changeItemToBeRated } from '@/app/GlobalRedux/Features/RatingSlice'

export default function Left() {

  const dispatch = useDispatch()
  const navigate = useRouter()
  
  function proceedToRate(item: any){
    navigate.push('/account/rate-orders/rate-current')
    console.log(item)
    dispatch(changeItemToBeRated(item))
  }
  return (
    <section className='mx-2 md:w-9/12 lg:w-7/12 md:mx-auto'>
      {
        OrderList.map((item, index) => (
          <div
            key={index}
            className='flex flex-col sm:flex-row py-5 border-b border-b-[rgb(187,163,145)]'
            onClick={() => dispatch(changeImg(item))}>
            <div className={`mx-auto sm:mr-2 w-fit sm:w-[160px] max-w-[160px] mb-2 sm:mb-0 sm:mx-0`}>
              <img
                src={item.imgSrc}
                alt='burger pic'
                className='max-w-[120px] sm:max-w-[140px]'/>
            </div>
            

            <div className='sm:w-[calc(100%-168px)]'>
              <h3 className='font-black mb-2 leading-[19px]'>{item.h1}</h3>
              <p className='text-sm mb-3'>{item.p.length > 65 ? item.p.slice(0, 65) + '...' : item.p}</p>

              <button className='bg-green-500 text-white rounded-md py-1 px-3' onClick={() => proceedToRate(item)}>Rate Order</button>
            </div>
          </div>
        ))
      }
    </section>
  )
}
