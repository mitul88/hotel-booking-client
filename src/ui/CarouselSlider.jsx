import React from 'react'
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';


const Item = ({item}) => {
    return (
        <Paper className='w-full h-[500px]'>
            <div className="relative w-full">
            <img 
                src={item.img} 
                alt=""
                className='object-fill w-full h-full'
             />
                <div className='p-5 absolute opacity-90 top-40 left-0 bg-red-400'>
                    <h2 className="text-3xl text-black">{item.title}</h2>
                    <p className='text-md'>{item.desc}</p>
                </div>
            </div>
        </Paper>
    )
}

const CarouselSlider = ({items}) => {
  return (
    <Carousel
    indicatorContainerProps={{
        style: {
          zIndex: 1,
          marginTop: "-20px",
          position: "relative"
        }
      }}
    >
        {
            items.map( (item, i) => <Item key={i} item={item} /> )
        }
    </Carousel>
  )
}

export default CarouselSlider