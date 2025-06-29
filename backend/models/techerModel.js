import mongoose,{Schema} from "mongoose"

const teacherSchema = new Schema({
    profilePic:String,
    name:String,
    age:Number,
    exp:Number

})

 const Teacher = mongoose.model("Teacher",teacherSchema)
 export default Teacher