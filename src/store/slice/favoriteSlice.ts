import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICatObj, ICatsState } from '../../@types/state';
import { RootState } from '../store';

const initialState: ICatsState = {
  results: [],
  isLoaded: true
};

export const counterSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavoriteCat: (state, action: PayloadAction<ICatObj>) => {
      state.results = [...state.results, action.payload];
    },
    removeFavoriteCat: (state, action: PayloadAction<ICatObj>) => {
      const catObj = action.payload;
      state.results = state.results.filter((cat) => cat.id !== catObj.id);
    }
  }
});

export const { addFavoriteCat, removeFavoriteCat } = counterSlice.actions;

export const favoriteReducer = counterSlice.reducer;

// selectors
export const selectFavoriteCats = (state: RootState) => state.favorite;
