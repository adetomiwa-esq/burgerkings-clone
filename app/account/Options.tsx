import Link from 'next/link'
import React from 'react'
import { AiFillCrown, AiOutlineRight } from 'react-icons/ai'
import { TbCrown } from 'react-icons/tb'

export default function Options() {
  const optionsList = [
    {title: 'Account Info', url: ''},
    {title: 'Payment Methods', url: ''},
    {title: 'Recent Orders', url: ''},
    {title: 'Track Order', url: ''},
    {title: 'Rate Previous Orders', url: ''},
    {title: 'Communication preferences', url: ''},
    {title: 'Account Info', url: ''},
  ]
  return (
    <section className='w-11/12 max-w-[500px] m-auto pt-20 pb-28'>
        <ul>
          <li>
            <Link href='' className='flex justify-between border-b border-[rgb(187,163,145)] py-4'>
              <img src="https://cdn.sanity.io/images/czqk28jt/prod_bk_gb/0cf1af0a0daab9d078b561f98d55a73aec3bcb61-1250x200.png?w=320&q=40&fit=max&auto=format" alt="" className='w-[160px]' />
              <div className='flex items-center group'>
                  <span className='text-[rgb(255,170,0)] w-fit h-fit group-hover:scale-125 mr-1'><AiFillCrown /></span>
                  <span className='font-bold'>100</span>
                  <span className='ml-2'><AiOutlineRight /></span>
              </div>
            </Link>
          </li>

          {
            optionsList.map((option,i) => (
              <li key={i}>
                <Link href={option.url} className='flex items-center justify-between border-b border-[rgb(187,163,145)] py-4'>
                  <div>{option.title}</div>
                  <div><AiOutlineRight /></div>
                </Link>
              </li>
            ))
          }
        </ul>
    </section>
  )
}
