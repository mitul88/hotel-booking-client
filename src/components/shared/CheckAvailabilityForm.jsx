import { Button, FormControl, FormLabel, Select, MenuItem, TextField, InputLabel } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import dayjs from 'dayjs';

const CheckAvailabilityForm = () => {
    const [searchParams] = useSearchParams();

    const searchLocation = searchParams.get('location');
    const searchCheckIn = searchParams.get('in');
    const searchCheckOut = searchParams.get('out');
    const searchBedType = searchParams.get('bed');

    const [location, setLocation] = useState(searchLocation ? searchLocation : "" );
    const [checkin, setCheckin] = useState("");
    const [checkout, setCheckout] = useState("");
    const [bedType, setBedType] = useState(searchBedType ? searchBedType : "");

    const [inputError, setInputError] = useState(false); 

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (location === "" || checkin === "" || checkout === "" || bedType === "") {
            setInputError(true);
            return
        }
        

        const formData = new FormData();
        formData.append("location", location);
        formData.append("checkin", checkin);
        formData.append("checkout", checkout);
        formData.append("bedType", bedType);
        
        if(!inputError) navigate(`/rooms?location=${location}&in=${checkin}&out=${checkout}&bed=${bedType}`)
        setInputError(false)
        // console.log(formData)
    }
  
    return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <form onSubmit={handleSubmit}>
            <div className='flex gap-2 p-2 rounded-md bg-yellow-400 mx-auto w-fit'>
                <FormControl size='small'>
                    <InputLabel id="location">Location</InputLabel>
                    <Select
                        labelId="location"
                        id="locationDropdown"
                        label="Location"
                        size='small'
                        value={location}
                        sx={{
                            backgroundColor: '#fff',
                            width: "200px"
                        }}
                        onChange={(e)=>setLocation(e.target.value)}
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
                        format="MM - DD - YYYY"
                        defaultValue={searchCheckIn ? dayjs(searchCheckIn) : null}
                        onChange={(selectedDate)=>setCheckin(selectedDate)} 
                    />
                </FormControl>
                <FormControl size='small'>
                    <DatePicker
                        label="Check out" 
                        slotProps={{ textField: { size: 'small' } }}
                        className='bg-white rounded'
                        format="MM - DD - YYYY"
                        defaultValue={searchCheckOut ? dayjs(searchCheckOut) :null}
                        onChange={(selectedDate)=>setCheckout(selectedDate)} 
                    />
                </FormControl>
                <FormControl size='small'>
                    <InputLabel id="bedType">Bed Type</InputLabel>
                    <Select
                        labelId="bedType"
                        id="bedTypeDropdown"
                        value={bedType}
                        label="bedType"
                        size='small'    
                        sx={{
                            backgroundColor: '#fff',
                            width: "200px"
                        }}
                        onChange={(e)=>setBedType(e.target.value)}
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