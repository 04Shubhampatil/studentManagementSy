
import { Router } from "express";
import student from '../models/studentsModel.js'
const router = Router()

router.get("/", (req, res) => {
    res.json({
        message: "Hello by student api"
    })
})

router.get("/getList", async (req, res) => {
    try {
        const allStudent = await student.find({})  //modelMese data ko nikalna
        res.json(allStudent)
    } catch (error) {
        res.json({ message: error })
    }
})

router.get("/:id", async (req, res) => {
    try {
        const studentid = await student.findById(req.params.id)  //modelMese data ko nikalna
        res.json(studentid)
    } catch (error) {
        res.json({ message: error })
    }
})

router.post("/add", async (req, res) => {

    const studentData = await student.create({
        profilePic: req.body. profilePic,
        name: req.body.name,
        age: req.body.age,
        grade:req.body.grade,
        courseId: req.body.courseId,
        
    })

    try {
        const savestudent = await studentData.save();
        res.json(savestudent)

    } catch (error) {
        res.json({ message: error })

    }
})


export default router