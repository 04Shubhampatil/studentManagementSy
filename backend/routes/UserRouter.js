import express from "express";
import { getProfile, register, login, logout, updateProfile } from "../controller/userController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.post("/logout", logout);


router.get("/getallUsers", authMiddleware, getProfile);
//update route
router.put("/updateProfile", authMiddleware, updateProfile);

export default router;
