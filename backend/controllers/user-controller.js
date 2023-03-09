// import { json } from "body-parser";
import User from "../model/User";
import bcrypt from "bcryptjs";
//to import bcrypt.js use npm i bcrypt.js
//bcrypt hashes your password to keep it secure
//use it by  const hashedPassword = bcrypt.hashSync(password);


export const getAllUser = async (req, res, next) => {
    let users;
    try {
        users = await User.find();

    } catch (err) {
        return console.log(err);
    }
    if (!users) {
        return res.status(404).json({ message: "No users found" });
    }
    return res.status(200).json({ users });
};

export const signup = async (req, res, next) => {
    const { name, email, password } = req.body;
    let existingUser;
    try {
        existingUser = await User.findOne({ email });
    } catch (err) {
        return console.log(err);
    }
    if (existingUser) {
        return res.status(400).json({ message: "User Already Exists ! Login Instead" });
    }

    const hashedPassword = bcrypt.hashSync(password);

    const user = new User({
        name,
        email,
        password: hashedPassword
    });

    try {
        await user.save();
    } catch (err) {
        return console.log(err);
    }
    return res.status(201).json({ user });
};


export const login = async (req, res, next) => {
    const { email, password } = req.body;
    let existingUser;
    try {
        existingUser = await User.findOne({ email });
    } catch (err) {
        return console.log(err);
    }
    if (!existingUser) {
        return res
            .status(404)
            .json({ message: "Couldn't Find User By This Email" });
    }
    const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
    //compareSync async compares the string password, to the fetched existingUsers.password hashed password
    // this is a booloean function.
    if (!isPasswordCorrect) {
        return res.status(400).json({ message: "Incorrect Password" })
    }
    return res.status(200).json({ message: "Login Successfull" })
};

//users is naturally undefined, but the async function trys to get all users with User.find()
//if no users the return will be a status(404) then send a message of NO USERS FOUND
//if there are users then status(200) show all users object. 

//The async function declaration declares an async function where the await keyword 
//is permitted within the function body. The async and await keywords enable asynchronous, 
//promise-based behavior to be written in a cleaner style, avoiding the need to explicitly 
//configure promise chains. Async function work with all http requests. 

//req- is waht we request from the front-end, ex res.body, We test this with postman
//res- is what we send to the front-end
//next is goes to the next middleware.

//FOR signup
//res.body we are getting the destructured name, email, password
//let existingUser is trying to find a one user in the collection of users in mongoDB with the req.body's email logged
//we await this task
//we catch the err and console log it
//if there is a existingUser - return a 400 status with the message
//if no existingUser the make a new User(with the name,email,password feilds)
// try to put the user into the db with user.save (await this)
//catch the err if there is then a console.log will tell you
//then return res.status(201).json({user}) (it will return the new user object)
// import this function to user-router in the post req