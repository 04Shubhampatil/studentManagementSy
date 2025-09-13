import Course from "../models/CourseModel.js";


export const getList = async (req, res) => {
  try {
    const allCourses = await Course.find({}).populate("teacherId"); // populate teacher details
    res.json(allCourses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const getById = async (req, res) => {
  try {
    const courseData = await Course.findById(req.params.id).populate("teacherId");
    if (!courseData) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.json(courseData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const postList = async (req, res) => {
  try {
    const { courseName, courseBanner, courseDiscription, teacherId } = req.body;

    const newCourse = new Course({
      courseName,
      courseBanner,
      courseDiscription,
      teacherId,
    });

    const savedCourse = await newCourse.save();
    res.status(201).json(savedCourse);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const updateCourse = async (req, res) => {
  try {
    const { courseName, courseBanner, courseDiscription, teacherId } = req.body;

    const updatedCourse = await Course.findByIdAndUpdate(
      req.params.id,
      { courseName, courseBanner, courseDiscription, teacherId },
      { new: true, runValidators: true }
    );

    if (!updatedCourse) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.json(updatedCourse);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const deleteCourse = async (req, res) => {
  try {
    const deletedCourse = await Course.findByIdAndDelete(req.params.id);
    if (!deletedCourse) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.json({ message: "Course deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
