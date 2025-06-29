import mongoose, { Schema } from "mongoose"

const courseSchema = new Schema({

    courseName: String,
    courseBanner: String,
    courseDiscription: String,
    teacherId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Teacher"
    }


})

const Course = mongoose.model("Course", courseSchema)
export default Course