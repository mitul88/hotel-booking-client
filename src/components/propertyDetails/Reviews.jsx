import { Button, Rating } from '@mui/material'
import ReviewItem from './ReviewItem'
import ReviewForm from './ReviewForm'
import { useState } from 'react';

const Reviews = () => {
  const [showReviewForm, setShowReviewForm] = useState(false);
  return (
    <div className='w-full my-5'>
        <div className="flex justify-between items-center">
            <h2 className="text-2xl text-gray-600 font-bold">Reviews</h2>
            <span className="italic text-gray-600 ml-10 flex items-center gap-2"><Rating name="read-only" value={4} readOnly />Overall 4 star</span>
        </div>
        <hr className="border boder-gray-600" />
        {!showReviewForm && (
          <Button onClick={()=>setShowReviewForm(true)} className='my-3 md:ml-3'>Review this property</Button>
        )}
        {showReviewForm && (
          <div className="w-full my-3 md:w-1/2">
            <ReviewForm setShowReviewForm={()=>setShowReviewForm(false)} />
          </div>
        )}
        <div className="md:ml-5 w-full md:w-1/2">
            <ReviewItem />
            <ReviewItem />
            <ReviewItem />
            <ReviewItem />  
        </div>
    </div>
  )
}

export default Reviews