import React from 'react'
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';


const Item = ({item}) => {
    return (
        <Paper className='w-full h-[500px] rounded-lg'>
            <div className="relative w-full rounded-lg">
            <img 
                src={item.img} 
                alt=""
                className='object-fill w-full h-full rounded-lg'
             />
                <div className='p-5 absolute opacity-90 top-0 left-0 bg-red-500 rounded-lg'>
                    <h2 className="text-3xl text-white">{item.title}</h2>
                    <p className='text-md text-white'>{item.desc}</p>
                </div>
            </div>
        </Paper>
    )
}

const CarouselSlider = ({items}) => {
  return (
    <Carousel
    sx={{
      borderRadius: "10px"
    }}
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