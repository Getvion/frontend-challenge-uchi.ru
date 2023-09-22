import { configureStore } from '@reduxjs/toolkit';

import { catsReducer } from './slice/catsSlice';
import { favoriteReducer } from './slice/favoriteSlice';

export const store = configureStore({
  reducer: {
    favorite: favoriteReducer,
    cats: catsReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
