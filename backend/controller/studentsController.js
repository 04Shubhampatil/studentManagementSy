import Student from "../models/studentsModel.js";


export const getStudents = async (req, res, next) => {
  try {
    const allStudents = await Student.find({}).populate("courseId");
    res.json(allStudents);
  } catch (error) {
    next(error);
  }
};

export const getStudentById = async (req, res, next) => {
  try {
    const student = await Student.findById(req.params.id).populate("courseId");
    if (!student) return res.status(404).json({ message: "Student not found" });
    res.json(student);
  } catch (error) {
    next(error);
  }
};

export const addStudent = async (req, res, next) => {
  const { profilePic, name, age, grade, courseId } = req.body;
  try {
    const student = new Student({
      profilePic,
      name,
      age,
      grade,
      courseId,
    });

    const savedStudent = await student.save();
    res.status(201).json(savedStudent);
  } catch (error) {
    next(error);
  }
};

export const deleteStudent = async (req, res, next) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) return res.status(404).json({ message: "Student not found" });
    res.json({ message: "Student deleted successfully" });
  } catch (error) {
    next(error);
  }
};