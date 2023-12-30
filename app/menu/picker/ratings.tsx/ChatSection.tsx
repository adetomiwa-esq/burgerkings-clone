import React from 'react'
import { ratings } from './Ratings'
import { FaStar, FaRegStar } from 'react-icons/fa'
import { BsEmojiSmile, BsFillSendFill } from 'react-icons/bs'

function ChatSection() {
  return (
    <section className='h-[calc(100vh-114px)]'>
        <div className="flex h-full">
            <div className='h-full overflow-y-scroll w-full pb-[80px] px-2 md:w-[250px] lg:w-[350px] md:pb-2'>
                {
                    ratings.map((rating, i) => (
                        <div key={i} className='flex px-4 py-4 border-b'>
                            <img
                                src={rating.img}
                                alt=""
                                className='rounded-full w-10 h-10 mr-2'
                            />

                            <div className='w-[calc(100%-50px)]'>
                                <h1>{rating.name}</h1>
                                <div className='flex items-center'>
                                    <div className='flex items-center'>
                                        {
                                            [...Array(rating.rating)].map((x, i) => (
                                                <i key={i} className='text-red-600'><FaStar /></i>
                                            ))
                                        }
                                    </div>
                                    <div className='flex items-center'>
                                        {
                                            [...Array(5 - rating.rating)].map((x, i) => (
                                                <i key={i} className='text-red-600'><FaRegStar /></i>
                                            ))
                                        }
                                    </div>
                                </div>
                                <p className='bg-blue-950 rounded-lg p-3 text-sm mt-2 md:hidden'>{rating.review}</p>
                            </div>
                        </div>
                    ))
                }

                <div className='fixed bottom-0 left-0 w-full h-[80px] border-t text-lg flex items-center justify-between px-1 z-10 bg-[#141414] md:hidden'>
                    <div className='border p-2 rounded-md hover:text-red-500 hover:bg-white'><BsEmojiSmile /></div>
                    <input
                        type="text"
                        placeholder='review movie'
                        className='w-10/12 border bg-transparent py-3 px-3 rounded-md'
                    />
                    <button className='border p-2 rounded-md hover:text-red-500 hover:bg-white'><BsFillSendFill /></button>
                </div>

            </div>


            <div className='hidden md:block w-[calc(100%-250px)] lg:w-[calc(100%-350px)] relative border h-full'>
                <div className='h-full pb-[84px] pt-4 overflow-y-scroll px-3'>
                    {
                        ratings.map((rating, i) => (
                            <div key={i} className='w-3/6 mb-6'>
                                <div className="flex items-center mb-2">
                                    <img
                                        src={rating.img}
                                        alt=""
                                        className='rounded-full w-7 h-7 mr-2'
                                    />
                                    <p>{rating.name}</p>

                                    <div className='flex items-center'>
                                        <div className='flex items-center'>
                                            {
                                                [...Array(rating.rating)].map((x, i) => (
                                                    <i key={i} className='text-red-600'><FaStar /></i>
                                                ))
                                            }
                                        </div>
                                        <div className='flex items-center'>
                                            {
                                                [...Array(5 - rating.rating)].map((x, i) => (
                                                    <i key={i} className='text-red-600'><FaRegStar /></i>
                                                ))
                                            }
                                        </div>
                                </div>
                                </div>
                                <p className='bg-blue-950 rounded-lg p-3 text-sm'>{rating.review}</p>
                            </div>
                        ))
                    }
                </div>


                <div className='absolute bottom-0 left-0 w-full h-[80px] border-t text-lg flex items-center justify-between px-4 z-10 bg-[#141414]'>
                    <div className='border p-2 rounded-md hover:text-red-500 hover:bg-white'><BsEmojiSmile /></div>
                    <input
                        type="text"
                        placeholder='review movie'
                        className='w-10/12 border bg-transparent py-3 px-3 rounded-md'
                    />
                    <button className='border p-2 rounded-md hover:text-red-500 hover:bg-white'><BsFillSendFill /></button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ChatSection
