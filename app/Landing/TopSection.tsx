import React, { useEffect } from 'react'
import Link from 'next/link'
import { homeImg } from './Mockdata'
import 'aos/dist/aos.css'
import AOS from 'aos'

export default function TopSection() {

  useEffect(() => {
    AOS.init({duration: 3000})
  }, [])
  return (
    <section>
        <div className={`fixed top-12 left-1/2`}>
          <h1>Burger King, The King of Grills</h1>
          <img src="https://cdn.sanity.io/images/czqk28jt/prod_bk_gb/fe9f2cc38fc372d47c909b4aedc3429e8bfbc89b-590x393.png?w=750&q=40&fit=max&auto=format" alt="" />
        </div>

        <div className='bg-[rgb(80,35,20)] flex justify-between items-center text-white pb-4 pt-9 px-5'>
            <div className='w-7/12 md:w-9/12 '>
                <img src='https://cdn.sanity.io/images/czqk28jt/prod_bk_gb/0cf1af0a0daab9d078b561f98d55a73aec3bcb61-1250x200.png?w=320&q=40&fit=max&auto=format' alt='burgerking' className='w-[220px]' />
                <p>Welcome! You can earn points with every purchase and use them to redeem rewards.</p>
            </div>

            <Link href=''><button className='flex rounded-[20px] border bg-transparent hover:bg-[rgb(245,235,220)] px-3 py-1 items-center w-fit'>
                <img src='https://cdn.sanity.io/images/czqk28jt/prod_bk_gb/8044204b423e85ae195d35eb5d342da17bc99a4e-197x197.svg' className='w-5 mr-2' /> <span>Learn More</span></button>
            </Link>
        </div>

        <div className='flex flex-wrap justify-between px-5 md:px-10 lg:px-[70px] pt-28 pb-20 md:pb-48'>
          {
            homeImg.map((img, index) => (
              <div className='w-[100%] rounded-[15px] overflow-hidden mb-8 md:mb-5 md:w-[49%]' key={index}>
                <img src={img.imgSrc} alt='img' className='block w-full md:h-[260px]'/>

                <div className='bg-white px-3 py-2 justify-center flex flex-col text-[rgb(80,35,20)] md:h-[calc(100%-260px)]'>

                  <div className='flex flex-col md:flex-row md:items-center justify-between'>
                    <div className='mb-3 md:mb-0 md:w-5/12 lg:w-7/12'>
                      <h3 className='font-bold'>{img.h3}</h3>
                      <p className='text-[12px]'>{img.description}</p>
                    </div>
                    <button className='bg-[rgb(214,35,0)] text-[rgb(245,235,220)] h-fit px-5 py-3 font-[900] text-lg rounded-[25px] w-fit'>{img.button}</button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>

        <div className='bg-[#efe1cc] flex flex-col-reverse md:flex-row text-center md:text-start'>
          <img src="https://cdn.sanity.io/images/czqk28jt/prod_bk_gb/ec025695dc78c9198b572d6b0aadda878415b78c-1340x2014.png?w=750&q=40&fit=max&auto=format" alt="phone" className='h-[400px] w-[300px] mx-auto md:w-auto md:h-[500px] lg:h-[600px] md:mt-[-120px] lg:mt-[-150px] md:ml-auto' />

          <div className='mx-auto md:mx-0 w-[95%] sm:w-[400px] mt-8'>
            <div className='font-black text-3xl lg:text-5xl mb-10'>
              <h1>Save £££</h1>
              <h1>With offers on demand</h1>
            </div>
            <div className="flex font-thin items-center justify-center md:justify-start mb-7">
              <div className='w-[120px] overflow-hidden h-[37px] rounded-[10px] md:flex justify-center items-center mr-5 hidden'>
                <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRfim7yLqXOOsb6qu9MKZwbxZAYjBI3_zcuJswppJrjhURnvbjE" alt="" className='w-full h-[110%]' />
              </div>

              <div className='w-[130px] overflow-hidden h-[37px] rounded-[10px] flex justify-center items-center'>
                <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR6dfNow_i34MdggT7i0XrDmF5M7xYMftwtgAIDh9tJ5UCR4FVS" alt="" className='w-full h-[110%]'/>
              </div>
            </div>
            <p className='font-semibold text-[12px]'>Apple and the Apple logo are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Google Play is a trademark of Google Inc. Terms apply.</p>
          </div>
        </div>
    </section>
  )
}
