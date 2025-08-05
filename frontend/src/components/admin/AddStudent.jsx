import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import toast from 'react-hot-toast'

const AddStudent = () => {
  const navigate = useNavigate();

  const [name, setname] = useState("");
  const [rollNumber, setrollNumber] = useState(123);
  const [className, setclassName] = useState("");
  const [blocked, setblocked] = useState(false);

  const HandleSubmit= async(e)=>{
    e.preventDefault();
    try {
        await axios.post("http://localhost:3000/admin/addnewstudent",{
            name,
            rollNumber:parseInt(rollNumber),
            className,
            blocked
        })
        toast.success("Student Created Succesfully")
    } catch (error) {
        console.log("Error Creating STudent",error)
        toast.error("Creating Student Failed ")
    }

  }

  return (
    <>
      {
        <IoMdArrowRoundBack
          onClick={() => {
            navigate("/admin/panel/managestudent");
          }}
          className="cursor-pointer size-7 text-Text"
        />
      }

      <form onSubmit={HandleSubmit} className="max-w-sm mx-auto">
        <div className="mb-5">
          <label
            for="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Name"
            required
            value={name}
            onChange={(e)=>{setname(e.target.value)}}
          />
        </div>
        <div className="mb-5">
          <label
            for="rollNumber"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Roll Number
          </label>
          <input
            type="number"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            value={rollNumber}
            onChange={(e)=>{setrollNumber(e.target.value)}}
          />
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
            onChange={(e)=>{setclassName(e.target.value)}}
          />
        </div>
       

        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value={blocked}
              className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              onChange={(e)=>{e.target.value}}

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

export default AddStudent;
