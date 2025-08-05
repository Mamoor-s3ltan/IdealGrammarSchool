import { PrismaClient } from '../generated/prisma/client.js';
import bcrypt from "bcryptjs";
const prisma = new PrismaClient();

export const forgotpassword = async (req, res) => {
  const { username, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10); // Hash the new password

    // Try to update Teacher
    const updatedTeacher = await prisma.teacher.updateMany({
      where: {
        teacherId: username,
      },
      data: {
        password: hashedPassword,
      },
    });

    // If teacher was found and updated
    if (updatedTeacher.count > 0) {
      return res.status(200).json({ message: "Teacher password updated successfully" });
    }

    // Try to update Student
    const updatedStudent = await prisma.student.updateMany({
      where: {
        rollNumber: parseInt(username),
      },
      data: {
        password: hashedPassword,
      },
    });

    // If student was found and updated
    if (updatedStudent.count > 0) {
      return res.status(200).json({ message: "Student password updated successfully" });
    }

    // If neither was found
    return res.status(404).json({ message: "User not found" });

  } catch (error) {
    console.error("Having error updating password:", error);
    return res.status(500).json({ message: "Server error" });
  }
};