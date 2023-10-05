import { Button, Rating } from '@mui/material'
import React, { useState } from 'react'

const ReviewForm = ({setShowReviewForm}) => {
    const [value, setValue] = useState(3);

    const reviewFormHandler = e => {
        e.preventDefault();
    }

  return (
    <form onSubmit={reviewFormHandler} className='border border-gray-200 rounded p-3'>
        <div className="flex flex-col">
            <div className="mt-3 flex flex-col">
                <label htmlFor="" className='text-gray-600'>Review title</label>
                <input type="text" className='border border-gray-300 bg-white'/>
            </div>
            <div className="mt-3 flex flex-col">
                <label htmlFor="" className='text-gray-600'>Your comment</label>
                <textarea type="text" className='border border-gray-300 bg-white'/>
            </div>
            <div className="mt-3 flex flex-col">
                <label htmlFor="">Rate</label>
                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                    setValue(newValue);
                    }}
                />
            </div>
            <div className='mt-3 flex gap-3'>
                <Button
                    variant='contained'
                    component={'button'}
                    className='text-white bg-yellow-500 hover:bg-yellow-800'
                    disableRipple
                    size='small'
                    type='submit'
                >Review</Button>
                <Button 
                    variant='outlined'
                    component={'button'}
                    // className='text-white bg-red-500 hover:bg-red-600 hover:text-white'
                    disableRipple
                    size='small'
                    to='register'
                    onClick={setShowReviewForm}
                >Cancel</Button>
            </div>
        </div>
    </form>
  )
}

export default ReviewForm