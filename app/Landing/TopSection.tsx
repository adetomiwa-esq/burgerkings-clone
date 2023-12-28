import React from 'react'
import Link from 'next/link'
import { homeImg } from './Mockdata'

export default function TopSection() {
  return (
    <section>
        <div className='bg-[rgb(80,35,20)] flex justify-between items-center text-white pb-4 pt-9 px-5'>
            <div>
                <img src='https://cdn.sanity.io/images/czqk28jt/prod_bk_gb/0cf1af0a0daab9d078b561f98d55a73aec3bcb61-1250x200.png?w=320&q=40&fit=max&auto=format' alt='burgerking' className='w-[220px]' />
                <p>Welcome! You can earn points with every purchase and use them to redeem rewards.</p>
            </div>

            <Link href=''><button className='flex rounded-[20px] border bg-transparent hover:bg-[rgb(245,235,220)] px-3 py-1 items-center'>
                <img src='https://cdn.sanity.io/images/czqk28jt/prod_bk_gb/8044204b423e85ae195d35eb5d342da17bc99a4e-197x197.svg' className='w-5 mr-2' /> <span>Learn More</span></button>
            </Link>
        </div>

        <div className='flex flex-wrap justify-between px-10 lg:px-[70px] pt-28 pb-48'>
          {
            homeImg.map((img, index) => (
              <div className='w-[100%] rounded-[15px] overflow-hidden mb-5 md:w-[49%]' key={index}>
                <img src={img.imgSrc} alt='img' className='block w-full h-[260px]'/>

                <div className='bg-white px-3 py-2 justify-center flex flex-col text-[rgb(80,35,20)] h-[calc(100%-260px)]'>

                  <div className='flex items-center justify-between'>
                    <div className='w-5/12 lg:w-7/12'>
                      <h3 className='font-bold'>{img.h3}</h3>
                      <p className='text-[12px]'>{img.description}</p>
                    </div>
                    <button className='bg-[rgb(214,35,0)] text-[rgb(245,235,220)] h-fit px-5 py-3 font-[900] text-lg rounded-[25px]'>{img.button}</button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>

        <div className='bg-[#efe1cc] flex'>
          <img src="https://cdn.sanity.io/images/czqk28jt/prod_bk_gb/ec025695dc78c9198b572d6b0aadda878415b78c-1340x2014.png?w=750&q=40&fit=max&auto=format" alt="phone" className='h-[600px] mt-[-150px] ml-auto' />

          <div className='w-[400px] mt-8'>
            <div className='font-semibold text-5xl mb-10'>
              <h1>Save £££</h1>
              <h1>With offers on demand</h1>
            </div>
            <div className="flex font-thin items-center mb-7">
              <div className='w-[120px] overflow-hidden h-[37px] rounded-[10px] flex justify-center items-center'>
                <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRfim7yLqXOOsb6qu9MKZwbxZAYjBI3_zcuJswppJrjhURnvbjE" alt="" className='w-full h-[110%]' />
              </div>

              <div className='ml-5 w-[130px] overflow-hidden h-[37px] rounded-[10px] flex justify-center items-center'>
                <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR6dfNow_i34MdggT7i0XrDmF5M7xYMftwtgAIDh9tJ5UCR4FVS" alt="" className='w-full h-[110%]'/>
              </div>
            </div>
            <p className='font-semibold text-[12px]'>Apple and the Apple logo are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Google Play is a trademark of Google Inc. Terms apply.</p>
          </div>
        </div>
    </section>
  )
}
