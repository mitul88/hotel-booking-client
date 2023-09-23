import { Button, FormControl, FormLabel, Select, MenuItem, TextField, InputLabel } from '@mui/material'
import React from 'react'

const CheckAvailabilityForm = () => {
  return (
    <form>
        <div className='flex gap-2 p-2 rounded-md bg-yellow-400'>
            <FormControl>
                {/* <TextField size='small' label="Location" variant="outlined" className='bg-white' /> */}
                <InputLabel id="location">Location</InputLabel>
                <Select
                    labelId="location"
                    id="locationDropdown"
                    // value={2}
                    label="Location"
                    // size='small'
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
            <FormControl>
                <TextField label="Check in" variant="outlined" className='bg-white' />
            </FormControl>
            <FormControl>
                <TextField label="Check out" variant="outlined" className='bg-white' />
            </FormControl>
            <FormControl>
                {/* <TextField size='small' label="Location" variant="outlined" className='bg-white' /> */}
                <InputLabel id="bedType">Bed Type</InputLabel>
                <Select
                    labelId="bedType"
                    id="bedTypeDropdown"
                    // value={2}
                    label="bedType"
                    // size='small'
                    sx={{
                        backgroundColor: '#fff',
                        width: "200px"
                    }}
                >
                    <MenuItem value={1}>Single</MenuItem>
                    <MenuItem value={2}>Double</MenuItem>
                </Select>
            </FormControl>
            <Button type='submit' className='px-5 bg-red-500 text-white hover:bg-white hover:text-black'>Check</Button>
        </div>
    </form>
  )
}

export default CheckAvailabilityForm