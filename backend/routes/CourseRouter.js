import Router from 'express'
import { getList,getById,postList } from '../middleware/courseMiddleware.js'
const router = Router()

router.get("/getList",getList)
router.get("/:id",getById)
router.post("/postList",postList)

export default router