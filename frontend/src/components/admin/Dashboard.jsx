import React, { use } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import PieChart from "../PieChart";
import { FaUserGraduate, FaChalkboardTeacher } from "react-icons/fa";

const Dashboard = () => {
  const [getStudents, setgetStudents] = useState({});
  const [getTeacher, setgetTeacher] = useState({});

  useEffect(() => {
    const fetchStudents = async () => {
      const res = await axios.get("http://localhost:3000/admin/allstudents");
      setgetStudents(res.data);
      console.log(res.data);
    };
    const fetchTeachers = async () => {
      const res = await axios.get("http://localhost:3000/admin/allteacher");
      setgetTeacher(res.data);
    };
    fetchStudents();
    fetchTeachers();
  }, []);

  return (
    <>
      <h1 className="font-bold mt-5 mb-5 text-xl md:text-2xl">DASHBOARD</h1>

      <div className="flex flex-col md:flex-row flex-wrap gap-4">
        {/* Student Count Box */}
        <div className="flex items-center justify-between bg-gradient-to-r from-cyan-500 to-[#0cd1c3] px-6 py-8 rounded-xl w-full md:w-[30%] shadow-lg transform hover:scale-105 transition duration-300">
          <div>
            <h2 className="text-white text-xl font-semibold mb-1">Students</h2>
            <p className="text-white text-3xl font-bold">
              {getStudents.length}
            </p>
          </div>
          <FaUserGraduate className="text-white text-5xl opacity-80" />
        </div>

        {/* Teacher Count Box */}
        <div className="flex items-center justify-between bg-gradient-to-r from-orange-400 to-orange-500 px-6 py-8 rounded-xl w-full md:w-[30%] shadow-lg transform hover:scale-105 transition duration-300">
          <div>
            <h2 className="text-white text-xl font-semibold mb-1">Teachers</h2>
            <p className="text-white text-3xl font-bold">{getTeacher.length}</p>
          </div>
          <FaChalkboardTeacher className="text-white text-5xl opacity-80" />
        </div>

        {/* Pie Chart */}
        <div className="bg-white px-2 py-2 rounded-md w-full md:w-[35%] flex justify-center items-center shadow-md">
          <PieChart
            userCounts={{
              teachers: getTeacher.length,
              students: getStudents.length,
              staff: 15,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
