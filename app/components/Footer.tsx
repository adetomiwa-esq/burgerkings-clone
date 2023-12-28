'use client'
import Link from "next/link";
import { HiOutlineGlobeAlt } from 'react-icons/hi'
import { LuInstagram } from 'react-icons/lu';
import { AiFillFacebook } from 'react-icons/ai';
import { FaYoutube, FaTwitter } from 'react-icons/fa';
import { usePathname } from "next/navigation";

export default function Footer() {
    const pathname = usePathname()
  return (
    <footer className={`bg-[#2b0200] text-[rgb(187,163,145)] py-16 px-36 ${pathname === '/delivery' || pathname === '/signup' ? 'hidden' : '' }`}>
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
    </footer>
  )
}
