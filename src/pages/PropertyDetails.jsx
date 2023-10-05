import React from 'react'
import { Link } from 'react-router-dom'
import DetailsMenu from '../components/propertyDetails/DetailsMenu'
import PropertyImages from '../components/propertyDetails/PropertyImages'
import Reviews from '../components/propertyDetails/Reviews'

const PropertyDetailsPage = () => {
  return (
    <section className='max-w-[1180px] mx-auto bg-white p-3'>
        <DetailsMenu />
        <div className='content py-2'>
            <PropertyImages />
            <Reviews />
        </div>
    </section>
  )
}

export default PropertyDetailsPage