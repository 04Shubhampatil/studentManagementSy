
import { Router } from "express";
import Teacher from '../models/techerModel.js'
const router = Router()

router.get("/", (req, res) => {
    res.json({
        message: "Hello by teacher api"
    })
})

router.get("/getList", async (req, res) => {
    try {
        const allTeacher = await Teacher.find({})  //modelMese data ko nikalna
        res.json(allTeacher)
    } catch (error) {
        res.json({ message: error })
    }
})


router.get("/:id", async (req, res) => {
    try {
        const teacherid = await Teacher.findById(req.params.id)  //modelMese data ko nikalna
        res.json(teacherid)
    } catch (error) {
        res.json({ message: error })
    }
})


router.post("/add", async (req, res) => {

    const teacherData = await Teacher.create({
        profilePic: req.body.profilePic,
        name: req.body.name,
        age: req.body.age,
        exp: req.body.exp
    })

    try {
        const saveTeacher = await teacherData.save();
        res.json(saveTeacher)

    } catch (error) {
        res.json({ message: error })

    }
})

export default router