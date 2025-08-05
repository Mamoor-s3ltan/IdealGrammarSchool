import express from 'express'
import { getStudentsStrength, getTeacherbyID, postHomework, teachersalary, viewClasses } from '../controllers/teacherController.js';

const router = express.Router();

router.get("/teacherbyid/:teacherid",getTeacherbyID)
router.get("/:teacherId/classes",viewClasses)
router.get("/studentstrength/:className",getStudentsStrength)
router.get("/teachersalary/:id",teachersalary)

router.post("/posthomework",postHomework)

export default router;