import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Blog from './Blog';



const Blogs = () => {
 
//LOGIC LIVES HERE
const [blogs, setBlogs] = useState();

const sendBlogRequest = async() =>{
  const res = await axios
  .get(`http://localhost:5001/api/blog`)
  .catch((err) => console.log(err));

  const data = await res.data;
  return data;
}

useEffect(() => {
  sendBlogRequest()
  .then((data) => setBlogs(data.blogs));
}, []);
console.log(blogs);



//first what happens is useEffect function gets called, That calls the sendBlogRequest
//Y useEffect - because when the page renders useEffect is called 
// the sendBlogRequest use a get request, it returns data
//.then the data is set into the useState to chnage the state of the blogs with the setBlogs is passed the to new received data

//JSX OR HTML LIVES HERE
  return (
    <div>
      
      {blogs && blogs.map((blog,index) => (<Blog 
       id={blog._id}
       isUser={localStorage.getItem("userId") === blog.user._id}
       title={blog.title}
       description={blog.description}
       imageURL={blog.image}
       userName={blog.user.name}/>
      ))}
    </div>
    );
};
  
// with all the (blogs) -Use State we got from the backend, we map through them through them to get props that we pass to the Blog.js
//In Blog.js we use those props to populate the  blog in the card
   
    





export default Blogs