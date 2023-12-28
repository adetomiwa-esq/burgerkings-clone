'use client'
import React, { useState } from 'react'
// import { Link } from 'next/link'
import { TbWorld } from "react-icons/tb";
import { FaAngleDown } from "react-icons/fa";

export default function SignUpForm() {

    function submitForm(e: any){
        e.preventDefault()
    }

    const [formData, setFormData] = useState({
        name: '',
        email: ''
    })

    function updateForm(e: any){
        // setFormData(e.target.value)
        const {name, value} = e.target

        setFormData(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const [accept, setAccept] = useState(false)

    function checked(e: any){
        setAccept(e.target.checked)
    }
    console.log(formData)
  return (
    <form>
        
        <div className='signup w-[100%] min-h-[50vh] px-[35px] flex flex-wrap justify-between items-center mt-[30px]'>
            <input
                type='text'
                placeholder='First name*'
                className='relative border rounded-[5px] border-[#000000] block w-full h-[50px] mb-3 pl-[7px] inputs'
                value={formData.name}
                name='name'
                onChange={updateForm}
            />

            <input
                type='text'
                placeholder='Email Address*'
                className='relative rounded-[5px] border border-[#000000] block w-full h-[50px] mt-3 pl-[7px] inputs'
                name='email'
                value={formData.email}
                onChange={updateForm}
            />

            <label className='mt-[30px] w-[100%] flex flex-row'>
                <input
                    type='checkbox'
                    className='border w-[20px] h-[20px]'
                    name='accept'
                    onChange={checked}
                />
                <span className='w-[100%] text-[16px] text-[#602319]   font-medium pl-[5px]'> I want to receive special offers and other information from Burger King via email</span>
            </label>

            <label className='mt-[10px] w-[100%] flex flex-row'>
                <input
                    type='checkbox'
                    className='border w-[20px] h-[20px]'
                    name='accept'
                    onChange={checked}
                />

               <span className='w-[100%] text-[16px] text-[#602319]  font-medium pl-[5px]'>I agree to the following: Privacy Policy Rewards Terms Terms of Service*</span>                 
            </label>

            <button  className="bg-[#d62300] mt-[50px] w-full h-[50px] rounded-[30px] text-[18px] text-[#ffffff] tee"  disabled={!accept ? true : false}>Create an Account</button>

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
