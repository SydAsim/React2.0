import { configureStore } from '@reduxjs/toolkit';
// import authReducer from './authSlice';
import authSlice from './authSlice';


const store = configureStore({
  reducer: {
    auth: authSlice
    // auth: authReducer,  // ✅ Register the reducer under the `auth` slice
  },
});

export default store;
