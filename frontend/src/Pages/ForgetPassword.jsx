import React from 'react'
import Header from '../components/header'
import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const ForgetPassword = () => {
    const [username, setUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
        await axios.put("http://localhost:3000/forgotpassword",{
            username,
            password:newPassword
        })
        toast.success("Update Password Successfully")
    } catch (error) {
        console.log("Error updating password",error)
        toast.error("Error Updating Password")
    }
  };
  return (
   <>
    <Header/>
     <div className="flex items-center justify-center min-h-screen  bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
          Forgot Password
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
       
          <div>
            <label className="block text-gray-600 font-medium mb-2">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your username"
              required
            />
          </div>

         
          <div>
            <label className="block text-gray-600 font-medium mb-2">
              New Password
            </label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter new password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#0cd1c4e0] text-white font-semibold py-2 rounded-md hover:bg-[#0cd1c4bf] transition"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
   </>
  )
}

export default ForgetPassword