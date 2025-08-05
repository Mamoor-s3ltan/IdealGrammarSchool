import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const AddTeacher = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    teacherId: "",
    salary: "",
    classNames: [],
  });
  const [availableClasses] = useState([
    "Nursery",
    "KG",
    "1st",
    "2nd",
    "3rd",
    "4th",
    "5th",
  ]);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "classNames") {
      const selectedOptions = Array.from(e.target.selectedOptions).map(
        (opt) => opt.value
      );
      if (selectedOptions.length > 3) {
        setError("You can only assign up to 3 classes.");
      } else {
        setError("");
        setFormData({ ...formData, classNames: selectedOptions });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.classNames.length > 3) {
      setError("Maximum of 3 classes allowed.");
      return;
    }
    try {
      await axios.post("http://localhost:3000/admin/addnewteacher", formData);
      toast.success("Teacher Added Succesfuly")
      setFormData({
        name: "",
        teacherId: "",
        salary: "",
        classNames: [],
      });

    } catch (err) {
      toast.error("Error Creating Teacher")
      setError("Failed to add teacher");
      console.error(err);
    }
  };
  return (
    <>
      {
        <IoMdArrowRoundBack
          onClick={() => {
            navigate("/admin/panel/manageteacher");
          }}
          className="cursor-pointer size-7 text-Text"
        />
      }

     <div className="max-w-lg mx-auto mt-8 p-4 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4 text-Text">Add New Teacher</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4 ">

        <input
          type="text"
          name="name"
          placeholder="Teacher Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-2 rounded text-Text"
          required
          
        />

        <input
          type="text"
          name="teacherId"
          placeholder="Teacher ID"
          value={formData.teacherId}
          onChange={handleChange}
          className="w-full border p-2 rounded text-Text"
          required
        />

        <input
          type="number"
          name="salary"
          placeholder="Salary"
          value={formData.salary}
          onChange={handleChange}
          className="w-full border p-2 rounded text-Text"
          required
        />

        <label className="block text-sm font-medium text-gray-700">
          Assign Classes (Max 3):
        </label>
        <select
          name="classNames"
          multiple
          value={formData.classNames}
          onChange={handleChange}
          className="w-full border p-2 rounded h-32 text-Text"
        >
          {availableClasses.map((cls) => (
            <option key={cls} value={cls}>{cls}</option>
          ))}
        </select>

        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Add Teacher
        </button>
      </form>
    </div>
    </>
  );
};

export default AddTeacher;
