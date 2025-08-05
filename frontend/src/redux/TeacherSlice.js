import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  teacherId: null,
};

const teacherSlice = createSlice({
  name: 'teacher',
  initialState,
  reducers: {
    setteacherId: (state, action) => {
      state.teacherId = action.payload;
    },
    clearteacherId: (state) => {
      state.teacherId = null;
    },
  },
});

export const { setteacherId, clearteacherId } = teacherSlice.actions;
export default teacherSlice.reducer;