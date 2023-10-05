import DetailsMenu from '../components/propertyDetails/DetailsMenu'
import Facilities from '../components/propertyDetails/Facilities'
import Info from '../components/propertyDetails/Info'
import PropertyImages from '../components/propertyDetails/PropertyImages'
import Reviews from '../components/propertyDetails/Reviews'

const PropertyDetailsPage = () => {
  return (
    <section className='max-w-[1180px] mx-auto bg-white p-3'>
        <DetailsMenu />
        <div className='content py-2'>
            <PropertyImages />
            <Info />
            <Facilities />
            <Reviews />
        </div>
    </section>
  )
}

export default PropertyDetailsPage