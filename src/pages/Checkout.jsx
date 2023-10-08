import { Button, FormControl, FormControlLabel, FormLabel, IconButton, Radio, RadioGroup } from '@mui/material'
import React from 'react'
import { MdClose } from 'react-icons/md'

const CheckoutPage = () => {
  return (
    <section className='max-w-[1180px] mx-auto bg-white p-3 text-gray-600 min-h-screen '>
        <h2 className="text-xl text-center p-10 font-bold">Confirm booking</h2>
        <div className="border border-gray-200 rounded p-5 shadow shadow-lg max-w-[800px] mx-auto">
            <div className='flex gap-10 items-center justify-evenly'>
                <div>
                    <h4 className="text-md font-bold">SL</h4>
                    <h6 className="text-sm font-semibold items-center">1</h6>
                </div>
                <div>
                    <h4 className="text-md font-bold">Long Beach Hotel</h4>
                    <h6 className="text-sm font-semibold">2 bedroom suit</h6>
                </div>
                <div>
                    <h4 className="text-md font-bold">Check in</h4>
                    <h6 className="text-sm font-semibold">22/09/2023</h6>
                </div>
                <div>
                    <h4 className="text-md font-bold">Check out</h4>
                    <h6 className="text-sm font-semibold">24/09/2023</h6>
                </div>
                <div>
                    <h4 className="text-md font-bold">Cost</h4>
                    <h6 className="text-sm font-semibold">$220</h6>
                </div>
            </div>

            <div className='mx-auto mt-5 w-[300px]'>
                <FormControl>
                    <RadioGroup
                        row
                        aria-labelledby="payment-method"
                        name="payment-method"
                    >
                        <FormControlLabel value="cash" control={<Radio size="small" />} label="Cash payment"  />
                        <FormControlLabel value="card" control={<Radio size="small" />} label="Pay with card"  />
                    </RadioGroup>
                </FormControl>
            </div>

        </div>
        
        <div className='flex gap-5 justify-center pt-5 p-2'>
            <Button variant='contained' size='small' className='bg-green-600 hover:bg-green-500 ease-out 300' disableElevation>
                confirm booking
            </Button>
        </div>
    </section>
  )
}

export default CheckoutPage