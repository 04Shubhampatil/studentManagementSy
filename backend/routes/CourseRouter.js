import Router from 'express'
import { getList,getById,postList,deleteCourse } from '../controller/courseController.js'
const router = Router()


// /api/course/getList
// /api/course/:id
// /api/course/postList
// /api/course/delete/:id

router.get("/getList",getList)
router.get("/:id",getById)
router.post("/postList",postList)
router.delete("/delete/:id",deleteCourse)

export default router