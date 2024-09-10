

import ReactQuill from "react-quill";
import Appbar from "../components/Appbar";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useBlog } from "../hooks";
import { Spinner } from '../components/UserLogo';


const EditBlog = () => {

  const { id }  = useParams();
  const { loading , blog } = useBlog({
        id : id || ""
    })
  const [title , setTitle] = useState(blog?.title)
  const [content , setContent] = useState(blog?.content)

  const navigate = useNavigate();

  useEffect(() => {
    if (blog) {
      setTitle(blog.title);
      setContent(blog.content);
    }
  }, [blog]);



  if (loading){
    return <div>
        <Appbar/>
        <div className="flex flex-col justify-center h-screen">
        <div className="w-screen flex justify-center ">
        <Spinner/>

        </div>
        
    </div>
        </div>
    
  }

  else {


    return (
       
        <div className=''>
          <Appbar type='publish' />
          
    
          <div className='flex justify-center'>
    
            <div className='max-w-screen-lg w-full'>
        
            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Title" defaultValue={blog?.title} onChange={(e)=>{
              setTitle(e.target.value)
            }}/>
            
    
            <div className='py-3 rounded-lg '>
                
              <ReactQuill theme='snow' defaultValue={blog?.content} onChange={setContent}/>
    
            </div>
            
            <button className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-green-700 rounded-lg  focus:bg-green-800 " onClick={ async()=> {
              const response = await axios.put(`${BACKEND_URL}/api/v1/blog`, {
                title : title,
                content : content,
                id : id
            }, {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            })
    
            navigate(`/blog/${response.data.id}`)
            
            }}>
              Save Changes
          </button>
    
          </div>   
          </div>

          <div>
            
          </div>
    
         
    
        </div>
        
      )
  }
  
}

export default EditBlog