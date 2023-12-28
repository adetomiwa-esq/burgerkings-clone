import React from 'react'
// import { Link } from 'next/link'
import { TbWorld } from "react-icons/tb";
import { FaAngleDown } from "react-icons/fa";

function SignIn() {
  return (
    <form>
        <div className='sign-in px-[30px] mt-[50px] min-h-[25vh] flex flex-col justify-between items-center'>
                    <input type="email" placeholder='Email' className='relative w-[100%] h-[50px] border pl-[7px] inputs border-[#602319] rounded-[5px]'/>
                    <button  className="bg-[#d62300] mt-[50px] w-full h-[50px] rounded-[30px] text-[20px] tee text-[#ffffff]" >Sign In</button>
                    <div className='w-[32%] mt-[30px] text-[16px] text-[#602319] font-medium  flex flex-row justify-between items-center mx-auto'>
                        <TbWorld className='w-[27px] h-[27px]'/>
                        <div className='  text-[16px] text-[#602319] font-medium flex flex-row justify-between items-center'>
                            English
                            <FaAngleDown />
                        </div>
                    </div>
                </div>
    </form>
  )
}

export default SignIn