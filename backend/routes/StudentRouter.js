import { Router } from "express";
import { getStudents, getStudentById, addStudent, deleteStudent } from "../controller/studentsController.js";

const router = Router();


// main routes

//api/student/getList
//api/student/:id
//api/student/add
//api/student/delete/:id


router.get("/getList", getStudents);
router.get("/:id", getStudentById);
router.post("/add", addStudent);
router.delete("/delete/:id", deleteStudent);

export default router;
