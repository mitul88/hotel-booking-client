import { Button } from '@mui/material'
import React from 'react'

const MainNavigation = () => {
  return (
    <header className='w-screen h-[80px] flex flex-row justify-between px-20 py-5'>
      <div>
        HOTEL.COM
      </div>
      <div className='flex justify-between min-w-[400px]'>
        <nav>
          <Button className=''>List your property</Button>
        </nav>
        <nav>
          <Button
            
            className=''
          >Sign in</Button>
        </nav>
        <nav>
          <Button className=''>Register</Button>
        </nav>
      </div>
    </header>
  )
}

export default MainNavigation