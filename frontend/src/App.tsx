

import { BrowserRouter, Navigate, Route,Routes } from 'react-router-dom'
import './App.css'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Blog from './pages/Blog'
import Blogs from './pages/Blogs'
import Publish from './pages/Publish'
import Account from './pages/Account'
import AccEdit from './components/AccEdit'
import UserBlogs from './pages/UserBlogs'
import EditBlog from './pages/EditBlog'



function App() {

  const isLoggedIn : boolean = localStorage.getItem('token') !== null;
 

  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {isLoggedIn ? <Navigate to='/Blogs'/> : <Navigate to='/signup'/>}></Route>
          <Route path='/signup' element = {<Signup/>}></Route>
          <Route path='/signin' element = {<Signin/>}></Route>
          <Route path='/blog/:id' element = {<Blog/>}></Route>
          <Route path='/blogs' element = {<Blogs/>}></Route>
          <Route path = '/publish' element = {<Publish/>}></Route>
          <Route path='/account' element = {<Account/>}></Route>
          <Route path='/change' element = {<AccEdit/>}></Route> 
          <Route path='/myposts' element = {<UserBlogs/>}></Route>
          <Route path='/editpost/:id' element = {<EditBlog/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
