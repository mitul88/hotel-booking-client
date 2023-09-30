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
          <div className='flex justify-between'>
            <span className='rounded-md px-3 py-1 text-bg-600 font-semibold border border-gray-200'>500</span>
            <span className='rounded-md px-3 py-1 text-bg-600 font-semibold border border-gray-200'>12000</span>
          </div>
      </div>
    </div>
  )
}

export default RangeFilter