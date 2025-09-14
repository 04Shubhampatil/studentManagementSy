import express from "express";
import cors from "cors";
import "dotenv/config"
import bodyParser from "body-parser";
import connectDB from "./DB/DB.js";

//!import routes

import TeacherRouter from "./routes/TeacherRouter.js"
import StudentRouter from "./routes/StudentRouter.js"
import CourseRouter from "./routes/CourseRouter.js"

const app = express()
app.use(cors())
app.use(bodyParser.json())


connectDB().then(() => console.log("DB connected.."))

//API

app.use("/api/teacher",TeacherRouter)
app.use("/api/student",StudentRouter)
app.use("/api/course",CourseRouter)


app.listen(process.env.Port || 5000, () => {
    console.log("server connected.......");

})