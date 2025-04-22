import { configureStore } from '@reduxjs/toolkit';
import formReducer from './slices/formSlice';

const store = configureStore({
  reducer: {
    form: formReducer, // formSlice를 스토어에 추가
  },
});

export default store;