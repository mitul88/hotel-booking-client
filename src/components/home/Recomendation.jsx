import React from 'react'
import { Link } from 'react-router-dom'
import LocationListItem from './LocationListItem'
import CarouselSlider from '../../ui/CarouselSlider'

import { hotelSliderData } from '../../mock/data'

const locationListData = [
    {
        title: "Dhaka",
        img: 'https://t4.ftcdn.net/jpg/00/48/67/29/360_F_48672923_2u6EDMmg9hObeMl8xYGVfrvMXPlluFxn.jpg'
    },
    {
        title: "Rajshahi",
        img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/fb/7f/a5/pancharatna-shiva-mandir.jpg?w=700&h=500&s=1'
    },
    {
        title: "Sylhet",
        img: 'https://www.bproperty.com/blog/wp-content/uploads/Tea-2.jpg'
    },
    {
        title: "Cox's Bazar",
        img: 'data:image/jpeg;base64,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'
    },
]

const RecomendationSection = () => {
  return (
    // <section className='w-full py-10 lg:py-20 bg-gradient-to-br from-gray-200 from-10% via-gray-100 via-30% to-bottom-right-gray-300 to-98%'>
    <section className='w-full py-10 lg:py-20 bg-gray-200'>
        <div className="max-w-[1180px] mx-auto flex justify-between gap-5 overflow-hidden">
            <div className="w-2/3 h-[500px]">
                <CarouselSlider items={hotelSliderData} />
            </div>
            <div className="w-1/3 h-[500px] bg-white">
                <div className="bg-red-500 w-full h-[80px] py-3 px-10">
                    <h3 className="text-2xl">Offered Locations</h3>
                    <p className="text-sm">We have locations in major cities of bangladesh</p>
                </div>
                <div className="px-10 py-3 flex flex-col gap-5">    
                    {locationListData.map((location, index) => (
                        <LocationListItem key={index} location={location}/>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default RecomendationSection