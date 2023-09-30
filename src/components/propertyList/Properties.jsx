import React from 'react'
import PropertyItem from './PropertyItem'

const Properties = () => {
  return (
    <div className='w-full rounded bg-white text-gray-600 p-3'>
      <h3 className="text-xl font-bold mb-5">Dhaka: 11 properties found</h3>
      <PropertyItem />
      <PropertyItem />
      <PropertyItem />
      <PropertyItem />
      <PropertyItem />
    </div>
  )
}

export default Properties