import React from 'react'
import { useState } from 'react'
import { Link,useNavigate  } from 'react-router-dom'
import axios from 'axios'
import Header from '../components/header'
import { useSelector, useDispatch } from 'react-redux';
import {setStudentId} from '../redux/StudentIdSlice'
import { setteacherId } from '../redux/TeacherSlice'
import { login } from '../redux/authSlice';
import toast from 'react-hot-toast'
import Stdimg from '../assets/std_img.jpg'

const LoginPage = () => {
  const navigate = useNavigate();
  const [uniqueId, setUniqueId] = useState('');
  const [password, setPassword] = useState('');

  const isLogged = useSelector((state)=>{state.auth.isLoggedIn})
  const dispatch = useDispatch();


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // You can handle login logic here (e.g., API call)
    try {
      const res = await axios.post("http://localhost:3000/auth",{
        uniqueId,
        password
      })
      
      if(res.data.role === 'admin'){
          navigate("/admin/panel/dashboard")
          localStorage.setItem("isLoggedIn",true)
          dispatch(login())
          toast.success("Login Succesfully")
      }
      if(res.data.role === 'teacher'){
        navigate("/teacher/panel/viewclasses")
        localStorage.setItem("isLoggedIn",true)
        dispatch(setteacherId(uniqueId))
        localStorage.setItem("teacherId",uniqueId)
        dispatch(login())
        toast.success("Login Succesfully")
      }
      if(res.data.role ==='student'){
        navigate("/student/panel/homework")
        localStorage.setItem("isLoggedIn",true)
        dispatch(setStudentId(uniqueId))
        localStorage.setItem("studentId", uniqueId);
        dispatch(login())
        toast.success("Login Succesfully")
      }
    } catch (error) {
      console.log("Having error to authenticate Try anoter password",error)
      toast.error("Login Failed Try Again")
    }
  };
  
  return (
    <>
    <Header/>
      <div className="flex flex-col md:flex-row h-screen">
     
      <div className="relative md:w-1/2 w-full h-64 md:h-auto">
        <img
          src={Stdimg} 
          alt="Login Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0  flex items-center justify-center">
          <h2 className="text-white text-3xl bg-gray-800 p-4  rounded-full md:text-4xl font-bold text-center px-4  ">
            Welcome Back!
          </h2>
        </div>
      </div>

     
      <div className="flex items-center justify-center md:w-1/2 w-full px-6 py-12 bg-gray-100">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Login to Your Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="uniqueId"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Unique ID
              </label>
              <input
                type="text"
                id="uniqueId"
                value={uniqueId}
                onChange={(e) => setUniqueId(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your unique ID"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#0cd1c3] text-white py-2 rounded-lg hover:bg-[#0cd1c4e0] transition duration-200"
            >
              Login
            </button>
          </form>

          <div className="text-right mt-4">
            <Link
              to="/forgotpassword"
              className="text-sm text-blue-500 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default LoginPage