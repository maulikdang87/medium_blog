
import BlogCard from '../components/BlogCard'
import Appbar from '../components/Appbar'
import { useBlogs } from '../hooks/index'
import { BlogSkeleton } from '../components/BlogSkeleton';
const Blogs = () => {
    const { loading, blogs } = useBlogs();

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

  return (

    <div className='flex flex-col'>
        <Appbar/>
        <div className=' flex justify-center p-4'>
            <div className='flex justify-center flex-col w-screen max-w-screen-md'>
            {blogs.map(blog => <BlogCard
                    authorName={blog.author.name|| "Anonymous"}
                    title={blog.title}
                    content={blog.content}
                    publishedDate={"2nd Feb 2024"}
                    id = {blog.id}
                />)}
            </div>
        </div>
    </div>
    
   
  )
}

export default Blogs