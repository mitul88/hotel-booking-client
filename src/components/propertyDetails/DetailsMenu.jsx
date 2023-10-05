import React from 'react'
import { Link } from 'react-router-dom'

const DetailsMenu = () => {
  return (
    <div className='mx-auto flex gap-1 w-fit p-1 rounded bg-yellow-400'>
        <Link className='rounded-l'>
            <div className="px-3 py-2 bg-white text-blue-600 font-semibold">Info & Price</div>
        </Link>
        <Link>
            <div className="px-3 py-2 bg-white text-blue-600 font-semibold">Facilities</div>
        </Link>
        <Link>
            <div className="px-3 py-2 bg-white text-blue-600 font-semibold">House rules</div>
        </Link>
        <Link className='rounded-r'>
            <div className="px-3 py-2 bg-white text-blue-600 font-semibold">Reviews</div>
        </Link>
    </div>
  )
}

export default DetailsMenu