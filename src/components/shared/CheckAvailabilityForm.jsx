import { Button, FormControl, FormLabel, Select, MenuItem, TextField, InputLabel } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React from 'react'

const CheckAvailabilityForm = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <form>
            <div className='flex gap-2 p-2 rounded-md bg-yellow-400 mx-auto w-fit'>
                <FormControl size='small'>
                    <InputLabel id="location">Location</InputLabel>
                    <Select
                        labelId="location"
                        id="locationDropdown"
                        // value={2}
                        label="Location"
                        size='small'
                        sx={{
                            backgroundColor: '#fff',
                            width: "200px"
                        }}
                    >
                        <MenuItem value={1}>Dhaka</MenuItem>
                        <MenuItem value={2}>Sylhet</MenuItem>
                        <MenuItem value={3}>Rajshahi</MenuItem>
                        <MenuItem value={4}>Cox's Bazar</MenuItem>
                    </Select>
                </FormControl>
                <FormControl size='small'>
                    <DatePicker
                        label="Check in" 
                        slotProps={{ textField: { size: 'small' } }}
                        className='bg-white rounded' 
                    />
                </FormControl>
                <FormControl size='small'>
                    <DatePicker
                        label="Check out" 
                        slotProps={{ textField: { size: 'small' } }}
                        className='bg-white rounded' 
                    />
                </FormControl>
                <FormControl size='small'>
                    <InputLabel id="bedType">Bed Type</InputLabel>
                    <Select
                        labelId="bedType"
                        id="bedTypeDropdown"
                        // value={2}
                        label="bedType"
                        size='small'    
                        sx={{
                            backgroundColor: '#fff',
                            width: "200px"
                        }}
                    >
                        <MenuItem value={1}>Single</MenuItem>
                        <MenuItem value={2}>Double</MenuItem>
                    </Select>
                </FormControl>
                <Button type='submit' size='small' className='px-5 bg-red-500 font-bold tracking-wider text-white hover:bg-white hover:text-black'>Check</Button>
            </div>
        </form>
    </LocalizationProvider>
  )
}

export default CheckAvailabilityForm