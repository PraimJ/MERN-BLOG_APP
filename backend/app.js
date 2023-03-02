import express from 'express';
import mongoose from 'mongoose';

const app = express();

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
