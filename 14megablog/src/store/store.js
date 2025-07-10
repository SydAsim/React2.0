import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,  // ✅ Register the reducer under the `auth` slice
  },
});

export default store;
