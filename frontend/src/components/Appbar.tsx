import { Link } from "react-router-dom"
import UserLogo from './UserLogo'
import { useState } from "react";
import { UseData } from "../hooks";

const Appbar = ({type} : {type? : string}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(prevState => !prevState);
    const {loading , data} = UseData();
    console.log(data)

    return (
    <div >
        <div className='flex flex-row justify-between border-b-2 border-slate-200 py-4 px-6'>

        <Link to= {'/blogs'}>
            <div className='font-semibold text-2xl flex flex-col justify-center '>
                Medium
            </div>
        </Link>

        <div>
            <div className="flex flex-row justify-center">


            {
                type === "publish" ?
                null
                :
                <Link to={"/publish"}>
                <div className="pl-5">
                    <button className="inline-flex items-center justify-center w-10 h-10 mr-2 text-indigo-100 transition-colors duration-150 bg-green-700 rounded-full focus:shadow-outline hover:bg-green-800">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 20 20"><path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                    </button>
                </div>
                
                </Link>
            }

            <div>
            <button
                id="dropdownUserAvatarButton"
                onClick={toggleDropdown}
                className="flex text-sm bg-gray-800 rounded-full md:me-0 "
                type="button"
            >
                <div className="font-small text-gray-600  relative text-base inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-200 rounded-full"> {data?.name[0].toUpperCase()}</div>
            </button>
        </div>
        </div>
        </div>
        </div>

        <div className="flex justify-end mr-4 ">
        {isOpen && (<UserLogo name={String(data?.name)} email={String(data?.email)} />)}
        </div>

        
        

    </div>


    )
    }

export default Appbar