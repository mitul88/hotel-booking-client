import React from 'react'
import { Link } from 'react-router-dom'

const LocationListItem = ({location}) => {
  return (
    <Link className="w-full h-[80px] flex bg-gray-100 hover:bg-gray-200">
        <div className="w-[80px]">
            <img src={location.img} alt="" className='bg-cover h-full w-full' />
        </div>
        <div className="px-10 py-5">
            <h3 className="text-2xl text-black font-semibold">{location.title}</h3>
        </div>
    </Link>
  )
}

export default LocationListItem