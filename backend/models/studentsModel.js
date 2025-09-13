import mongoose from "mongoose";

const { Schema } = mongoose;

const studentSchema = new Schema(
  {
    profilePic: {
      type: String,
      default: "", 
    },
    name: {
      type: String,
      required: [true, "Student name is required"],
     
    },
    age: {
      type: Number,
      min: [5, "Age must be at least 5"],
      max: [100, "Age must be less than 100"],
    },
    grade: {
      type: Number,
      min: [1, "Grade must be at least 1"],
      max: [12, "Grade must be at most 12"],
    },
    courseId: {
      type: Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
  },
  {
    timestamps: true,
   
  }
);

export default mongoose.model("Student", studentSchema);
