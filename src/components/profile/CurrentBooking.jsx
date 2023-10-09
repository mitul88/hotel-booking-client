import React from 'react'

const CurrentBooking = () => {
  return (
    <div className="border border-gray-200 rounded p-5 px-10 shadow shadow-md max-w-[800px] mx-auto mb-5">
        <h3 className="text-xl text-center text-gray-600 mb-5">Current Bookings</h3>
        <div className='flex justify-around gap-3 mx-auto'>
            <div>
                <h4 className="text-sm font-bold">Long Beach Hotel</h4>
                <h6 className="text-xs font-semibold">2 bedroom suit</h6>
            </div>
            <div>
                <h4 className="text-sm font-bold">Check in</h4>
                <h6 className="text-xs font-semibold">22/09/2023</h6>
            </div>
            <div>
                <h4 className="text-sm font-bold">Check out</h4>
                <h6 className="text-xs font-semibold">24/09/2023</h6>
            </div>
            <div>
                <h4 className="text-sm font-bold">Cost</h4>
                <h6 className="text-xs font-semibold">$220</h6>
            </div>
        </div>
    </div>
  )
}

export default CurrentBooking