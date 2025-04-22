import { configureStore } from '@reduxjs/toolkit';
import formReducer from './slices/formSlice';
import authReducer from './slices/authSlice';

const store = configureStore({
  reducer: {
    form: formReducer,
    auth: authReducer, // 보안 페이지를 위한 인증 슬라이스 추가
  },
});

export default store;