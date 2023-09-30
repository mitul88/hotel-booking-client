import React from 'react'
import CheckAvailabilityForm from '../components/shared/CheckAvailabilityForm'
import PropertyContainer from '../components/propertyList/PropertyContainer'

const PropertyListPage = () => {
  return (
    <section className='min-h-screen'>
      <div className='bg-blue-900 px-5 pb-5'>
          <CheckAvailabilityForm />
      </div>
      <div className='max-w-[1180px] mx-auto'>
        <PropertyContainer />
      </div>
    </section>
  )
}

export default PropertyListPage