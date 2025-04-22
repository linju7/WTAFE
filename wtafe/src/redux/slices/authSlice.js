import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false, // 인증 상태 초기값
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state) {
      state.isAuthenticated = true; // 인증 성공 시 상태 업데이트
    },
    logout(state) {
      state.isAuthenticated = false; // 로그아웃 시 상태 초기화
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;