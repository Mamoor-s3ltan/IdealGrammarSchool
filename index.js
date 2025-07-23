import express from'express';
import cors from'cors';

import AdminRouter from './routes/AdminRoutes.js'

const app = express()

// MiddleWare
app.use(express.json());
app.use(cors());

const port = 3000



app.get('/', (req, res) => {
  res.send('Hello World!2')
})

app.use(AdminRouter)



app.listen(port, () => {
  console.log(`http://localhost:${port}`);
})
