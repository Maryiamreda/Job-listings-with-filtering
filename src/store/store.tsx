import { configureStore } from '@reduxjs/toolkit';
import searchItemReducer from './searchItemSlice';
export const store = configureStore({
    reducer: {
        searchItems: searchItemReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;