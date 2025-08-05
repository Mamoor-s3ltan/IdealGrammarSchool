import React from "react";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const PostHomework = () => {
  const [className, setClassName] = useState("");

  const [details, setDetails] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const reduxTeacherId = useSelector((state) => state.teacher.teacherId);
  const teacherId = reduxTeacherId || localStorage.getItem("teacherId");

  const [availableClasses] = useState([
    "Nursery",
    "KG",
    "1st",
    "2nd",
    "3rd",
    "4th",
    "5th",
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      // Fetch teacher details by ID
      const res = await axios.get(
        `http://localhost:3000/teacher/teacherbyid/${teacherId}`
      );
      const teacher = res.data;

      const id = teacher.id;

      // Post the homework using the correct teacherId
      const postRes = await axios.post(
        `http://localhost:3000/teacher/posthomework`,
        {
          teacherId: id,
          className,
          details,
        }
      );
      toast.success("Homework posted Succesfully")
      setMessage(postRes.data.message || "Homework posted successfully.");
      setClassName("");
      setDetails("");
    } catch (error) {
      console.error("Error posting homework:", error);
      setMessage("Failed to post homework.");
      toast.error("Failed To Post Homework.")
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4 text-gray-900">Post Homework</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="text-gray-900">
          <label className="block mb-1 text-sm font-medium">Class Name</label>
          <select
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            className="w-full p-2 border rounded-lg"
            required
          >
            <option value="" disabled>
              Select a class
            </option>
            {availableClasses.map((classItem) => (
              <option key={classItem} value={classItem}>
                {classItem}
              </option>
            ))}
          </select>
        </div>
        <div className="text-gray-900">
          <label className="block mb-1 text-sm font-medium">
            Homework Details
          </label>
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className="w-full p-2 border rounded-lg"
            rows="4"
            placeholder="Enter homework details..."
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg"
          disabled={loading}
        >
          {loading ? "Posting..." : "Post Homework"}
        </button>
      </form>
      {message && <p className="mt-4 text-center text-green-600">{message}</p>}
    </div>
  );
};

export default PostHomework;
