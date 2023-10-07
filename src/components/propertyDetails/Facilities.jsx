import React from 'react'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { BiDish, BiRestaurant } from "react-icons/bi";
import { Ri24HoursFill } from "react-icons/ri";
import { FaSmoking } from "react-icons/fa";
import { FaPersonSwimming } from "react-icons/fa6";
import { LuParkingCircle } from "react-icons/lu";
import { AiOutlineWifi } from "react-icons/ai";


const Facilities = () => {
  return (
    <div className='w-full my-5 text-gray-600'>
        <div className="flex items-center">
            <h2 className="text-2xl text-gray-600 font-bold">Facilities</h2>
        </div>
        <hr className="border boder-gray-600" />
        <div className="md:ml-10 w-full py-5">
            <div className='w-full p-3'>
                {/* <h4 className="text-lg text-gray-600 font-bold pt-3">Offered facilities</h4> */}
                <div className='flex flex-wrap items-center gap-10 gap-y-3 my-3 font-semibold'>
                    <div className='flex items-center gap-2'>
                        <IoMdCheckmarkCircleOutline className='text-green-600' /> <span>24 hrs security</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <BiDish className='text-green-500' /> <span>Room service</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <Ri24HoursFill className='text-green-500' /> <span>24 hours service</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaSmoking className='text-green-500' /> <span>Designated smoking area</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaPersonSwimming className='text-green-500' /> <span>Swimming pool</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <BiRestaurant className='text-green-500' /> <span>Restaurant</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <LuParkingCircle className='text-green-500' /> <span>Parking</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <AiOutlineWifi className='text-green-500' /> <span>Free wifi</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Facilities