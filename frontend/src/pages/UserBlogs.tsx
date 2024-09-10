import axios from "axios";
import Appbar from "../components/Appbar"
import BlogCard from "../components/BlogCard";
import { BlogSkeleton } from "../components/BlogSkeleton"
import { UsePosts } from "../hooks"
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const UserBlogs = () => {
    const navigate = useNavigate();
    const {loading , posts} = UsePosts();
    if (loading){
        return (
            <div className='flex flex-col'>
                <Appbar/>
            <div className=' flex justify-center p-4'>
            <div className='flex justify-center flex-col w-screen max-w-screen-md'>
                <BlogSkeleton/>
                <BlogSkeleton/>
                <BlogSkeleton/>
                <BlogSkeleton/>
                <BlogSkeleton/>
                
            </div>
            </div>
            </div>
        )
    }

    else {

        return (
            <div className='flex flex-col'>
                <Appbar/>
                <div className=' flex justify-center p-4'>
                    <div className='flex justify-center flex-col w-screen max-w-screen-md'>
                    {posts.map((post) => <div className="">
                        <BlogCard
                            authorName={"By you"}
                            title={post.title}
                            content={post.content}
                            publishedDate={"2nd Feb 2024"}
                            id = {post.id}
                        />

                        

                        <div className="py-2 flex justify-between border-b-2 p-2 border-slate-200 text-base ">

                        <button type="button" className="focus:outline-none text-white bg-green-600 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Edit</button>

                        <button type="button" className="focus:outline-none text-white bg-red-600 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" onClick={
                            ()=>{
                                    axios.delete(`${BACKEND_URL}/api/v1/blog/delete` , {
                                        headers : {
                                            authorization : localStorage.getItem("token"),
                                            id :post.id
                                        }
                                    }).then( response => {
                                        console.log(response);
                                        window.location.reload();
                                    })
                                    
                               
                            
                        }}>Delete</button>

                        

                        </div>
                       

                        </div>
                    
                    )   
                        }

                    
                    </div>
                </div>
            </div>     
           
          )

    }

    

  

  
}


export default UserBlogs