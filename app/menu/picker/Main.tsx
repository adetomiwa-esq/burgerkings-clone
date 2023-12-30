import React from 'react'
import Info from './Info'

export default function Main() {
  return (
    <div>
      <div className='bg-[rgb(80,35,20)] h-28'></div>
        <section className='w-[440px] mx-auto mt-[-135px]'>
            <div className='text-center mb-8'>
                <img src="https://cdn.sanity.io/images/czqk28jt/prod_bk_gb/fe9f2cc38fc372d47c909b4aedc3429e8bfbc89b-590x393.png?w=750&q=40&fit=max&auto=format" alt="" className='max-w-[280px] block mx-auto' />
                <h1 className='text-3xl font-extrabold mb-5'>WHOPPER® Meal Large</h1>
                <p className='text-[15px] font-bold mb-6'>A flame-grilled beef patty, topped with tomatoes, fresh cut lettuce, mayo, pickles, a swirl of ketchup, and sliced onions on a soft sesame seed bun.</p>
                <button className='text-white bg-[rgb(80,35,20)] py-1 px-4 rounded-md'>Check reviews</button>
            </div>
            
          <div>
            <Info />
          </div>
        </section>
    </div>
  )
}
