import React from 'react'
import Info from './Info'
import Link from 'next/link'

export default function Main() {
  const burgers = [
    {
      imgSrc: 'https://cdn.sanity.io/images/czqk28jt/prod_bk_gb/72a3fd7e56858e5afed9dac8dbd563e64e04d4fa-400x400.png?rect=12,10,388,380&h=70',
      title: 'TRENDING'
    },
    {
      imgSrc: 'https://cdn.sanity.io/images/czqk28jt/prod_bk_gb/fe9f2cc38fc372d47c909b4aedc3429e8bfbc89b-590x393.png?rect=141,148,311,233&h=70',
      title: 'ALL BURGERS'
    },
    {
      imgSrc: 'https://cdn.sanity.io/images/czqk28jt/prod_bk_gb/fe9f2cc38fc372d47c909b4aedc3429e8bfbc89b-590x393.png?rect=141,148,311,233&h=70',
      title: 'FLAME-GRILLED BURGERS'
    },
    {
      imgSrc: 'https://cdn.sanity.io/images/czqk28jt/prod_bk_gb/278f301ade1c73abe7aaee92995a4685fcbbb52d-870x570.png?rect=185,255,515,301&h=70',
      title: 'CRISPY AND TENDER CHICKEN'
    },
    {
      imgSrc: 'https://cdn.sanity.io/images/czqk28jt/prod_bk_gb/ce2e2058f2d9f243670a71f5d99cb77ef3f41c39-590x393.png?rect=145,132,312,256&h=70',
      title: 'VEGGIE & MORE'
    },
    {
      imgSrc: 'https://cdn.sanity.io/images/czqk28jt/prod_bk_gb/f78f68ec50cebe37c967c2e06d1afbc44d67b98a-870x570.png?rect=173,164,582,406&h=70',
      title: 'KING JR.MEALS'
    },
    {
      imgSrc: 'https://cdn.sanity.io/images/czqk28jt/prod_bk_gb/a103106ca3c64ddad0c16592e1a437a8d66baad3-870x570.png?rect=92,113,656,455&h=70',
      title: 'SIDES'
    },
    {
      imgSrc: 'https://cdn.sanity.io/images/czqk28jt/prod_bk_gb/16de4c181af7ce8974c1b2603ed8ad8d7ffcf939-870x570.png?rect=231,249,407,307&h=70',
      title: 'KING SAVERS'
    },
  ]

  return (
    <div>
      <div className='flex w-[90%] mx-auto py-6 overflow-x-scroll scrollbar-hide'>
        {
          burgers.map((burger, i) => (
            <div className="text-center min-w-[150px] md:w-[14%]" key={i}>
              <img src={burger.imgSrc} alt="" className='mx-auto w-[60px] h-[40px] mb-4' />
              <p className='text-sm font-black'>{burger.title}</p>
            </div>
          ))
        }
      </div>
      <div className='bg-[rgb(80,35,20)] h-28 pt-2'>
        {
          // @ts-ignore
          <marquee behavior="" direction="" className="text-white text-3xl">You Get Extra Points For Trying The Whopper!</marquee>
        }
      </div>
        <section className='w-[90%] max-w-[440px] mx-auto mt-[-135px]'>
            <div className='text-center mb-8'>
                <img src="https://cdn.sanity.io/images/czqk28jt/prod_bk_gb/fe9f2cc38fc372d47c909b4aedc3429e8bfbc89b-590x393.png?w=750&q=40&fit=max&auto=format" alt="" className='max-w-[280px] block mx-auto' />
                <h1 className='text-3xl font-extrabold mb-5'>WHOPPER® Meal Large</h1>
                <p className='text-[15px] font-bold mb-6'>A flame-grilled beef patty, topped with tomatoes, fresh cut lettuce, mayo, pickles, a swirl of ketchup, and sliced onions on a soft sesame seed bun.</p>
                <Link href="/menu/picker/ratings">
                <button className='text-white bg-[rgb(80,35,20)] py-1 px-4 rounded-md'>Check reviews</button>
                </Link>
            </div>
            
          <div>
            <Info />
          </div>
        </section>
    </div>
  )
}
