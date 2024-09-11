import { Avatar } from "./BlogCard"
import { Blog } from "../hooks";
import Appbar from "./Appbar";



export  const Blogdisp = ({blog} : { blog? : Blog }) =>{
    const content = String(blog?.content)
    return <div>
                <Appbar/>
            
            <div className="flex flex-col pl-2 pt-5 md:flex-row md:pl-5 md:pt-10">
                    <div className="flex-1 grid grid-cols-12  ">

                    <div className = "col-span-12 md:col-span-8 grid grid-cols-10 ">
                        <div className="col-span-1">
                            
                        </div>
                        <div className="col-span-7">
                            <div className="grid grid-cols-10 ">
                                <div className="text-5xl font-extrabold pb-5 pr-4 col-span-10 md:col-span-7 ">
                                {blog?.title}
                                </div>
                            </div>

                            <div className="text-gray-500 pb-5 ">
                                Posted on DD Month ,YYYY
                            </div>

                            <div dangerouslySetInnerHTML={{ __html : content }} className="">
                             
                            </div>   
                        </div>
                        <div className="col-span-2">
                            
                        </div>
                        
                    </div>

                    <div className="hidden md:block col-span-4">
                            <div className="font-semibold pb-2">
                                Author
                            </div>
                            <div className="flex">
                                <div className="flex flex-col justify-center pr-3">
                                    <Avatar label = {blog?.author.name || "Anonymous"}></Avatar>
                                </div>
                                <div >
                                    <div className="font-bold pb-1 text-xl">
                                    {blog?.author.name || "Anonymous"}
                                    </div>
                                    <div className="text-gray-500">
                                        This will contain our authors bio
                                    </div>
                                </div>   
                            </div>   
                    </div>
                </div>   
            </div>
 
    </div>
    

}