import { PrismaClient } from '../generated/prisma/client.js';
import bcrypt from "bcryptjs";
const prisma = new PrismaClient();



export const getAllStudents = async (req,res,next)=>{
    // Get All Students 
  try {
    const students = await prisma.student.findMany({
      include:{
        feeStatus:true,
      }
    })
  
    res.status(200).json(students);
  } catch (error) {
     console.log("Having Error fetching All Students",error)
     res.status(200).send({message:"Failed to fetch students"});
  }
}

export const AddNewStudent = async(req,res,next)=>{
  const admin =  await prisma.admin.findFirst();

  const {rollNumber,name,className,isBlocked} = req.body;
  
  try {
    const hashedPassword = await bcrypt.hash("123456", 10);
    const newStudent = await prisma.student.create({
      data:{
        rollNumber,
        name,
        className,
        isBlocked,
        password:hashedPassword,
        admin: {
          connect: { id: admin.id } 
        }
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

export const UpdateStudent = async (req,res) => {
  const studentId = parseInt(req.params.id);
  const { className, isPaid, isBlocked } = req.body;

  try {
    // Check if student exists
    const studentExist = await prisma.student.findUnique({
      where: { id: studentId }
    });

    if (!studentExist) {
      return res.status(404).json({ message: "Student not found" });
    }

    // 1. Update the student table
    const updatedStudent = await prisma.student.update({
      where: { id: studentId },
      data: {
        className,
        isBlocked: Boolean(isBlocked)
      }
    });

    // 2. Check if fee status exists for this student
    const feeStatusExist = await prisma.feeStatus.findUnique({
      where: { studentId: studentId }
    });

    if (feeStatusExist) {
      // Update the existing fee status
      await prisma.feeStatus.update({
        where: { studentId: studentId },
        data: {
          isPaid: Boolean(isPaid),
          updatedAt: new Date()
        }
      });
    } else {
      // Create new fee status entry
      await prisma.feeStatus.create({
        data: {
          studentId: studentId,
          isPaid: isPaid,
          updatedAt: new Date()
        }
      });
    }

    res.status(200).json({
      message: "Student and Fee Status updated successfully",
      student: updatedStudent
    });

  } catch (error) {
    console.error("Error updating student:", error);
    res.status(500).json({ message: "Error updating student" });
  }
};



export const getAllTeacher = async (req,res)=>{
  try {

   const allteacher = await prisma.teacher.findMany({
    include:{
      salaries:{
        orderBy:{paidOn:'desc'},
      },
      assignments:true,
    }
   })
   if(!allteacher){
    res.status(201).json({message:"Create a teacher first"})
   }
   res.status(201).json(allteacher)
  } catch (error) {
    console.log("Error Fetching Teachers",error)
    res.status()
  }
}

export const AddNewTeacher = async(req,res)=>{

   const { name, teacherId, salary, classNames } = req.body;

  const admin = await prisma.admin.findFirst();

  if (!name || !teacherId || !salary || !classNames) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  if (classNames.length > 3) {
    return res.status(400).json({ message: "A teacher can be assigned to at most 3 classes." });
  }

  try {
    // Create teacher
    const hashedPassword = await bcrypt.hash("123456", 10);
    const teacher = await prisma.teacher.create({
      data: {
        name,
        teacherId,
        salary: parseFloat(salary),
        password:hashedPassword,
        admin: {
          connect: { id: admin.id }
        }
      }
    });

    // Assign classes
    const assignments = classNames.map((className) => ({
      className,
      teacherId: teacher.id,
    }));

    await prisma.classAssignment.createMany({
      data: assignments,
    });

    // Create salary record for the current month
    const currentDate = new Date();
    const monthYear = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' }); // e.g., "July 2025"

    const salaryRecord = await prisma.salary.create({
      data: {
        month: monthYear,
        amount: parseFloat(salary),
        paid: true,
        paidOn: currentDate,
        admin: {
          connect: { id: admin.id }
        },
      teacher: {
      connect: { id: teacher.id }  
    }
      }
    });

    res.status(201).json({
      message: "Teacher added successfully",
      teacher,
      salary: salaryRecord
    });
  } catch (error) {
    console.error("Error adding teacher:", error);
    res.status(500).json({ message: "Error adding teacher" });
  }
}

export const DeleteTeacher = async (req,res)=>{

   const { id } = req.params;

  try {
    await prisma.teacher.delete({
      where:{
        id:parseInt(id)
      }
    })
     
    res.status(201).json({ message: "Deleted Successfully" });
  } catch (error) {
    console.error("Error deleting teacher:", error);
    res.status(500).json({ message: "Failed to delete teacher", error });
  }
}

export const UpdateTeacher = async (req, res) => {
  
  const id = req.params.id

  const {salary, paid, paidOn, month } = req.body;

  try {
    const numericTeacherId = parseInt(id);

    // 1. Update Teacher's salary in Teacher table
    await prisma.teacher.update({
      where: {
        id:numericTeacherId
      },
      data: {
        salary: parseInt(salary)
      }
    });

    // 2. Find the latest salary entry for the teacher
    const latestSalary = await prisma.salary.findFirst({
      where: {
        teacherId: numericTeacherId,
      },
      orderBy: {
        paidOn: 'desc' // get the most recent
      }
    });

    const currentDate = new Date();
    const monthYear = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' }); 
    // If salary record exists, update it
    if (latestSalary) {
      await prisma.salary.update({
        where: {
          id: latestSalary.id
        },
        data: {
          amount: parseInt(salary),
          paid: Boolean(paid), // handle boolean or string
          paidOn: new Date(paidOn),
          month:monthYear
        }
      });
    } 

    res.status(200).json({ message: "Teacher and salary updated successfully" });
  } catch (error) {
    console.log("Error updating teacher or salary", error);
    res.status(500).json({ message: "Server error while updating teacher and salary" });
  }
};



