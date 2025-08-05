import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const FeeStatus = () => {
  const reduxStudentId = useSelector((state) => state.student.studentId);
  const studentId = reduxStudentId || localStorage.getItem("studentId");
  const [student, setStudent] = useState({});
  const [loading, setLoading] = useState(true);

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
     <div className="max-w-md mx-auto mt-6 p-4 bg-white shadow-md rounded-xl">
  <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">🎓 Fee Status</h2>

  <div className="flex flex-col sm:flex-row sm:justify-between items-center bg-gray-50 p-4 rounded-lg border border-gray-200">
    <div className="mb-3 sm:mb-0 text-center sm:text-left">
      <p className="text-sm text-gray-500">Status</p>
      {student.feeStatus?.isPaid ? (
        <div className="text-green-600 text-lg font-semibold flex items-center justify-center sm:justify-start gap-2">
          <FaCheckCircle className="text-xl" /> Paid
        </div>
      ) : (
        <div className="text-red-600 text-lg font-semibold flex items-center justify-center sm:justify-start gap-2">
          <FaTimesCircle className="text-xl" /> Unpaid
        </div>
      )}
    </div>

    <div className="text-center sm:text-right">
      <p className="text-sm text-gray-500">Last Updated</p>
      <p className="text-gray-800 font-medium">
        {student.feeStatus?.updatedAt
          ? new Date(student.feeStatus.updatedAt).toLocaleDateString()
          : "N/A"}
      </p>
    </div>
  </div>
</div>

    </>
    
  );
};

export default FeeStatus;
