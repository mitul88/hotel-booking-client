import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const MainNavigation = () => {
  return (
    <header className='w-screen h-[80px] flex flex-row justify-between px-20 py-5 bg-blue-900'>
      <div className='flex items-center'>
        HOTEL.COM
      </div>
      <div className='flex justify-between min-w-[400px]'>
        <nav>
          <Button className='text-white'>List your property</Button>
        </nav>
        <nav>
          <Button
            variant='contained'
            className='text-white bg-gray-900/75 hover:bg-gray-800/75'
            disableRipple
          >Sign in</Button>
        </nav>
        <nav>
          <Button 
            variant='contained'
            component={Link}
            disableRipple
            className='text-white bg-red-500 hover:bg-red-600 hover:text-white'
            to='register'
          >Register</Button>
        </nav>
      </div>
    </header>
  )
}

export default MainNavigation