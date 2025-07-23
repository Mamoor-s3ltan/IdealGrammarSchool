import { PrismaClient } from '../generated/prisma/client.js';
const prisma = new PrismaClient();


export const getAllStudents = async (req,res,next)=>{
    // Get All Students 
  try {
    const students = await prisma.student.findMany()
    res.status(200).json(students);
  } catch (error) {
     console.log("Having Error fetching All Students",error)
     res.status(200).send({message:"Failed to fetch students"});
  }
}

export const AddNewStudent = async(req,res,next)=>{
  const {rollNumber,name,className,feeStatus,blocked} = req.body;
  
  try {
    const newStudent = await prisma.student.create({
      data:{
        rollNumber,
        name,
        class:className,
        feeStatus,
        blocked
      }
    })
    res.status(201).json({ message: 'Student created successfully', student: newStudent });
  } catch (error) {
    console.error('Error creating student:', error);
    res.status(500).json({ error: 'Failed to create student' });
  }
}

export const DeleteStudent = async(req,res,next)=>{

  const studentid = parseInt(req.params.id)
  try {
    const deleteStudent = await prisma.student.delete({
      where:{
        id:studentid
      }
    })
    res.status(200).json({ message: 'Student deleted successfully', student: deleteStudent });
  } catch (error) {
    res.status(401).json({message:"Error deleting the student"});
    console.log("Having error deleting the selected students",error)
  }
}

export const UpdateStudent = async (req, res, next) => {
  const studentId = parseInt(req.params.id);
  const { name, className, feeStatus, blocked } = req.body;

  try {
    // Check if student exists
    const studentExist = await prisma.student.findUnique({
      where: {
        id: studentId
      }
    });

    if (!studentExist) {
      return res.status(404).json({ message: "Student not found" });
    }

    // Update the student
    const updatedStudent = await prisma.student.update({
      where: {
        id: studentId
      },
      data: {
        name,
        class: className,
        feeStatus,
        blocked
      }
    });

    res.status(200).json({ message: "Student has been updated successfully", student: updatedStudent });

  } catch (error) {
    console.error("Error updating student:", error);
    res.status(500).json({ message: "Error updating student" });
  }
};
