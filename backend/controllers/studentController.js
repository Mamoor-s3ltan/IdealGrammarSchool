import { PrismaClient } from '../generated/prisma/client.js';
const prisma = new PrismaClient();



export const studentsbyID = async(req,res)=>{

    const {rollNumber} = req.params

    try {
      const student = await prisma.student.findUnique({
            where:{
                rollNumber:parseInt(rollNumber)
            },
            include:{
                feeStatus:true
            }
        })
        res.status(201).json(student);
    } catch (error) {
        console.log("Having error fetching studentByid",error)
        res.status(401).json({message:"Having error fetching student by id"})
    }
}

export const viewHomework = async (req, res) => {
  try {
    const { className } = req.params;

    if (!className) {
      return res.status(400).json({ message: "Class name is required" });
    }

    const homeworkList = await prisma.homework.findMany({
      where: {
        className: className,
      },
      orderBy: {
        createdAt: "desc",
      },
      include: {
        teacher: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    res.status(200).json(homeworkList);
  } catch (error) {
    console.error("Error fetching homework:", error);
    res.status(500).json({ message: "Failed to fetch homework" });
  }
};

