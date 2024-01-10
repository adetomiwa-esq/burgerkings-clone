'use client'
import React, { useState } from "react";
import { FaRegMap } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import CurrentLocation from "./CurrentLocation";
import PickUp from "./PickUp";
import Link from "next/link";



export default function Delivery() {
    const [displayPickUp, setDisplayPickUp] = useState(false)
    return (
        <main>
            <div className="w-[100%] relative min-h-[12vh] bg-red-600 flex flex-row justify-center items-center">
                <h1 className="text-[32px] text-[#ffffff] tee">Location</h1>
                <p  className="w-[6%] flex flex-row justify-between items-center absolute right-[140px] tee text-[20px] text-[#ffffff]">Map <span><FaRegMap /></span></p>
            </div>
            <div className="w-[100%] min-h-[70vh] bg-[#f5ebdcff] pt-[15px] px-[120px]">
                <div className="w-[100%] h-[80vh]">
                    <div className="flex flex-row  items-center">
                        <div className="w-[20%] min-h-[13vh] flex justify-center items-center">
                            <Link href={`/order`} className="w-[50%]">
                                <button className="w-full h-[50px] border border-gray-500 btn text-[16px] bg-[rgb(80,35,20)] text-[rgb(245,235,220)] tee">Pick up</button>
                            </Link>


                            <Link href={`delivery`} className="w-[50%]">
                                <button className="w-full h-[50px] border border-gray-500 btn text-[16px] text-[#542f26ff]  tee">Delivery</button>
                            </Link>
                            
                            
                        </div>

                        <div className="w-[100%] pl-[20px] relative">
                            <input className="w-[100%] h-[50px] input rounded-xl" type="search" placeholder="Delivery Address"  />
                            <FaSearch className="absolute right-[20px] bottom-[20px] text-[gray] text-[13px]"/>
                        </div>
                    </div>

                    {
                       <PickUp />
                    }

                </div>
            </div>
        </main>
    )
}