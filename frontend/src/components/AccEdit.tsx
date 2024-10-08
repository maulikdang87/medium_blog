
import { useState } from 'react'
import Appbar from './Appbar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BACKEND_URL } from '../config'
import { UseData } from '../hooks'
import { Spinner } from './UserLogo'


const AccEdit = () => {

    const {loading , data } = UseData()

    const [name , setName] = useState(data?.name);
    const [email , setEmail] = useState(data?.email);
    const [bio , setBio] = useState(data?.bio);

    const navigate = useNavigate()

    if (loading) {
        return <div>
            <Appbar/>
            <div className='my-4 max-w-screen-sm border px-4 shadow-xl sm:mx-4 sm:rounded-xl sm:px-4 sm:py-4 md:mx-auto'>
            <div className="flex justify-center gap-4 border-b py-4 sm:flex-row">
            <div className="w-full h-full shrink-0 mr-auto sm:py-3y ">
                    <p className="font-medium text-center">Account Details</p>
                    <p className="text-sm text-gray-600 text-center">Edit your account details</p>
            </div>
                
            </div>

            <div className="flex flex-col justify-center gap-4 border-b py-4 sm:flex-row h-1/2">
                <Spinner/>
            </div>

            

            
            <div className="py-4">
                <button onClick= {()=>{
                    navigate("/account");
                }
                } className="mr-2 rounded-lg border-2 px-4 py-2 font-medium text-gray-500 focus:outline-none">Cancel</button>
                <button className="rounded-lg border-2 border-transparent bg-green-600 px-4 py-2 font-medium text-white focus:outline-none  hover:bg-green-700" onClick= {()=> {
                    axios.put(`${BACKEND_URL}/api/v1/user/edit`, {
                        name: name ? name : data?.name,
                        email: email,
                        bio: bio,
                        
                    }, {
                        headers : {
                            authorization : localStorage.getItem("token")
                        }
                    })
                    .then((response) => {
                        console.log(response);
                        navigate("/account");
                    })
                    .catch((error) => {
                        console.error("There was an error!", error);
                    });
                } }>Save</button>
            </div>
            </div>

        </div>
    }

    
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
                <input placeholder={data?.name} className="mb-2 w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 sm:mr-4 sm:mb-0 focus:ring-1" onChange={(e)=>{ 
                    {setName(e.target.value)}}}/>
            </div>

            <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
                <p className="shrink-0 w-32 font-medium">Email</p>
                <input placeholder={data?.email} className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"  onChange={(e)=>{
                     if(e.target.value!=""){setEmail(e.target.value)}}} />
            </div>
            <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
                <p className="shrink-0 w-32 font-medium">Bio</p>
                <input placeholder={data?.bio} className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"  onChange={(e)=>{
                     {setBio(e.target.value)}}} />
            </div>

            <div className="py-4">
                <button onClick= {()=>{
                    navigate("/account");
                }
                } className="mr-2 rounded-lg border-2 px-4 py-2 font-medium text-gray-500 focus:outline-none">Cancel</button>
                <button className="rounded-lg border-2 border-transparent bg-green-600 px-4 py-2 font-medium text-white focus:outline-none  hover:bg-green-700" onClick= {()=> {
                    axios.put(`${BACKEND_URL}/api/v1/user/edit`, {
                        name: name ? name : data?.name,
                        email: email,
                        bio: bio,
                        
                    }, {
                        headers : {
                            authorization : localStorage.getItem("token")
                        }
                    })
                    .then((response) => {
                        console.log(response);
                        navigate("/account");
                    })
                    .catch((error) => {
                        console.error("There was an error!", error);
                    });
                } }>Save</button>
            </div>

        </div>

    </div>
    )
}

export default AccEdit