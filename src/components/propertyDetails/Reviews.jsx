import { Rating } from '@mui/material'
import ReviewItem from './ReviewItem'

const Reviews = () => {
  return (
    <div className='w-full my-5'>
        <div className="flex justify-between items-center">
            <h2 className="text-2xl text-gray-600 font-bold">Reviews</h2>
            <span className="italic text-gray-600 ml-10 flex items-center gap-2"><Rating name="read-only" value={4} readOnly />Overall 4 star</span>
        </div>
        <hr className="border boder-gray-600" />
        <div className="ml-5">
            <ReviewItem />
            <ReviewItem />
            <ReviewItem />
            <ReviewItem />  
        </div>
    </div>
  )
}

export default Reviews