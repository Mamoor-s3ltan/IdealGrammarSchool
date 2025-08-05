import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";
import toast from 'react-hot-toast'

import { Link, useNavigate } from "react-router-dom";

const ManageStudents = () => {
  const [getStudents, setgetStudents] = useState([{}]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudents = async () => {
      const res = await axios.get("http://localhost:3000/admin/allstudents");
      setgetStudents(res.data);
      console.log(res.data);
    };

    fetchStudents();
  }, []);

  const HandleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:3000/admin/deletestudent/${id}`);
      toast.success("Student Deleted Succesfully")

      setgetStudents((prev) => prev.filter((student) => student.id !== id));
    } catch (error) {
      console.log("Error deleting student", error);
      toast.error("Error Deleting Student")
    }
  };

  const HandleEdit = (student) => {
    navigate("/admin/panel/update", { state: { student } });
  };

  return (
    <>
      <h1 className="text-Text font-bold ">Manage Students</h1>
      <Link
        to={"/admin/panel/add"}
        className="bg-[#0cd1c3] cursor-pointer p-4 rounded-lg text-white flex items-center gap-2 mt-2 font-bold"
      >
        Add New Student <IoMdAddCircleOutline className="size-7" />
      </Link>
      <div className="overflow-x-auto mt-6">
        <table className="min-w-full border border-gray-300 rounded-md overflow-hidden">
          <thead className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
            <tr>
              <th className="text-left px-6 py-3">Name</th>
              <th className="text-left px-6 py-3">Roll Number</th>
              <th className="text-left px-6 py-3">Class</th>
              <th className="text-left px-6 py-3">Fee Status</th>
              <th className="text-left px-6 py-3">Blocked</th>
              <th className="text-left px-6 py-3">Actions</th>{" "}
              {/* New column */}
            </tr>
          </thead>
          <tbody>
            {getStudents.map((student) => (
              <tr
                key={student.id}
                className="border-b border-gray-200  hover:bg-gray-200  transition-all"
              >
                <td className="px-6 py-4 font-medium text-gray-600">
                  {student.name}
                </td>
                <td className="px-6 py-4 text-gray-600">
                  {student.rollNumber}
                </td>
                <td className="px-6 py-4 text-gray-600">{student.className}</td>
                <td className="px-6 py-4">
                  {student.feeStatus?.isPaid ? (
                    <span className="text-green-600 font-semibold">Paid</span>
                  ) : (
                    <span className="text-red-600 font-semibold">Not Paid</span>
                  )}
                </td>
                <td className="px-6 py-4 ">
                  {student.isBlocked? <span className="text-red-600 font-bold">YES</span>: <span className="text-green-600 font-bold">NO</span>}
                </td>
                <td className="px-6 py-4 flex items-center gap-4">
                  <button
                    onClick={() => HandleEdit(student)}
                    className="text-blue-500 hover:text-blue-700"
                    title="Edit"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => HandleDelete(student.id)}
                    className="text-red-500 hover:text-red-700"
                    title="Delete"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageStudents;
