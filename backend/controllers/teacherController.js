import { PrismaClient } from "../generated/prisma/client.js";
const prisma = new PrismaClient();

export const viewClasses = async (req, res) => {
  const { teacherId } = req.params;

  try {
    const assignedClasses = await prisma.classAssignment.findMany({
      where: {
        teacherId: parseInt(teacherId),
      },
      select: {
        className: true,
      },
    });

    if (assignedClasses.length > 0) {
      res.status(200).json(assignedClasses);
    } else {
      res.status(404).json({ message: "No classes found for this teacher" });
    }
  } catch (error) {
    console.log("Having error fetching assigned class", error);
    res.status(500).json({ message: "Having error fetching classes" });
  }
};


export const getTeacherbyID = async (req, res) => {

  const {teacherid} = req.params;
  if(!teacherid){
    return res.status(500).json({message:"TeacherId is undefined"})
  }
  try {
    const teacher = await prisma.teacher.findUnique({
      where: {
        teacherId: teacherid,
      }
    });
    if (teacher) {
      res.status(201).json(teacher);
    }
  } catch (error) {
    console.log(
      "Having error fetching the teacher and assigned classes",
      error
    );
    res
      .status(500)
      .json({
        message: "Having error fetching the teacher and assigned classes",
      });
  }
};

export const getStudentsStrength = async (req, res) => {
  try {
    const { className } = req.params;

    const students = await prisma.student.findMany({
      where: {
        className: className,
      },
    });

    res.status(200).json({ count: students.length }); 
  } catch (error) {
    console.log("Error fetching students by className:", error);
    res.status(500).json({ message: "Having error fetching students by className" });
  }
};

export const postHomework = async (req, res) => {
  const { teacherId, className, details } = req.body;

  if (!teacherId || !className || !details) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const newHomework = await prisma.homework.create({
      data: {
        teacherId,
        className,
        details,
      }
    });

    res.status(201).json({
      message: "Homework posted successfully.",
      homework: newHomework
    });
  } catch (error) {
    console.error("Error posting homework:", error);
    res.status(500).json({ message: "Failed to post homework." });
  }
};

export const teachersalary = async (req,res)=>{

    const {id} = req.params
try {
    const teacherSalary = await prisma.salary.findMany({
        where:{
            teacherId:parseInt(id)
        }
    })
    res.status(200).json(teacherSalary)
} catch (error) {
    console.log("Having error fetching teacher salary",error)
    res.status(500).json({message:"Having error fetching teacher salary"})
}
}

