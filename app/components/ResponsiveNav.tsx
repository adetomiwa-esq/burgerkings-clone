
import Link from 'next/link'
import React from 'react'
import { CiGlobe } from 'react-icons/ci'


interface Props {
    displayNav: boolean
}

export default function ResponsiveNav({displayNav} :Props) {
  return (
    <section className={`absolute top-[59px] w-full h-[100svh] bg-[rgb(245,235,220)] z-[900] ${displayNav ? 'left-0': 'left-[-100%]'} transition-all delay-300 duration-300 ease-in-out sm:hidden`}>
        <div>
            <div>
                <div className="border-b border-b-[rgba(0,0,0,0.1)] mx-8 pt-2 pb-4 text-[17px] font-medium">
                    <p>Language and region</p>
                    <p className='flex items-center'><CiGlobe /> EN</p>
                </div>

                <form action="" className='mx-8'>
                    <h2 className="text-center text-[1.4em] font-bold my-4">Create an Account to Get Started With</h2>
                    <img src="https://cdn.sanity.io/images/czqk28jt/prod_bk_gb/0cf1af0a0daab9d078b561f98d55a73aec3bcb61-1250x200.png?w=750&q=40&fit=max&auto=format" alt="" className="m-auto w-[350px]" />

                    <button className="full bg-[rgb(214,35,0)] w-full rounded-[9999rem] text-[21px] font-black text-white py-[0.45rem]">Sign Up  Now</button>
                    <p className="text-center">Already have an account? <Link href=''>Sign In</Link></p>

                </form>
            </div>
        </div>
    </section>
  )
}
