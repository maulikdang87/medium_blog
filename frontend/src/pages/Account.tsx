import React from 'react'
import { UseData } from '../hooks';
import { Spinner } from '../components/UserLogo';
import Appbar from '../components/Appbar';
import { useNavigate } from 'react-router-dom';




const Account = () => {

    const navigate = useNavigate();

    const {loading ,data } = UseData();

    if(loading){
        return (<div className='relative h-screen m-0'>
            <div className='relative z-10'>
            <Appbar/>

            </div>
            
                <div className='second-div absolute inset-0 flex items-center justify-center'>
                <div className='flex flex-col justify-center'>
                <div className='bg-white rounded-md px-8 py-5 min-w-80'>
                    <div className='flex justify-center pb-3'>
                    <div className="flex text-sm bg-gray-800 rounded-full ">
                    <div className="font-small text-gray-600  text-base inline-flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full">
                        <Spinner/></div>
                     </div>
                    </div>
                    </div>
                    </div>  
                    </div>
                    </div>
        )

    }

    else {
  return (

    <div className='relative h-screen m-0'>
        <div className='relative z-10'>
        <Appbar/>

        </div>
        

    <div className='second-div absolute inset-0 flex items-center justify-center'>

        <div className='bg-white flex flex-col justify-center'>


<div className='flex justify-center '>

<div className="bg-white overflow-hidden shadow rounded-lg border max-w-xl">
<div className="px-4 py-5 sm:px-6">
<h3 className="text-lg leading-6 font-medium text-gray-900">
    User Profile
</h3>
<p className="mt-1 max-w-2xl text-sm text-gray-500">
    This is some information about the user.
</p>
</div>
<div className="border-t border-gray-200 px-4 py-5 sm:p-0">
<dl className="sm:divide-y sm:divide-gray-200">
    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">
            Full name
        </dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {data?.name}
        </dd>
    </div>
    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">
            Email address
        </dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {data?.email}
        </dd>
    </div>
    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">
            Bio
            
        </dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            { data?.bio == null ? <div>
                Edit to enter your bio
            </div>  : data.bio}
        </dd>
    </div>
</dl>
<div className='border-gray-200 p-4 right-0'>
<button className="rounded-lg border-2 border-transparent bg-green-600 px-4 py-2 font-medium text-white focus:outline-none  hover:bg-green-700" onClick={()=>{
    navigate("/change")
}}>Edit</button>

</div>


</div>
</div>
    
</div>






</div>

        
    </div>

        




    </div>


   
   
    )}}

export default Account;

{/* 
    // <div className='flex  justify-center bg-slate-300 h-screen w-screen'>
    //         <div className='flex flex-col justify-center'>
    //             <div className='bg-white rounded-md px-8 py-5 min-w-80'>

    //                 <div className='flex justify-center pb-3'>
    //                     <div className="flex text-sm bg-gray-800 rounded-full ">
    //                     <div className="font-small text-gray-600  text-base inline-flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full">{data?.name[0].toUpperCase()}</div>
    //                     </div>
    //                 </div>

    //                 <div className='text-center font-bold text-xl pb-3'>
    //                     Account Details     
    //                 </div>

    //                 <div>

    //                     <div>
    //                         Username : {data?.name}
    //                     </div>

    //                     <div>
    //                         Email : {data?.email}
    //                     </div>

    //                     <div>
    //                         Bio : You can set your own bio
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div> */}