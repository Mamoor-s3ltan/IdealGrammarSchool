# 📚 Ideal Grammar School - School Management System

A full-featured School Management System built using **React.js**, **Node.js (Express)**, and **MySQL**. The system allows students, teachers, and administrators to manage academic and administrative tasks efficiently through dedicated dashboards.

---

## 🧠 Features

### ✅ Authentication
- Student Login via Roll Number
- Teacher Login via Unique ID
- Admin Login via Static Credentials

### 🧑‍🏫 Admin Panel
- Add / Edit / Delete Students
- Add / Edit / Delete Teachers
- Assign classes and subjects
- View and manage all records

### 👨‍🏫 Teacher Panel
- Post homework to assigned class
- View list of students
- Manage attendance and homework

### 👨‍🎓 Student Panel
- View homework
- Access personal details
- View assigned subjects and teacher info

---

## 🛠️ Tech Stack

| Frontend | Backend | Database |
|----------|---------|----------|
| React.js + Tailwind CSS | Node.js + Express.js + Prisma | MySQL |

---

## 📁 Project Structure


IdealGrammarSchool/
├── frontend/ # React.js app
│ └── src/
├── backend/ # Node.js + Express app
│ └── routes/
│ └── controllers/
│ └── config/
├── README.md

---

## 🚀 Getting Started

### 📦 Clone the repository

```bash
https://github.com/Mamoor-s3ltan/IdealGrammarSchool.git
cd IdealGrammarSchool
```
🔧 Setup Instructions
```
🔹 Frontend (React)
cd frontend
npm install
npm start
```
```
🔹 Backend (Node.js + Express + Prisma)

cd backend
npm install
//Create a .env file in backend Folder  and add this line DATABASE_URL="mysql://root:@localhost:3306/grammarschool_db" change the port and username accordingly
npx prisma generate
npx prisma migrate dev --name init
//and first run the AdminStatic.js to create the Admin
npm run dev
```


## 📸 Screenshots
### Landing
![Landing](./screenshots/LandingPage.png)
### Login
![Login Page](./screenshots/LoginPage.png)
### Dashboard
![Dashboard](./screenshots/AdminDashboard.png)