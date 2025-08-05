import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  studentId: null,
};

const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    setStudentId: (state, action) => {
      state.studentId = action.payload;
    },
    clearStudentId: (state) => {
      state.studentId = null;
    },
  },
});

export const { setStudentId, clearStudentId } = studentSlice.actions;
export default studentSlice.reducer;