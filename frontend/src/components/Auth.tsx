
import { SignupInput } from "@maulikdang/medium-common";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";



const Auth = ({type}: {type : "signup" | "signin"}) => {

    const navigate = useNavigate();
    const [postInputs , setPostInputs] = useState<SignupInput>({
        name : "",
        username : "",
        password : ""
    })

async function sendRequest(){
    try {
        const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type}`,postInputs )
        const jwt = response.data.jwt;
        console.log(jwt)
        localStorage.setItem('token', jwt);
        
        navigate("/blogs")

    }

    catch(e){
        console.log(e);


    }

}
  return (
    <div className="h-screen flex justify-center flex-row  ">

        <div className=" flex justify-center flex-col w-3/5 lg:w-1/2 ">

            <div className="text-4xl font-bold text-center">
                Create Account
            </div>

            <div className="text-md text-gray-500 flex flex-row mt-2 flex justify-center">
                <div className="">
                    Already have an account?
                </div>
                <div className="underline pl-1 hover:text-black">
                            <Link to = {type === "signin" ? "/signup" : "/signin"} >{type === "signin" ? "Signup" : "Signin" } </Link>
                </div>
            </div>


            <div className="mt-5 ">

               

                    {type === "signup" ? <LabelledInput label="Name" placeholder="John Doe" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            name: e.target.value
                        })
                    }} /> : null}

                <LabelledInput label = "Email" placeholder="johndoe@xyz.com" onChange={(e)=>{
                    setPostInputs({
                        ...postInputs,
                        username : e.target.value
                    })
                    
                }}  />
                <LabelledInput label = "Password" type = {"password"} placeholder="........" onChange={(e)=>{
                    setPostInputs({
                        ...postInputs,
                        password : e.target.value
                    })
                }}  />

        
            </div>

            <button onClick = {sendRequest} type="button" className="w-full text-white bg-red-5000 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 :bg-gray-800 bg-gray-700 ring-gray-700 border-gray-700 mt-2">{type === "signin" ? "Signin" : "Signup" } </button>
        </div>
        
        

    </div>
  )
}

interface LabelledInputType {
    label : string,
    placeholder : string,
    type? : string,
    onChange: (e : ChangeEvent<HTMLInputElement> ) => void;
}

function LabelledInput({label , placeholder ,type , onChange}: LabelledInputType){

    return (
        
           <div className="mb-5">
                <div className="block mb-2 text-sm font-bold text-gray-900 ">{label}</div>

                <div>
                     <input onChange={onChange} type={type || "text"} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />

                </div>
               
            </div>

        
    )

}






export default Auth