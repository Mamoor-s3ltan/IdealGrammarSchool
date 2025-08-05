import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const HomeWork = () => {
  const [homework, sethomework] = useState([]);
  const studentId = localStorage.getItem("studentId");

  useEffect(() => {
    const fetchHomework = async () => {
      try {
        const studentRes = await axios.get(
          `http://localhost:3000/student/detailsbyid/${studentId}`
        );
        const student = studentRes.data;
        const className = student.className;
        console.log(className);

        const res = await axios.get(
          `http://localhost:3000/student/homework/${className}`
        );
        console.log("Homework response:", res.data);
        sethomework(res.data);
      } catch (error) {
        console.log("Having error fetching homework", error);
      }
    };
    if (studentId) fetchHomework();
  }, [studentId]);

  return (
    <>
      <div className="max-w-4xl mx-auto mt-10 p-4 bg-white rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          📘 Homework Assigned
        </h2>

        {homework.length > 0 ? (
          <div className="space-y-4">
            {homework.map((hw) => (
              <div
                key={hw.id}
                className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition"
              >
                <div className="flex justify-between items-center mb-2">
                  <p className="text-lg font-medium text-[#0cd1c4e0]">
                    {hw.className} Class
                  </p>
                  <p className="text-sm text-gray-500">
                    {new Date(hw.createdAt).toLocaleDateString()}
                  </p>
                </div>

                <p className="text-gray-800">{hw.details}</p>

                <p className="mt-3 text-sm text-gray-600">
                  Posted by:{" "}
                  <span className="font-semibold text-gray-800">
                    {hw.teacher?.name}
                  </span>
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600 text-center">
            No homework found for your class.
          </p>
        )}
      </div>
    </>
  );
};

export default HomeWork;
