import { ratings } from './Ratings'
import { FaStar, FaRegStar } from 'react-icons/fa'
import { BsEmojiSmile, BsFillSendFill } from 'react-icons/bs'

function UsersReviews() {
  return (
    <section className='-[calc(100vh-114px)]'>
        <div className=" h-full">
            <div className=' relative border'>
                <div className='pt-4 px-3'>
                    {
                        ratings.map((rating, i) => (
                            <div key={i} className='w-5/6 mb-6'>
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
                                <p className='bg-[rgb(80,35,20)] text-[rgb(240,205,187)] rounded-lg p-3 text-sm'>{rating.review}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default UsersReviews
