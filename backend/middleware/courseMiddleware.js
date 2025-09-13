import mongoose from "mongoose";
import Course from "../models/CourseModel.js";  // make sure you have .js if using ES modules

// Get all courses
const getList = async (req, res) => {
  try {
    const allCourse = await Course.find({});
    res.json(allCourse);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get course by ID
const getById = async (req, res) => {
  try {
    const courseData = await Course.findById(req.params.id);
    if (!courseData) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.json(courseData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new course
const postList = async (req, res) => {
  try {
    const courseData = await Course.create({
      courseName: req.body.courseName,
      courseBanner: req.body.courseBanner,
      courseDiscription: req.body.courseDiscription,
      teacherId: req.body.teacherId,
    });

    res.status(201).json(courseData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const DeleteList   = async (req, res) => {
  try {
    const courseData = await Course.findByIdAndDelete(req.params.id);
    if (!courseData) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.json({ message: "Course deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};






export { getList, getById, postList, DeleteList };
