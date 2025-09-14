import Teacher from "../models/techerModel.js";


export const getTeachers = async (req, res, next) => {
  try {
    const teachers = await Teacher.find({});
    res.json(teachers);
  } catch (error) {
    next(error);
  }
};

export const getTeacherById = async (req, res, next) => {
  try {
    const teacher = await Teacher.findById(req.params.id);
    if (!teacher) return res.status(404).json({ message: "Teacher not found" });
    res.json(teacher);
  } catch (error) {
    next(error);
  }
};


export const addTeacher = async (req, res, next) => {
  try {
    const teacher = new Teacher({
      profilePic: req.body.profilePic,
      name: req.body.name,
      age: req.body.age,
      exp: req.body.exp,
    });

    const savedTeacher = await teacher.save();
    res.status(201).json(savedTeacher);
  } catch (error) {
    next(error);
  }
};



export const deleteTeacher = async (req, res, next) => {
  try {
    const teacher = await Teacher.findByIdAndDelete(req.params.id);
    if (!teacher) return res.status(404).json({ message: "Teacher not found" });
    res.json({ message: "Teacher deleted successfully" });
  } catch (error) {
    next(error);
  }
};