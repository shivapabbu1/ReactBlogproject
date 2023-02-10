import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Bollywood from '../Pages/Bollywood'
import Technology from '../Pages/Technology'
import Holywood from '../Pages/Holywood'
import Fitness from '../Pages/Fitness'
 import Food from '../Pages/Food'
import Singlepage from '../Pages/Singlepage'
import Navbar from './NavBar'
const BlogRouter = () => {
  return (
    <>
  
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/Home' element={<Home/>}></Route>
    <Route path='/bollywood' element={<Bollywood/>}></Route>
    <Route path='/Holywood' element={<Holywood/>}></Route>
    <Route path='/technology' element={<Technology/>}></Route>
    <Route path='/fitness' element={<Fitness/>}></Route>
    <Route path='/food' element={<Food/>}></Route>
    <Route path='/Singlepage' element={<Singlepage/>}></Route>
   

   </Routes>
   </>
  )
}

export default BlogRouter