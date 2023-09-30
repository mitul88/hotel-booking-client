import React from 'react'
import FilterOptions from './FilterOptions'
import Properties from './Properties'

const PropertyContainer = () => {
  return (
    <div className='w-full flex justify-between gap-3 my-3'>
        <FilterOptions />
        <Properties />
    </div>
  )
}

export default PropertyContainer