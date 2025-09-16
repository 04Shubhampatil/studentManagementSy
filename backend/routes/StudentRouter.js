import { Router } from "express";
import { getStudents, getStudentById, addStudent, deleteStudent } from "../controller/studentsController.js";
import authMiddleware from '../middleware/authMiddleware.js'

const router = Router();


// main routes

//api/student/getList
//api/student/:id
//api/student/add
//api/student/delete/:id


router.get("/getList", authMiddleware, getStudents);
router.get("/:id",authMiddleware, getStudentById);
router.post("/add",authMiddleware, addStudent);
router.delete("/delete/:id",authMiddleware, deleteStudent);

export default router;
