import React from 'react'
import Appbar from './Appbar'
import { useNavigate } from 'react-router-dom'

const AccEdit = () => {
    const navigate = useNavigate()
  return (
    <div>
        <Appbar/>

<div className="my-4 max-w-screen-sm border px-4 shadow-xl sm:mx-4 sm:rounded-xl sm:px-4 sm:py-4 md:mx-auto">
  <div className="flex flex-col border-b py-4 sm:flex-row sm:items-start">
    <div className="w-full h-full shrink-0 mr-auto sm:py-3y ">
      <p className="font-medium text-center">Account Details</p>
      <p className="text-sm text-gray-600 text-center">Edit your account details</p>
    </div>
   
  </div>
  <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
    <p className="shrink-0 w-32 font-medium">Name</p>
    <input placeholder="Name" className="mb-2 w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 sm:mr-4 sm:mb-0 focus:ring-1" />
  </div>
  <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
    <p className="shrink-0 w-32 font-medium">Email</p>
    <input placeholder="your.email@domain.com" className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" />
  </div>
  <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
    <p className="shrink-0 w-32 font-medium">Bio</p>
    <input placeholder="Bio" className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" />
  </div>

  <div className=" py-4 ">
    <button onClick= {()=>{
        navigate("/account");
    }
    } className="mr-2 rounded-lg border-2 px-4 py-2 font-medium text-gray-500 focus:outline-none">Cancel</button>
    <button className="rounded-lg border-2 border-transparent bg-green-600 px-4 py-2 font-medium text-white focus:outline-none  hover:bg-green-700">Save</button>
</div>
  
  
  
</div>



    </div>
  )
}

export default AccEdit