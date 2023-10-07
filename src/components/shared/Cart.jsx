import { Button, IconButton } from '@mui/material'
import { MdClose } from "react-icons/md";

const Cart = ({onClose}) => {
  return (
    <div className=' p-5 absolute right-10 top-20 border border-gray-600 bg-white text-gray-600'>
        
        <div className='flex gap-5 items-center p-5 border-b border-gray-600 w-full'>
            <div>
                <h4 className="text-sm font-bold">Long Beach Hotel</h4>
                <h6 className="text-xs font-semibold">2 bedroom suit</h6>
            </div>
            <div>
                <h4 className="text-sm font-bold">Check in</h4>
                <h6 className="text-xs font-semibold">22/09/2023</h6>
            </div>
            <div>
                <h4 className="text-sm font-bold">Check out</h4>
                <h6 className="text-xs font-semibold">24/09/2023</h6>
            </div>
            <div>
                <h4 className="text-sm font-bold">Cost</h4>
                <h6 className="text-xs font-semibold">$220</h6>
            </div>
            <div>
                <IconButton size='small'>
                    <MdClose />
                </IconButton>
            </div>
        </div>

        <div className='flex gap-5 justify-center pt-5 p-2'>
            <Button variant='contained' size='small' className='bg-green-600 hover:bg-green-500 ease-out 300' disableElevation>
                confirm
            </Button>
            <Button 
                variant='contained' 
                endIcon={<MdClose />}
                className='bg-red-600 hover:bg-red-500 ease-out 300'
                size='small'
                disableElevation
                onClick={onClose}
            >
                close
            </Button>
        </div>
    </div>
  )
}

export default Cart