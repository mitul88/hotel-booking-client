import React from 'react'
import RangeFilter from '../../ui/RangeFilter'
import CardComponent from '../../ui/CardComponent'
import PopularFilter from './PopularFilter'
import RatingFilters from './RatingFilters'

const FilterOptions = () => {
  return (
    <div className='w-[500px] h-fit flex flex-col gap-3 rounded bg-white text-gray-600 p-3'>
      <CardComponent>
        <h4 className="text-gray-600 mb-3 font-bold px-5">Cost</h4>
        <hr className='border border-gray-200 mb-3'/>
        <div className='px-5'>
          <RangeFilter />
        </div>
      </CardComponent>
      <CardComponent>
        <h4 className="text-gray-600 mb-3 font-bold px-5">Popular filters</h4>
        <hr className='border border-gray-200 mb-3'/>
        <div className='px-5'>
          <PopularFilter />
        </div>
      </CardComponent>
      <CardComponent>
        <h4 className="text-gray-600 mb-3 font-bold px-5">Popular filters</h4>
        <hr className='border border-gray-200 mb-3'/>
        <div className='px-5'>
          <RatingFilters />
        </div>
      </CardComponent>
    </div>
  )
}

export default FilterOptions