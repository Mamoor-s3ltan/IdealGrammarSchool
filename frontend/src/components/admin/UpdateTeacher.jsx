import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const UpdateTeacher = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [salary, setsalary] = useState();
  const [salarystatus, setsalarystatus] = useState(true);
  const [salarypaidon, setsalarypaidon] = useState("");

  const teacher = location.state?.teacher;
  console.log(teacher.id);
  const id = teacher.id;

  const HandleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:3000/admin/updateteacher/${id}`,{
        salary,
        paid:salarystatus,
        paidOn:salarypaidon,
        

      })
      toast.success("Teacher Updated Succesfully")
    } catch (error) {
      console.log("Having error updating the Teacher Salary",error)
      toast.error("Having Error Updating Teacher")
    }
   
  };

  

  
  return (
    <>
      <IoMdArrowRoundBack
        onClick={() => {
          navigate("/admin/panel/manageteacher");
        }}
        className="cursor-pointer size-7 text-Text"
      />
      <h1 className="text-text font-bold text-2xl mt-2">Update Teacher</h1>

      <form onSubmit={(e) => HandleSubmit(e)} className="max-w-sm mx-auto mt-5">
        <div className="mb-5">
          <label
            htmlFor="Salary"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Salary
          </label>
          <input
            type="text"
            id="ClassName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            value={salary}
            onChange={(e) => {
              setsalary(e.target.value);
            }}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="SalaryStatus"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Salary Status
          </label>
          <select
            id="SalaryStatus"
            value={salarystatus}
            onChange={(e) => setsalarystatus(e.target.value ==="true")}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="true">Paid</option>
            <option value="false">Not Paid</option>
          </select>
        </div>

        <div className="mb-5">
          <label
            htmlFor="Salary"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Salary Paid On
          </label>
          <input
            type="date"
            id="ClassName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            value={salarypaidon}
            onChange={(e) => {
              setsalarypaidon(e.target.value);
            }}
          />
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

export default UpdateTeacher;
