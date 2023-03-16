import Header from "./components/Header";
import React, {Fragment } from "react";
import {Route, Routes } from "react-router-dom"

import AddBlogs from "./components/AddBlogs";
import Auth from "./components/Auth";
import Blogs from "./components/Blogs";
import UserBlogs from "./components/UserBlogs";
import BlogDetail from "./components/BlogDetail";


function App() {
  return (
  <Fragment>
   < header>
   <Header/>
   </header>
  <main>
    <Routes>
<Route path ="/auth" element={<Auth/>}/>
<Route path ="/blogs" element={<Blogs/>}/>
<Route path ="/blogs/add" element={<AddBlogs/>}/>
<Route path ="/myBlogs" element={<UserBlogs/>}/>
<Route path ="/myBlogs/:id" element={<BlogDetail/>}/>
 </Routes>
  </main>
  </Fragment>
  
  )};

export default App;
