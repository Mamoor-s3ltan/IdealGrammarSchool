import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from '../Pages/Landing';
import LoginPage from '../Pages/LoginPage';
import AdminPanel from '../Pages/AdminPanel';
import Dashboard from '../components/admin/Dashboard';
import ManageStudents from '../components/admin/ManageStudents';
import AddStudent from '../components/admin/AddStudent';
import UpdateStudent from '../components/admin/UpdateStudent';
import StudentDashboard from '../components/student/StudentDashboard';
import ManageTeachers from '../components/admin/ManageTeachers';
import AddTeacher from '../components/admin/AddTeacher';
import UpdateTeacher from '../components/admin/UpdateTeacher';
import FeeStatus from '../components/student/FeeStatus';
import HomeWork from '../components/student/HomeWork';
import TeacherDashboard from '../components/Teacher/TeacherDashboard';
import ViewClasses from '../components/Teacher/ViewClasses';
import PostHomework from '../components/Teacher/PostHomework';
import SalaryDetails from '../components/Teacher/SalaryDetails';
import ForgetPassword from '../Pages/ForgetPassword';



const AppRoutes = () => {
    

  return (
   <Router>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<LoginPage />} />
      
      {/* Admin Routes */}
      <Route path="/admin/panel" element={<AdminPanel />}>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="managestudent" element={<ManageStudents/>}/>
      <Route path="add" element={<AddStudent/>}/>
      <Route path="update" element={<UpdateStudent/>}/>
      <Route path="manageteacher" element={<ManageTeachers/>}/>
      <Route path='addteacher' element={<AddTeacher/>}/>
      <Route path='updateteacher' element={<UpdateTeacher/>}/>
      </Route>

      {/* Student Routes */}
      <Route path='/student/panel' element={<StudentDashboard/>}>
      <Route path='feestatus' element={<FeeStatus/>}/>
      <Route path='homework' element={<HomeWork/>}/>
      </Route>

      {/* Teacher Routes */}
      <Route path='/teacher/panel' element={<TeacherDashboard/>}>
      <Route path='viewclasses' element={<ViewClasses/>}/>
      <Route path='posthomework' element={<PostHomework/>}/>
      <Route path='salarydetails' element={<SalaryDetails/>}/>
      </Route>

      <Route path='/forgotpassword' element={<ForgetPassword/>}/>

      
      
    </Routes>
  </Router>
  )
}

export default AppRoutes