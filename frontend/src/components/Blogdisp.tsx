import React from "react"
import { Avatar } from "./BlogCard"
import { Blog } from "../hooks";
import Appbar from "./Appbar";



export  const Blogdisp = ({blog} : { blog : Blog }) =>{
    return <div>
                <Appbar/>

            <div className=" pl-5 pt-10   grid grid-cols-12 ">

                    <div className = "col-span-8 grid grid-cols-10">
                        <div className="col-span-1">
                            
                        </div>
                        <div className="col-span-7">
                            <div className="grid grid-cols-10 ">
                                <div className="text-5xl font-extrabold pb-5 pr-4 col-span-7 ">
                                {blog.title}
                                </div>
                            </div>

                            <div className="text-gray-500 pb-5 ">
                                Posted on DD Month ,YYYY
                            </div>

                            <div>
                                {blog.content}
                            </div>   
                        </div>
                        <div className="col-span-2">
                            
                        </div>
                        
                    </div>

                    <div className="col-span-4">
                            <div className="font-semibold pb-2">
                                Author
                            </div>
                            <div className="flex">
                                <div className="flex flex-col justify-center pr-3">
                                    <Avatar label = {blog.author.name || "Anonymous"}></Avatar>
                                </div>
                                <div >
                                    <div className="font-bold pb-1 text-xl">
                                    {blog.author.name || "Anonymous"}
                                    </div>
                                    <div className="text-gray-500">
                                        This will contain our authors bio
                                    </div>
                                </div>   
                            </div>   
                    </div>
                </div>    
    </div>
    

}