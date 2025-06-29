import mongoose,{Schema} from "mongoose"

const studentSchema = new Schema({
    profilePic:String,
    name:String,
    age:Number,
    grade:Number,
    courseId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course"
    }

})

 const Student = mongoose.model("Student",studentSchema)
 export default Student