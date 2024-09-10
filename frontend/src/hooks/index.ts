import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config"

export interface Blog {
  "content": string;
  "title": string;
  "id": string
  "author": {
      "name": string
  }
}

export interface Data {
  "name" : string ;
  "email" : string ;
  "bio"? : string

}

export interface Posts {

    "id": string,
    "title": string,
    "content": string,
    "published": false,
    "authorId": string

  

}


export const useBlog = ({id}  : { id : string}) =>{
  const [loading , setLoading] = useState(true);
  const [blog , setBlog ] = useState<Blog>();

  useEffect(() => {
    axios.get (`${BACKEND_URL}/api/v1/blog`, {
      headers : {
        Authorization : localStorage.getItem("token"),
        id : id
      },
      
    })
    
      .then(response => {

        setLoading(false);
        
        setBlog(response.data.post);
        
      })

  },[id])

  return {loading, blog};

}


export const useBlogs = ()=> {
  const [loading , setLoading] = useState(true);
  const [blogs , setBlogs ] = useState<Blog[]>([]);

  useEffect(() => {
    axios.get (`${BACKEND_URL}/api/v1/blog/bulk`, {
      headers : {
        Authorization : localStorage.getItem("token")
      }
    })
    
      .then(response => {

        setLoading(false);
        
        setBlogs(response.data.posts);
        
      })

  },[])

  return {loading, blogs};

}

export const UseData = ()=>{

  const [loading,setLoading] = useState(true);
  const [data , setData] = useState<Data>();


  useEffect(()=>{
    axios.get(`${BACKEND_URL}/api/v1/user/name`, {
      headers : {
          Authorization : localStorage.getItem("token"),
      }
  }).then ( (response)=>{

    setLoading(false);
    setData(response.data.account);
  }
  )
  },[])

  return {loading , data }
}

export const UsePosts = ()=>{

  const [loading,setLoading] = useState(true);
  const [posts , setPosts] = useState<Posts[]>([]);


  useEffect(()=>{
    axios.get(`${BACKEND_URL}/api/v1/user/data`, {
      headers : {
          Authorization : localStorage.getItem("token"),
      }
  }).then ((response)=>{

    setLoading(false);
    setPosts(response.data.account.posts);
    console.log(posts)
  }
  )
  },[])

  return {loading , posts} 
}

