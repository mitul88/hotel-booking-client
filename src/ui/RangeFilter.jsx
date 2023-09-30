import { useState } from 'react'
import { Slider } from '@mui/material'

const RangeFilter = () => {

    const [value, setValue] = useState([20, 37]);

    function valuetext(value) {
        return `${value}°C`;
    }
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

  return (
    <div className='w-full mx-auto'>
      <div className="w-full">
      <Slider
          getAriaLabel={() => 'Temperature range'}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
      />
      <div className='flex justify-around'>
        
      </div>
      </div>
    </div>
  )
}

export default RangeFilter