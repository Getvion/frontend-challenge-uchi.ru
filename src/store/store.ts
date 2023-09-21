import { configureStore } from '@reduxjs/toolkit';

import { catsReducer } from './features/catsSlice';
import { favoriteReducer } from './features/favoriteSlice';

export const store = configureStore({
  reducer: {
    favorite: favoriteReducer,
    cats: catsReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
