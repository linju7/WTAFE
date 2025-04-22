import { configureStore } from '@reduxjs/toolkit';
import formReducer from './slices/formSlice';
import authReducer from './slices/authSlice'; // authSlice 추가

const store = configureStore({
  reducer: {
    form: formReducer,
    auth: authReducer, // authReducer 추가
  },
});

export default store;