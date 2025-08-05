import express from'express';
import cors from'cors';

import AdminRouter from './routes/AdminRoutes.js'
import StudentRouter from './routes/StudentRoutes.js'
import TeacherRouter from './routes/TeacherRoutes.js'
import { loginUser } from './controllers/auth.js';
import { forgotpassword } from './controllers/forgotpassword.js';

const app = express()

// MiddleWare
app.use(express.json());
app.use(cors());

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!2')
})

app.use("/auth",loginUser)

app.use("/admin",AdminRouter)
app.use("/student",StudentRouter)
app.use("/teacher",TeacherRouter)

app.use("/forgotpassword",forgotpassword)


app.listen(port, () => {
  console.log(`http://localhost:${port}`);
})
