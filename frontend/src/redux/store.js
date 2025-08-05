import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice.js'
import studentReducer from './StudentIdSlice.js';
import teacherReducer from './TeacherSlice.js'


export const store = configureStore({
  reducer: {
    auth:authReducer,
    student: studentReducer,
    teacher: teacherReducer
  },
})