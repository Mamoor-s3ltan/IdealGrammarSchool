import React from 'react'
import Header from '../header'
import { Link, Outlet } from "react-router-dom";
import { SiGoogleclassroom } from "react-icons/si";
import { FaUsersGear } from "react-icons/fa6";
import { FaChalkboardTeacher } from "react-icons/fa";

const TeacherDashboard = () => {
  return (
    <>
      <Header/>

       <div className="flex h-screen gap-2 mb-2 mt-2 bg-cover bg-center" style={{ background:"#fff" }}>
        {/* Sidebar */}
        <div className="w-[20%] backdrop-blur-md bg-white/20 border border-white/30 rounded-md p-2 text-text shadow-md">
          <div className="flex p-2 py-3 mb-2 rounded-md hover:bg-white/30  transition">
            <Link to="/teacher/panel/viewclasses" className="flex items-center gap-2">
              <SiGoogleclassroom className="text-[#0cd1c3]" />
              View assigned classes
            </Link>
          </div>
      
          <div className="flex p-2 py-3 mb-2 rounded-md hover:bg-white/30 transition">
            <Link to="/teacher/panel/posthomework" className="flex items-center gap-2">
              <FaUsersGear className="text-[#0cd1c3]" />
              Post homework
            </Link>
          </div>
      
          <div className="flex p-2 py-3 mb-2 rounded-md hover:bg-white/30 transition">
            <Link to="/teacher/panel/salarydetails" className="flex items-center gap-2">
              <FaChalkboardTeacher className="text-[#0cd1c3]" />
              View salary details 
            </Link>
          </div>
      
        </div>
      
      
        {/* Main Content Area */}
        <div className="w-[80%] p-4 overflow-y-auto shadow-md rounded-md border backdrop-blur-md bg-white/20 border-white/30 text-white ">
          <Outlet />
        </div>
        </div>
    </>
  )
}

export default TeacherDashboard