import { ChangeEvent, useState } from 'react'
import Appbar from '../components/Appbar'
import { BACKEND_URL } from '../config'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

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

        <TextEditor onChange={(e)=> {
          setContent(e.target.value)
        }} />


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

function TextEditor({ onChange }: {onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void}) {
  return <div className="mt-2">
      <div className="w-full mb-4 ">
          <div className="flex items-center justify-between border">
          <div className="my-2 bg-white rounded-b-lg w-full">
              <label className="sr-only">Publish post</label>
              <textarea onChange={onChange} id="editor" rows={8} className="focus:outline-none block w-full px-0 text-sm text-gray-800 bg-white border-0 pl-2" placeholder="Write an article..." required />
          </div>
      </div>
     </div>

    
  </div>
}

export default Publish
