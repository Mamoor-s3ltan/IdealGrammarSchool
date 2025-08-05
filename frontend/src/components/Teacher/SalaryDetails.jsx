import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const SalaryDetails = () => {
   const [salary, setSalary] = useState([]);
  const reduxTeacherId = useSelector((state) => state.teacher.teacherId);
  const teacherId = reduxTeacherId || localStorage.getItem("teacherId");

  useEffect(() => {
    const fetchSalary = async () => {
      try {
        const teacherRes = await axios.get(`http://localhost:3000/teacher/teacherbyid/${teacherId}`);
        const teacher = teacherRes.data;
        const id = teacher.id;

        const res = await axios.get(`http://localhost:3000/teacher/teachersalary/${id}`);
        setSalary(res.data);
        console.log(res.data);
      } catch (error) {
        console.log("Error fetching salary details:", error);
      }
    };

    if (teacherId) {
      fetchSalary(); 
    }
  }, [teacherId]);
  
  return (
    <>
    <div className="p-6">
  <h2 className="text-2xl font-semibold text-gray-800 mb-4">Salary Details</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {salary.map((sal) => (
      <div key={sal.id} className="bg-white shadow-md rounded-xl p-4 border border-gray-200">
        <div className="mb-2">
          <p className="text-sm text-gray-500">Amount</p>
          <p className="text-lg font-bold text-blue-600">Rs {sal.amount}</p>
        </div>

        <div className="mb-2">
          <p className="text-sm text-gray-500">Month</p>
          <p className="text-md font-medium text-gray-700">{sal.month}</p>
        </div>

        <div className="mb-2">
          <p className="text-sm text-gray-500">Paid On</p>
          <p className="text-md text-gray-700">{sal.paidOn ? sal.paidOn : "Not yet paid"}</p>
        </div>

        <div className="mt-2">
          <p className="text-sm text-gray-500">Status</p>
          {sal.paid ? (
            <div className="flex items-center text-green-600 font-semibold">
              <FaCheckCircle className="mr-1" /> Paid
            </div>
          ) : (
            <div className="flex items-center text-red-600 font-semibold">
              <FaTimesCircle className="mr-1" /> Unpaid
            </div>
          )}
        </div>
      </div>
    ))}
  </div>
</div>
    </>

  )
}

export default SalaryDetails