
import { Router } from "express";
import authHandler from "./auth/auth.js";
import login from "./auth/login.js";
import loginController from "./auth/login.js";



const router = Router();


// Auth route
router.get('/auth', authHandler);
router.post('/auth/login', loginController);

export default router;