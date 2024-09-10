import Appbar from "../components/Appbar"
import BlogCard from "../components/BlogCard";
import { BlogSkeleton } from "../components/BlogSkeleton"
import { UsePosts } from "../hooks"


const UserBlogs = () => {
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
                    {posts.map((post) => <BlogCard
                            authorName={"By you"}
                            title={post.title}
                            content={post.content}
                            publishedDate={"2nd Feb 2024"}
                            id = {post.id}
                        />)}
                    </div>
                </div>
            </div>
            
           
          )

    }

    

  

  
}


export default UserBlogs