import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaEdit, FaTrash } from "react-icons/fa";
import toast from 'react-hot-toast';

const ManageTeachers = () => {
    const [teachers, setTeachers] = useState([]);
    const navigate = useNavigate();

  const fetchTeachers = async () => {
    try {
      const res = await axios.get("http://localhost:3000/admin/allteacher");
      console.log(res.data)
      setTeachers(res.data);
    } catch (err) {
      console.error("Error fetching teachers", err);
    }
  };

  const deleteTeacher = async (id) => {
    if (!window.confirm("Are you sure you want to delete this teacher?")) return;
    try {
      await axios.delete(`http://localhost:3000/admin/deleteteacher/${id}`);
      fetchTeachers(); 
      toast.success("Teacher Deleted Succesfully")
    } catch (err) {
      console.error("Failed to delete teacher", err);
      toast.error("Error Deleting Teacher")
    }
  };

  useEffect(() => {
    fetchTeachers();
  }, []);

 const HandleEdit =(teacher)=>{
    navigate("/admin/panel/updateteacher",{ state: { teacher } })

 }

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-4 text-Text">Teacher List</h2>
        <Link
        to={"/admin/panel/addteacher"}
        className="bg-[#0cd1c3] cursor-pointer p-4 rounded-lg text-white flex items-center gap-2 mt-2 mb-2 font-bold"
      >
        Add New Teacher <IoMdAddCircleOutline className="size-7" />
      </Link>
      <div className="overflow-x-auto mt-6">
        <table className="min-w-full border border-gray-300 rounded-md overflow-hidden">
          <thead className="bg-gradient-to-r from-cyan-500 to-[#0cd1c3] text-white">
            <tr>
              <th className="text-left px-6 py-3">Teacher ID</th>
              <th className="text-left px-6 py-3">Name</th>
              <th className="text-left px-6 py-3">Salary</th>
              <th className="text-left px-6 py-3">Salary Status</th>
              <th className="text-left px-6 py-3">Salary PaidOn</th>
              <th className="text-left px-6 py-3">Assigned Classes</th>
              <th className="text-left px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher) => (
              <tr key={teacher.id} className="border-b border-gray-200 hover:bg-gray-200 transition-all">
                <td className="px-6 py-4 font-medium text-gray-700 ">{teacher.teacherId}</td>
                <td className="px-6 py-4 font-normal text-gray-700 ">{teacher.name}</td>
                <td className="px-6 py-4 font-normal text-gray-700 ">Rs. {teacher.salary.toFixed(0)}</td>
                <td className="px-6 py-4 font-normal text-gray-700 ">{teacher.salaries[0].paid ? <span className='text-green-600 font-bold'>Paid</span>:<span text-red-600 font-bold>UnPaid</span>}</td>
                <td className="px-6 py-4 font-normal text-gray-700 ">{teacher.salaries[0].month  }</td>
                <td className="px-6 py-4 font-normal text-gray-700 ">
                  {teacher.assignments.map((a) => a.className).join(", ") || "None"}
                </td>
                <td className="p-3">
                  <button
                    onClick={() => deleteTeacher(teacher.id)}
                    className="text-red-500 cursor-pointer hover:text-red-700"
                    title="Delete"
                  >
                     <FaTrash />
                  </button>
                  <button className='text-blue-500 px-4 cursor-pointer ' title='Edit' onClick={()=>{HandleEdit(teacher)}}>
                    <FaEdit/>
                  </button>
                </td>
              </tr>
            ))}
            {teachers.length === 0 && (
              <tr>
                <td colSpan="5" className="p-3 text-center text-gray-500">
                  No teachers found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ManageTeachers