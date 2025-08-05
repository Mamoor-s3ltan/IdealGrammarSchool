import express from 'express'
import { getAllStudents,AddNewStudent,DeleteStudent,UpdateStudent, AddNewTeacher, getAllTeacher, DeleteTeacher, UpdateTeacher  } from '../controllers/adminController.js'


const router = express.Router();

// Admin Routes For Students
router.get("/allstudents",getAllStudents);
router.post("/addnewstudent",AddNewStudent);
router.delete("/deletestudent/:id",DeleteStudent);
router.put("/updatestudent/:id",UpdateStudent);

// Admin Routes For Teachers
router.get("/allteacher",getAllTeacher)
router.post("/addnewteacher",AddNewTeacher)
router.delete("/deleteteacher/:id",DeleteTeacher)
router.put("/updateteacher/:id",UpdateTeacher)

export default router;

