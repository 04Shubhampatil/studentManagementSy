import { Router } from "express";
import { getTeachers, getTeacherById, addTeacher, deleteTeacher } from "../controller/techerController.js";

const router = Router();




//api/teacher/getList
//api/teacher/:id
//api/teacher/add
//api/teacher/delete/:id
router.get("/getList", getTeachers);
router.get("/:id", getTeacherById);
router.post("/add", addTeacher);
router.delete("/delete/:id", deleteTeacher);

export default router;
