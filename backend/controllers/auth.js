import { PrismaClient } from '../generated/prisma/client.js';
import bcrypt from "bcryptjs";
const prisma = new PrismaClient();

export const loginUser = async (req, res) => {
  const { uniqueId, password } = req.body;

  try {
    // Admin Login
    const admin = await prisma.admin.findFirst({ where: { username: uniqueId } });
    if (admin && await bcrypt.compare(password, admin.password)) {
      return res.status(200).json({ role: "admin", user: admin });
    }

    // For Teacher
    const teacherId = uniqueId;
    const teacher = await prisma.teacher.findUnique({where:{teacherId}})
    if(teacher && await bcrypt.compare(password, teacher.password) ){
      return res.status(200).json({role:"teacher",user:teacher})
    }
    
    // Parse rollNumber for student login
    const rollNumber = parseInt(uniqueId, 10);
    if (isNaN(rollNumber)) {
      console.log("Roll number is not valid:", uniqueId);
    } else {
      const student = await prisma.student.findUnique({ where: { rollNumber } });

      if (student) {
        return res.status(200).json({ role: "student", user: student });
      }
    }

    

    return res.status(404).json({ message: "Invalid credentials" });

  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Server error during login" });
  }
};
