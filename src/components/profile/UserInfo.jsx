import React from 'react'

const UserInfo = () => {
  return (
    <div className="border border-gray-200 rounded py-5 px-10 shadow shadow-md max-w-[800px] mx-auto mb-5">
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
  )
}

export default UserInfo