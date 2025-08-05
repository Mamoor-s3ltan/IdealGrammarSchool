import React, { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import Header from "../header";
import { IoBookOutline } from "react-icons/io5";
import { GrStatusInfo } from "react-icons/gr";

const StudentDashboard = () => {
  const reduxStudentId = useSelector((state) => state.student.studentId);
  const studentId = reduxStudentId || localStorage.getItem("studentId");
  const [student, setStudent] = useState({});
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const FetchStudentById = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/student/detailsbyid/${studentId}`
        );
        setStudent(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching student data", err);
      }
    };
    FetchStudentById();
  }, [studentId]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <>
      <Header />

      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Sidebar Navigation */}
        <div className="w-full md:w-1/4 bg-white shadow-md p-4">
          <div className="text-center mb-4">
            <p className="text-xl font-semibold">Welcome, {student.name}</p>
            <p className="text-gray-600">Class: {student.className}</p>
          </div>

          <nav className="flex flex-col gap-3  ">

            <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-md p-2 text-text shadow-md">
              <div className="flex  items-center mb-2 rounded-md hover:bg-white/30  transition">
                <Link
                  to="homework"
                  className=" flex items-center justify-center gap-2 "
                >
                  <IoBookOutline className="size-7 text-[#0cd1c3]" />
                  View Homework
                </Link>
              </div>
            </div>
           
            <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-md p-2 text-text shadow-md">
              <div className="flex  items-center mb-2 rounded-md hover:bg-white/30  transition">
                <Link
                  to="feestatus"
                  className=" flex items-center justify-center gap-2 "
                >
                  <GrStatusInfo className="size-7 text-[#0cd1c3]" />
                    Fee Status
                </Link>
              </div>
            </div>

            
          </nav>
        </div>

        {/* Main Panel */}
        <div className="w-full md:w-3/4 p-6 bg-gray-50 min-h-[60vh]">
          {student.feeStatus?.isPaid ? (
            <Outlet />
          ) : (
            <div className="text-center text-red-600 font-semibold text-lg mt-10">
              Access restricted. Please pay your dues to continue.
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default StudentDashboard;
