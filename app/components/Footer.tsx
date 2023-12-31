'use client'
import Link from "next/link";
import { HiOutlineGlobeAlt } from 'react-icons/hi'
import { LuInstagram } from 'react-icons/lu';
import { AiFillFacebook } from 'react-icons/ai';
import { FaYoutube, FaTwitter } from 'react-icons/fa';
import { usePathname } from "next/navigation";
import { MdHomeFilled } from "react-icons/md";

export default function Footer() {
    const pathname = usePathname()
  return (
    <footer className={`h-[65px] md:h-fit`}>
        <section className="md:hidden flex justify-between items-center h-[65px] fixed bottom-0 left-0 w-full border-t bg-[rgb(245,235,220)] border-t-[rgb(215,199,181)] z-50 text-[12px] px-[2px] sm:px-7">
            <div className="flex flex-col items-center">
                <img src="https://cdn.sanity.io/images/czqk28jt/prod_bk_gb/6ddcc22d3f6a72a15bfbee5105b4e48d5e57c7f0-24x24.svg" alt="" className="w-5"/>
                <span>Home</span>
            </div>

            <div className="flex flex-col items-center">
                <img src="https://cdn.sanity.io/images/czqk28jt/prod_bk_gb/d8c48963ebe2c5773d8737e9fd5ead3bf06aecda-24x24.svg" alt="" className="w-5"/>
                <span>Order</span>
            </div>

            <div className="flex flex-col items-center">
                <img src="https://cdn.sanity.io/images/czqk28jt/prod_bk_gb/aba96e1a3f6ed7c5dcd20208f9a3b5f22c56c7e9-24x24.svg" alt="" className="w-5"/>
                <span>Loyalty Code</span>
            </div>

            <div className="flex flex-col items-center">
                <img src="https://cdn.sanity.io/images/czqk28jt/prod_bk_gb/94efcc5626019bed5b07ae8a4ed4cd6bada7b8e4-24x24.svg" alt="" className="w-5"/>
                <span>Offers</span>
            </div>

            <div className="flex flex-col items-center">
                <img src="https://cdn.sanity.io/images/czqk28jt/prod_bk_gb/51704a3b3ab4c60ea871a90197b827e7b974f195-280x200.svg" alt="" className="w-5"/>
                <span>Rewards</span>
            </div>

        </section>


        <section className={`bg-[#2b0200] hidden text-[rgb(187,163,145)] py-16 px-36 md:block ${pathname === '/delivery' || pathname === '/signup' ? 'md:hidden' : 'md:block' }`}>
            <div className='flex text-sm'>
                <div className='w-1/2'>
                    <h1 className="text-[#f5ebdc] flex text-[1.625rem] font-bold mb-5">BK<span className="text-[16px] inline-block -mt-1 mr-1">®</span> INFO</h1>
                    <Link className='block w-fit hover:underline mb-2' href=''>ABOUT BK</Link>
                    <Link className='block w-fit hover:underline mb-2' href=''>FAQs</Link>
                    <Link className='block w-fit hover:underline mb-2' href=''>Policies</Link>
                    <Link className='block w-fit hover:underline mb-2' href=''>Get in touch</Link>
                    <Link className='block w-fit hover:underline mb-2' href=''>Terms & Conditions</Link>
                    <Link className='block w-fit hover:underline mb-2' href=''>Guest Trac</Link>
                    <Link className='block w-fit hover:underline mb-2' href=''>Trademarks</Link>
                </div>
                <div className='w-1/2'>
                    <h1 className="text-[#f5ebdc] flex text-[1.625rem] font-bold mb-5">BK<span className="text-[16px] inline-block -mt-1 mr-1">®</span> AND YOU</h1>
                    <Link className='block w-fit hover:underline mb-2' href=''>Careers</Link>
                    <Link className='block w-fit hover:underline mb-2' href=''>Privacy Policy</Link>
                    <Link className='block w-fit hover:underline mb-2' href=''>Modern Slavery Statement</Link>
                    <Link className='block w-fit hover:underline mb-2' href=''>Tax Strategy</Link>
                </div>
            </div>

            <div className="bg-[#a48879] h-[1.3px] rounded-md mt-16 mb-8"></div>

            <div>
                <div className="text-[#f5ebdc] flex justify-between mb-8">
                    <h1 className="text-2xl uppercase">Burger king</h1>
                    <div className="flex items-center text-2xl w-44 justify-between">
                        <span className="flex items-center text-lg"><HiOutlineGlobeAlt /> EN</span>
                        <a href="/"><LuInstagram /></a>
                        <a href="/"><AiFillFacebook /></a>
                        <a href="/"><FaYoutube /></a>
                        <a href="/"><FaTwitter /></a>
                    </div>
                </div>
                <p className="text-[11px]">TM & Copyright 2021 Burger King Corporation. All Rights Reserved.</p>
            </div>


        </section>
    </footer>
  )
}
