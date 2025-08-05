import React from "react";
import { Link, Outlet } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaUsersGear } from "react-icons/fa6";
import { FaChalkboardTeacher } from "react-icons/fa";

const Sidebar = () => {
  return (
    <>
    
   <div className="h-screen bg-cover bg-center px-2 py-2" style={{ background: "#fff" }}>
  <div className="flex flex-col md:flex-row h-full gap-2">
    {/* Sidebar */}
    <div className="w-full md:w-[20%] backdrop-blur-md bg-white/20 border border-white/30 rounded-md p-2 text-text shadow-md">
      <div className="flex p-2 py-3 mb-2 rounded-md hover:bg-white/30 transition">
        <Link to="/admin/panel/dashboard" className="flex items-center gap-2">
          <MdDashboard className="text-[#0cd1c3]" />
          Dashboard
        </Link>
      </div>

      <div className="flex p-2 py-3 mb-2 rounded-md hover:bg-white/30 transition">
        <Link to="/admin/panel/managestudent" className="flex items-center gap-2">
          <FaUsersGear className="text-[#0cd1c3]" />
          Manage Student
        </Link>
      </div>

      <div className="flex p-2 py-3 mb-2 rounded-md hover:bg-white/30 transition">
        <Link to="/admin/panel/manageteacher" className="flex items-center gap-2">
          <FaChalkboardTeacher className="text-[#0cd1c3]" />
          Manage Teacher
        </Link>
      </div>

     
    </div>

    {/* Main Content Area */}
    <div className="w-full md:w-[80%] p-4 overflow-y-auto shadow-md rounded-md border backdrop-blur-md bg-white/20 border-white/30 text-white">
      <Outlet />
    </div>
  </div>
</div>


</>

  
  );
};

export default Sidebar;
