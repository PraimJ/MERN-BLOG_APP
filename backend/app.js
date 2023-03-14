import express from 'express';
import mongoose from 'mongoose';
import userRouter from "./routes/user-routes";
import blogRouter from "./routes/blog-routes";

const app = express();

app.use(express.json())
// this helps the error of TypeError: Cannot destructure property name of req.body as it is undefined
// This is happening because the application server does't know that what type of data it is recieving from req.body
// We need to tell the application that we are receiving the json body
// We can use this middleware before every middleware
//It will aprse all the data into the JSON format

app.use("/api/user", userRouter); //http.//localhost:5000/api/user (this is what the route is)
app.use("/api/blog", blogRouter); //http.//localhost:5000/api/user (this is what the route is)

app.use("/api", (req, res, next) => {
    res.send("hello World")
})



mongoose.connect('mongodb+srv://admin:CYJRiJTEC4yI8Jyn@cluster0.hhtqhfa.mongodb.net/Blog?retryWrites=true&w=majority'
).then(() => app.listen(5001))
    .then(() =>
        console.log("Connected to Database and Listening to LocalHost 5001")
    )
    .catch((err) => console.log(err));

//MongoDB Atlas password for BlogApp Cluster: CYJRiJTEC4yI8Jyn
//MODEL Folder: Models of the users and the blog like schema, is the first thing to build
//ROUTES Folder: Ths will control the routing operations, from which and from what route thr controller will call
//CONTROLLERS Folder: Will contain the controller functions that will have the api routing to MongoDB & the ExpressJs
