import { configureStore } from '@reduxjs/toolkit';
import regionSlice from './slices/regionSlice';

const store = configureStore({
    reducer: {
        regionSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
