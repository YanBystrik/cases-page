import { configureStore } from '@reduxjs/toolkit';
import { casesReducer } from './cases/casesSlice';

export const rootReducer = configureStore({
  reducer: {
    cases: casesReducer,
  },
});

export type RootState = ReturnType<typeof rootReducer.getState>;
export type AppDispatch = typeof rootReducer.dispatch;
