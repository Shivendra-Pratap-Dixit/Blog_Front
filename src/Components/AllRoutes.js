import React from 'react'

import {Route,Routes} from "react-router-dom"

import Signup from './Auth/Signup'
import Signin from './Auth/Signin'
import Blogs from './Blogs/Blogs'
import BlogForm from './Blogs/BlogForm'
const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Blogs/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/blog" element={<Blogs/>}/>
        <Route path="/blogform" element={<BlogForm/>}/>
    </Routes>
  )
}

export default AllRoutes