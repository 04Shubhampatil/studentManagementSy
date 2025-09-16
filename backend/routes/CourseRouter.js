import Router from 'express'
import { getList,getById,postList,deleteCourse } from '../controller/courseController.js'
import authMiddleware from '../middleware/authMiddleware.js'
const router = Router()


// /api/course/getList
// /api/course/:id
// /api/course/postList
// /api/course/delete/:id

router.get("/getList",authMiddleware,getList)
router.get("/:id",authMiddleware,getById)
router.post("/postList",authMiddleware,postList)
router.delete("/delete/:id",authMiddleware,deleteCourse)

export default router