import { Badge, Button, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Cart from './shared/Cart';

const MainNavigation = () => {
  const [showCart, setShowCart] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const toggleCart = () => {
    setShowCart(!showCart)
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <header className='relative w-screen h-[80px] flex flex-row justify-between px-20 py-5 bg-blue-900'>
      <Link to=""  className='flex items-center'>
        <div>
          HOTEL.COM
        </div>
      </Link>
      <div className='flex justify-between min-w-[400px]'>
        <nav>
          <Badge badgeContent={2} color='error'>
            <Button 
              variant='outlined' 
              className='text-white'
              id="cart-button"
              aria-controls={open ? 'cart-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}  
            >Your bookings</Button>
            {/* <Button variant='outlined' onClick={toggleCart} className='text-white'>Your bookings</Button> */}
          </Badge>
          <Menu
            id="cart-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'cart-button',
            }}
          >
            <Cart onClose={handleClose} />
          </Menu>
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
      {showCart && <Cart onClose={toggleCart} />}
    </header>
  )
}

export default MainNavigation