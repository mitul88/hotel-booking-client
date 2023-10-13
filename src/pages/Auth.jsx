import { FormControl, FormLabel, Input, InputLabel } from '@mui/material'
import React from 'react'
import AuthForm from '../components/AuthForm'

const AuthPage = () => {
  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center'>
      <AuthForm />
    </div>
  )
}

export default AuthPage