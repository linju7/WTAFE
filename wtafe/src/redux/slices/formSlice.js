import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  server: 'real', // 초기값 설정
  instance: 'kr1', // 초기값 설정
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setServer(state, action) {
      state.server = action.payload;
    },
    setInstance(state, action) {
      state.instance = action.payload;
    },
    resetForm(state) {
      state.server = 'real'; // 초기값으로 리셋
      state.instance = 'kr1'; // 초기값으로 리셋
    },
  },
});

export const { setServer, setInstance, resetForm } = formSlice.actions;
export default formSlice.reducer;