import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false, // 인증 상태 초기값
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    auth(state) {
      state.isAuthenticated = true; // 인증 성공 시 상태 업데이트
    },
    authout(state) {
      state.isAuthenticated = false; // 종료 시 상태 업데이트
    },
  },
});

export const { auth, authout } = authSlice.actions;
export default authSlice.reducer;