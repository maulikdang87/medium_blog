import { useBlog } from "../hooks"
import { Blogdisp} from "../components/Blogdisp"
import { useParams } from "react-router-dom"
import { BlogDispSkel } from "../components/BlogDIspSkel"

const Blog = () => {

    const { id }  = useParams();
    const { loading , blog } = useBlog({
        id : id || ""
    })

       if (loading) {
    return <div>
        <BlogDispSkel/>      
    </div>
   }
  return (
    <div >
        <Blogdisp blog = {blog}/>
        
    </div>
  )
}

export default Blog