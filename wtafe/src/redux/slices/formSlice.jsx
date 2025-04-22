import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  server: '',
  instance: '',
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
      state.server = '';
      state.instance = '';
    },
  },
});

export const { setServer, setInstance, resetForm } = formSlice.actions;
export default formSlice.reducer;