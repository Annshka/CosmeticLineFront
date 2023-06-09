import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import packageReducer from '../features/package/packageSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    packages: packageReducer,
  },
});
