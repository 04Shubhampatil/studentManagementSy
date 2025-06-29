
import { Router } from "express";
import course from '../models/CourseModel.js'
const router = Router()

router.get("/", (req, res) => {
    res.json({
        message: "Hello by course api"
    })
})

router.get("/getList", async (req, res) => {
    try {
        const allCourse = await course.find({})  //modelMese data ko nikalna
        res.json(allCourse)
    } catch (error) {
        res.json({ message: error })
    }
})

router.get("/:id", async (req, res) => {
    try {
        const courseid = await course.findById(req.params.id)  //modelMese data ko nikalna
        res.json(courseid)
    } catch (error) {
        res.json({ message: error })
    }
})

router.post("/add", async (req, res) => {

    const courseData = await course.create({
        courseName: req.body.courseName,
        courseBanner: req.body.courseBanner,
        courseDiscription: req.body.courseDiscription,
        teacherId:req.body.teacherId
    })

    try {
        const savecourse = await courseData.save();
        res.json(savecourse)

    } catch (error) {
        res.json({ message: error })

    }
})


export default router