import { Button } from '@mui/material'
import React from 'react'
import CardComponent from '../ui/CardComponent'

const Profile = () => {
  return (
    <section className='max-w-[1180px] mx-auto bg-white p-3 text-gray-600 min-h-screen '>
        <h2 className="text-xl text-center p-10 font-bold">Shahed Rahman</h2>
        <div className="border border-gray-200 rounded py-5 px-10 shadow shadow-lg max-w-[800px] mx-auto">
            <div className='grid gap-10 grid-cols-2'>
                <div>
                    <h4 className="text-md font-bold">Name</h4>
                    <h6 className="text-sm font-semibold items-center">Shahed Rahman</h6>
                </div>
                <div>
                    <h4 className="text-md font-bold">Email</h4>
                    <h6 className="text-sm font-semibold">shahed@gmail.com</h6>
                </div>
                <div>
                    <h4 className="text-md font-bold ">Age</h4>
                    <h6 className="text-sm font-semibold">36</h6>
                </div>
                <div>
                    <h4 className="text-md font-bold">Phone</h4>
                    <h6 className="text-sm font-semibold">0171019101810161</h6>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Profile