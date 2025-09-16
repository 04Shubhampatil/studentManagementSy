import { Router } from "express";
import { getTeachers, getTeacherById, addTeacher, deleteTeacher } from "../controller/techerController.js";
import authMiddleware from '../middleware/authMiddleware.js'

const router = Router();




//api/teacher/getList
//api/teacher/:id
//api/teacher/add
//api/teacher/delete/:id

router.get("/getList", authMiddleware, getTeachers);
router.get("/:id", authMiddleware, getTeacherById);
router.post("/add", authMiddleware, addTeacher);
router.delete("/delete/:id", authMiddleware, deleteTeacher);

export default router;
