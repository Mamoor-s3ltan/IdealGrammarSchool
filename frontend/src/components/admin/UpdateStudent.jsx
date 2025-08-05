import React, { useState,useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import axios from "axios";
import toast from "react-hot-toast";


const UpdateStudent = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const student = location.state?.student;
 

  const [className, setclassName] = useState("");
  const [blocked, setblocked] = useState(false);
  const [feeStatus, setfeeStatus] = useState(true);

  const HandleSubmit = async (e) => {
    const id = student.id;

    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/admin/updatestudent/${id}`, {
        className,
        isPaid:feeStatus,
        isBlocked: blocked,
      });
      toast.success("Student Update Succesfully")
      console.log(`className:${className},feeStatus:${feeStatus}, isBlocked:${blocked}`)
    } catch (error) {
      console.log("Having error updating student");
      toast.error("Having Error Deleting")
    }
  };
  
 
  return (
    <>
      <IoMdArrowRoundBack
        onClick={() => {
          navigate("/admin/panel/managestudent");
        }}
        className="cursor-pointer size-7 text-Text"
      />

      <h1 className="text-text font-bold text-2xl">Update Student</h1>
      <form onSubmit={(e)=>HandleSubmit(e)} className="max-w-sm mx-auto">
        <div className="mb-5">
          <label
            htmlFor="feeStatus"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Fee Status
          </label>
          <select
            id="feeStatus"
            value={feeStatus}
            onChange={(e) => setfeeStatus(e.target.value === "true")}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="true">Paid</option>
            <option value="false">Not Paid</option>
          </select>
        </div>
        <div className="mb-5">
          <label
            for="rollNumber"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Class Name
          </label>
          <input
            type="text"
            id="ClassName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            value={className}
            onChange={(e) => {
              setclassName(e.target.value);
            }}
          />
        </div>

        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value={blocked}
              className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              onChange={(e) => {
                setblocked(e.target.checked);
              }}
            />
          </div>
          <label
            for="remember"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Blocked
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default UpdateStudent;
