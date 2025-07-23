import express from 'express'
import { getAllStudents,AddNewStudent,DeleteStudent,UpdateStudent } from '../controllers/adminController.js'


const router = express.Router();

router.get("/admin/allstudents",getAllStudents);

router.post("/admin/addnewstudent",AddNewStudent);

router.delete("/admin/deletestudent/:id",DeleteStudent);

router.put("/admin/updatestudent/:id",UpdateStudent);

export default router;

