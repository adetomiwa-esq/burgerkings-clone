import { ratings } from './Ratings'
import { FaStar, FaRegStar } from 'react-icons/fa'
import { BsEmojiSmile, BsFillSendFill } from 'react-icons/bs'

function UsersReviews() {
  return (
    <section className='-[calc(100vh-114px)]'>
        <div className=" h-full">
            <div className=' relative border'>
                <div className=' pb-[84px] pt-4 px-3'>
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


                <div className='fixed bottom-0 left-0 w-full h-[80px] border-t text-lg flex items-center justify-between px-4 z-10 text-[rgb(80,35,20)] bg-[rgb(240,205,187)]'>
                    <div className="relative">
                        
                        <div className='border border-[rgb(80,35,20)] p-2 rounded-md hover:text-red-500 hover:bg-white'>
                            <FaStar />
                        </div>
                    </div>
                    
                    <input
                        type="text"
                        placeholder='write review'
                        className='w-10/12 border text-[rgb(80,35,20)] border-[rgb(80,35,20)] bg-transparent py-3 px-3 rounded-md'
                    />
                    <button className='border p-2 rounded-md hover:text-red-500 hover:bg-white'><BsFillSendFill /></button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default UsersReviews
