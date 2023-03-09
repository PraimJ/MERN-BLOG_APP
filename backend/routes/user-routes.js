import express from 'express';
import { getAllUser, login, signup } from '../controllers/user-controller';

const router = express.Router();

router.get("/", getAllUser);
router.post("/signup", signup);
router.post("/login", login);
export default router;





//The express. Router class can be used to create modular mountable route handlers.
// A Router instance is a complete middleware and routing system; for this reason it 
//is often referred to as a “mini-app”.
//Its like a api folder in next.js