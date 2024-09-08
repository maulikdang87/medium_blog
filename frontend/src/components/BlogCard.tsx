import { Link } from "react-router-dom";

interface BlogCardProps {
    authorName : string;
    title : string ;
    content : string ;
    publishedDate : string;
    id : string
}
const BlogCard= ({
    authorName,
    title,
    content,
    publishedDate,
    id
}: BlogCardProps) => {
    
  return (
    
    <div className='border-b-2 p-2 border-slate-200 text-base '>
        <Link to ={`/blog/${id}`}>
        
        <div className='flex'>
            <div className='flex justify-center flex-col'>
                <Avatar label={authorName}></Avatar>  

            </div>

            
            <div className='pl-2 font-light flex justify-center text-md flex-col'>
                <div className='flex'>
                    <div>
                        {authorName[0].toUpperCase() + authorName.slice(1)}

                    </div>

                    <div className="flex justify-center flex-col pl-2">
                        <Dot/>
                    </div>
                
                    <div className='font-thin pl-2 text-slate-500'>
                        {publishedDate}

                    </div>


                </div>
                
                
                
            </div>
            
        </div>
        
        <div className="text-2xl font-semibold pt-3 cursor-pointer">
            
            {title[0].toUpperCase()+ title.slice(1)} 
        </div>
        <div className='text-md font-thin'>
            {content.slice(0,100) + "..."}
        </div>
        <div className='text-slate-500 font-thin text-sm pt-3'>
            {`${Math.ceil(content.length / 100)} minute(s) read`}
        </div>
        </Link>
    </div>
    
  )}

export function Avatar( { label } : { label : string  }){

    return (
        <div className="relative text-base inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-200 rounded-full ">
        <span className="font-small text-gray-600 ">{label[0].toUpperCase()}</span>
    </div>

    )
    
    
}

export function Dot(){
    return (
        <div className="bg-gray-400 w-2 h-2 rounded full">

        </div>
    )
}




export default BlogCard


  
  