import React from 'react'
import CardComponent from '../../ui/CardComponent'

const PropertyItem = () => {
  return (
    <CardComponent>
        <div className="px-3 flex gap-3">
            <div className="rounded">
                <img 
                    src="https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=" 
                    alt="" 
                    className='w-[180px] h-[180px] rounded' 
                />
            </div>
            <div className='w-2/5'>
                <h4 className="text-lg text-blue-800 text-left tracking-wide font-bold">LONG BEACH HOTEL</h4>
                <p className="text-gray-500 text-sm my-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum saepe omnis magnam aspernatur laudantium! Architecto adipisci fugiat dolorum, suscipit quae laboriosam pariatur quasi? Ipsum repellat qui saepe mollitia quasi dicta.
                </p>
            </div>
        </div>
    </CardComponent>
  )
}

export default PropertyItem