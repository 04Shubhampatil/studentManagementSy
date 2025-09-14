import mongoose from "mongoose";

const { Schema } = mongoose;

const teacherSchema = new Schema(
  {
    profilePic: {
      type: String,
      default: "", 
    },
    name: {
      type: String,
      required: [true, "Teacher name is required"],
    
    },
    age: {
      type: Number,
      min: [18, "Teacher must be at least 18 years old"],
      max: [100, "Age must be less than 100"],
    },
    exp: {
      type: Number,
      min: [0, "Experience cannot be negative"],
      default: 0, 
    },
  },
  {
    timestamps: true,  
   
  }
);

export default mongoose.model("Teacher", teacherSchema);
