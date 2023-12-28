'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import { TbWorld } from "react-icons/tb";
import { FaAngleDown } from "react-icons/fa";
import SignUpForm from './SignUpForm';
import SignIn from './SignIn';


export default function SignUp() {


    const [displaySignUp, setDisplaySignUp] = useState(true)

    function signInForm(){
        setDisplaySignUp(false)
    }

    function signUpForm(){
        setDisplaySignUp(true)
    }
    
  return (
    <main>
        <img src='https://cdn.sanity.io/images/czqk28jt/prod_bk_gb/06e1a0682f8a47845f917b0ee41b0bc94ed0b4a2-1440x1800.jpg?w=750&q=40&fit=max&auto=format' className='absolute top-0 left-0 z-[-1] w-[50%] min-h-[100vh]' alt='' />
        

        <div className=' w-[50%] ml-auto bg-[rgb(245,235,220)] px-[120px] h-screen'>
            <div className='min-h-[15vh] flex flex-col justify-between items-center'>
                <Link href="/"><img className='w-[300px] h-[64px] px-[10px] py-[5px]' src='https://cdn.sanity.io/images/czqk28jt/prod_bk_gb/0cf1af0a0daab9d078b561f98d55a73aec3bcb61-1250x200.png?w=320&q=40&fit=max&auto=format' alt=''/></Link>

                <p className='text-[13px] font-medium text-[#000000]'>Sign up to get started with <Link href='https://www.burgerking.co.uk/bk-rewards'>YourBurgerKing</Link></p>
            </div>

            <div className='bg-white w-[100%] min-h-[80vh] flex flex-col  rounded-[20px]  mt-[50px] py-[20px] '>
                <div className='w-[100%] h-[50px] flex flex-row justify-between items-center border-b border-gray-500 relative'>
                    <h2 className='w-[50%] font-medium text-[#000000]  text-center cursor-pointer' onClick={signUpForm}>Sign Up</h2>
                    <h2 className='w-[50%] font-medium text-[#000000]  text-center cursor-pointer' onClick={signInForm}>Sign In</h2>
                    <div className={`w-1/2 h-[2px] bg-[rgb(214,35,0)] absolute -bottom-[2px] transition-all ease-in-out delay-100 duration-100 ${displaySignUp ? 'left-0' : 'right-0'}`}></div>

                </div>

                {displaySignUp && <SignUpForm />}
                {!displaySignUp && <SignIn />}
            </div>
        </div>
    </main>
  )
}