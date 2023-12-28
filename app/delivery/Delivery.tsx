'use client'
import React, { useState } from "react";
import { FaRegMap } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import CurrentLocation from "./CurrentLocation";
import PickUp from "./PickUp";



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
                            <button className="w-[50%] h-[50px] border border-gray-500 btn text-[16px] text-[#542f26ff] tee" onClick={() => setDisplayPickUp(true)}>Pick up</button>
                            <button className="w-[50%] h-[50px] border border-gray-500 btn text-[16px] text-[#542f26ff] tee" onClick={() => setDisplayPickUp(false)}>Delivery</button>
                        </div>

                        <div className="w-[100%] pl-[20px] relative">
                            <input className="w-[100%] h-[50px] input rounded-xl" type="search" placeholder="Delivery Address"  />
                            <FaSearch className="absolute right-[20px] bottom-[20px] text-[gray] text-[13px]"/>
                        </div>
                    </div>

                    {
                       displayPickUp ? <PickUp /> : <CurrentLocation />
                    }

                </div>
            </div>
        </main>
    )
}