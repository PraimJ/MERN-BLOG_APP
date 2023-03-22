import mongoose from "mongoose";
import Blog from "../model/Blog";
import User from "../model/User";
// import bcrypt from "bcryptjs";

export const getAllBlogs = async (req, res, next) => {
    let blogs;
    try {
        blogs = await Blog.find().populate("user"); //when getting the blogs, we want the collection of the user as well 
    } catch (err) {
        return console.log(err)
    }
    if (!blogs) {
        return res.status(404).json({ message: "No Blogs Found" })
    }
    return res.status(200).json({ blogs })
}

export const addBlog = async (req, res, next) => {
    const { title, description, image, user } = req.body;

    let existingUser;
    try {
        existingUser = await User.findById(user); // this gets the id from the user from req.body
    } catch (err) {
        return console.log(err)
    }
    if (!existingUser) {
        return res.status(400).json({ message: "Unable to find user by this ID" });
    }
    //first we had to see if there was a user, if there is no user there is no blog
    //if there is a user now we are try catching a the blog
    const blog = new Blog({
        title,
        description,
        image,
        user
    });
    try {
        const session = await mongoose.startSession(); //we start a session
        session.startTransaction(); //we start the transaction
        await blog.save({ session }); // we save the new blog it the session
        existingUser.blogs.push(blog); // we then push the new blog into the array of blogs in the existing user
        await existingUser.save({ session }) // now the existing user has all the new info so now we save it again
        await session.commitTransaction(); // then we finish the transaction
    } catch (err) {
        return console.log(err);
        return res.status(500).json({ message: err });
    }
    return res.status(200).json({ blog });
    
};

export const updateBlog = async (req, res, next) => {
    const { title, description } = req.body; //These are the only things that can be updated
    //these are the new title and description from the update form
    const blogId = req.params.id; // this take the id from the url
    let blog;
    try {
        blog = await Blog.findByIdAndUpdate(blogId, {
            title,
            description
        })
    } catch (err) {
        return console.log(err)
    }
    if (!blog) {
        return res.status(500).json({ message: "Unable to update the blog!!" });
        //Status 500 Internal Server Error
    }
    return res.status(200).json({ blog });
};


export const getBlogById = async (req, res, next) => {
    const blogId = req.params.id;
    let blog;
    try {
        blog = await Blog.findById(blogId);
    } catch (err) {
        return console.log(err)
    }
    if (!blog) {
        return res.status(404).json({ message: "No Blogs Found with this ID" })
    }
    return res.status(200).json({ blog })
}

export const deleteBlogById = async (req, res, next) => {
    const blogId = req.params.id;
    let blog;
    try {
        blog = await Blog.findByIdAndRemove(blogId).populate("user"); //populate gets the user collection
        await blog.user.blogs.pull(blog); //this is pulling a specfic blog from the array of blogs within the user collection
        await blog.user.save(); // we need this because after the blog is deleted, we need to save the user collection to show it does not have the deleted blog
    } catch (err) {
      console.log(err)
    }
    if (!blog) {
        return res.status(500).json({ message: "No Blogs Found with this ID, We can't delete" })
    }
    return res.status(200).json({ message: `Blog ${blogId} has been deleted` });
};

export const getBlogByUserId = async (req, res, next) => {
    const userId = req.params.id; // this gets the id from the url for the user
    let userBlogs;
    try {
        userBlogs = await User.findById(userId).populate("blogs"); //(User) refs to the collection or the schema, specifiys the blog array in the user id 
    }
    catch (err) {
        return console.log(err);
    }
    if (!userBlogs) {
        return res.status(404).json({ message: `No blogs found for UserID: ${userId}` })
    }
    return res.status(200).json({ user: userBlogs }); // the get req returns a (user:) is an object that has the user which contains info and the array of all blogs of the specific user (userBlogs)
};






//req.params: An object containing parameter values parsed from the URL path.
//For example if you have the route /user/:name, then the "name" from the URL path wil be available as req.params.name. This object defaults to {}.

//The idea of a session is that we store information on the server side and then we send a little cookie back to the client that says, Here's your key,
// here's the ID you need to unlock that session.
//But the first thing to get out of the way is that on the left where it says Data Store, that's not usually the same thing as your actual database. 
//So a session does not replace a database.
// in mongoose the session, startsession, startTransaction, CommitTransacrtion. 
// I beleieve it is a way to communication two or more collections when they are chnaging. 