import mongoose from "mongoose";

const { Schema } = mongoose;

const courseSchema = new Schema(
  {
    courseName: {
      type: String,
      required: [true, "Course name is required"],
   
    },
    courseBanner: {
      type: String,
      default: "",
    },
    courseDescription: {
      type: String,
      default: "",
    },
    teacherId: {
      type: Schema.Types.ObjectId,
      ref: "Teacher",
      required: true,
    },
  },
  {
    timestamps: true, 
    versionKey: false, 
  }
);

export default mongoose.model("Course", courseSchema);
