import express from 'express';
import { getAllUser, login, signup } from '../controllers/user-controller';

const userRouter = express.Router();

userRouter.get("/", getAllUser);
userRouter.post("/signup", signup);
userRouter.post("/login", login);
export default userRouter;





//The express. Router class can be used to create modular mountable route handlers.
// A Router instance is a complete middleware and routing system; for this reason it 
//is often referred to as a “mini-app”.
//Its like a api folder in next.js