import express from 'express'
import {studentsbyID,viewHomework} from '../controllers/studentController.js'

const router = express.Router();

router.get("/detailsbyid/:rollNumber",studentsbyID)
router.get("/homework/:className", viewHomework);


export default router;