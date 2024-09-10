import { ChangeEvent, useState } from 'react'
import Appbar from '../components/Appbar'
import { BACKEND_URL } from '../config'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import UserBlog from './UserBlog'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'

const Publish = () => {

  const [title , setTitle] = useState("")
  const [content , setContent] = useState("")

  const navigate = useNavigate();
  return (
    <div className=''>
      <Appbar type='publish' />

      <div className='flex justify-center'>

        <div className='max-w-screen-lg w-full'>
        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Title" onChange={(e)=>{
          setTitle(e.target.value)
        }}/>

        <div className='py-3 rounded-lg '>
          <ReactQuill theme='snow' value={content} onChange={setContent}/>

        </div>
        
        <button className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-green-700 rounded-lg  focus:bg-green-800 " onClick={ async()=> {
          const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
            title : title,
            content : content
        }, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })

        navigate(`/blog/${response.data.id}`)
        


        }}>
          Publish post
      </button>

      </div>   
      </div>

     

    </div>
    
  )
}



export default Publish
