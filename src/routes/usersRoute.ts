import express from "express";
const router = express.Router();
import { userLogin } from "../controllers/usersController";

// Users Routes
router.post("/login", userLogin);

export default router;
