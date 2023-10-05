import { Rating } from '@mui/material'
import React from 'react'

const ReviewItem = () => {
  return (
    <div className="mt-5">
        <div className="flex justify-between items-center w-1/2">
            <h4 className="text-lg text-gray-600 font-bold">My review about the room</h4>
            <span className="italic text-gray-400 text-xs">13th Mar 2022</span>
        </div>
        <Rating name="read-only" value={4} readOnly />
        <span className="block italic text-gray-400 text-sm">@user wrote...</span>
        <p className="text-gray-400 text-xs tracking-wider w-1/2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. At deleniti id fuga ratione modi laboriosam esse itaque dolore, cupiditate sint illum dolorem recusandae totam cumque dolor quasi deserunt temporibus. Fuga iste tempora assumenda, quam unde cupiditate praesentium labore at vero?
        </p>
    </div>
  )
}

export default ReviewItem