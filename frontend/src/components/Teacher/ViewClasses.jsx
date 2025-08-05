import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";


const ViewClasses = () => {
  const [teacher, setteacher] = useState({});
  const [classes, setclasses] = useState([]);
  const [strength, setstrength] = useState({})
  const reduxteacherId = useSelector((state) => state.teacher.teacherId);
  const teacherId = reduxteacherId || localStorage.getItem("teacherId");


  useEffect(() => {
    const fetchteacher = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/teacher/teacherbyid/${teacherId}`
        );
        setteacher(res.data);

        // Fetch classes only after teacher data is set
        const id = res.data.id;
        const classRes = await axios.get(
          `http://localhost:3000/teacher/${id}/classes`
        );
        setclasses(classRes.data);
        console.log(classRes.data);

        // Get students strength for each class
        if (classes.length === 0) return;

    const strengthData = {};

    for (let i = 0; i < classes.length; i++) {
      const className = classes[i].className; 

      try {
        const res = await axios.get(`http://localhost:3000/teacher/studentstrength/${className}`);
        strengthData[className] = res.data.length;
      } catch (error) {
        console.error(`Error fetching strength for class ${className}`, error);
        strengthData[className] = 0; 
      }
    }

    setstrength(strengthData);
    

      } catch (error) {
        console.log("Error fetching teacher or classes:", error);
      }
    };

    // const fetchTeacherAndClasses = async () => {
    //   try {
    //     const res = await axios.get(
    //       `http://localhost:3000/teacher/teacherbyid/${teacherId}`
    //     );
    //     setteacher(res.data);

    //     const id = res.data.id;
    //     const classRes = await axios.get(
    //       `http://localhost:3000/teacher/${id}/classes`
    //     );
    //     setclasses(classRes.data);

    //     // Fetch strength for each class
    //     const strengthData = {};

    //     for (let cls of classRes.data) {
    //       const className = cls.className;
    //       try {
    //         const strengthRes = await axios.get(
    //           `http://localhost:3000/teacher/studentstrength/${className}`
    //         );
    //         strengthData[className] = strengthRes.data.length;
    //       } catch (error) {
    //         console.error(`Error fetching strength for class ${className}:`, error);
    //         strengthData[className] = 0;
    //       }
    //     }

    //     setstrength(strengthData);
    //   } catch (error) {
    //     console.log("Error fetching teacher or classes:", error);
    //   }
    // };
    fetchteacher()
  }, [teacherId]);

  return (
    <>
    <div className="p-4">
  {teacher && <p className="mb-6 text-lg font-medium text-gray-700">Welcome {teacher.name}</p>}
  <h1 className="text-2xl font-semibold text-black mb-4">Assigned Classes</h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 cursor-pointer">
    {classes.map((cls) => (
      <div
        key={cls.className}
        className="relative rounded-2xl overflow-hidden shadow-md group transform transition duration-300 hover:scale-105"
      >
        <img
          src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=873&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="class"
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0  bg-opacity-40 flex flex-col items-center justify-center">
          <h2 className="text-white text-2xl font-bold">{cls.className}</h2>
          <span>Class</span>
        </div>
       
      </div>
    ))}
  </div>
</div>

    </>
  );
};

export default ViewClasses;
