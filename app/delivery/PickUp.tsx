'use client'
import React, { useEffect, useState } from 'react'
import img from '../images/whoops.png'
import Image from 'next/image'

export default function PickUp() {
    const [meals, setMeals] = useState(null)
  return (
    <div>
        <div>
        <div className="w-[80%] h-[60vh] pt-[60px] flex flex-col justify-between items-center ml-[20%]">
            <Image src='/images/whoops.png' width={200} height={200} alt='' />
            <h2 role="heading" className="text-[25px] text-[#542f26ff] tee font-medium">Find a Location Nearby</h2>
                        
            <p role="generic" className="text-[18px] text-[#542f26ff] font-semibold">Let us know where you are so we can recommend nearby locations..</p>

            <button className="w-[35%] h-[55px] rounded-[30px] bg-red-700 text-[18px] text-[#ffffff] font-normal tee ">Share Location</button>

            <img className="w-[150px] h-[70px]" src="https://cdn.sanity.io/images/czqk28jt/prod_bk_gb/3ead7166db6dc8a93e9bd20fd7f6cbf88340908e-320x155.png?w=320&q=40&fit=max&auto=format" alt="" />
        </div>
        </div>
    </div>
  )
}
