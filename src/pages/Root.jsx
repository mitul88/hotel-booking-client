import React from 'react'
import MainNavigation from '../components/MainNavigation'
import { Outlet } from 'react-router-dom'

const RootPage = () => {
  return (
    <div>
        <MainNavigation />
        <Outlet />
    </div>
  )
}

export default RootPage