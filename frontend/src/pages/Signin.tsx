import Appbar from "../components/Appbar"
import Auth from "../components/Auth"
import Quote from "../components/Quote"


const Signin = () => {
  return (
    <div>
      
    <div className='grid grid-cols-2  relative h-screen'>
      <div className='col-span-2 lg:col-span-1'>
        <div className='block lg:hidden relative z-10'>
        <Appbar type='auth'/>
        </div>
        <div>
           <Auth type= "signin"></Auth>

        </div>
        
       
      </div>
      <div className='hidden lg:block lg:col-span-1'>
      <Quote/>

</div>

</div>

  </div>
  )
}

export default Signin