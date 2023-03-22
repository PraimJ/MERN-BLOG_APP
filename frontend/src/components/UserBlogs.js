import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Blog from './Blog';

const UserBlogs = () => {
 //LOGIC LIVES HERE

 const [user, setUser] = useState()

const id = localStorage.getItem('userId'); 
//this gets the userId ince the user logs in, we have access to it because local store golbal
  
const sendUserBlogRequest = async () => {
  const res = await axios.get(`http://localhost:5001/api/blog/user/${id}`)
  .catch((err) => console.log(err));
  const data = await res.data;
  // console.log(data)
  return data
}
  
useEffect(() => {
  sendUserBlogRequest().then((data) => setUser(data.user));
});
// console.log(user);

  
  //HTML & JSX LIVES HERE
  
  return (
    <div>
      {" "}
      {user &&
        user.blogs &&
        user.blogs.map((blog, index) => (
          <Blog
            id={blog._id}
            key={index}
            isUser={true}
            title={blog.title}
            description={blog.description}
            imageURL={blog.image}
            userName={user.name}
          />
        ))}
    </div>
  );
};
  

export default UserBlogs