import { configureStore } from "@reduxjs/toolkit";
import authReducer from 'src/features/auth/authSlice';
import modalReducer from 'src/features/modal/modalSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        modal: modalReducer,
    },
})