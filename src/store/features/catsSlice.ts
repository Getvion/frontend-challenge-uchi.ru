import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { ICatsState } from '../../@types/state';
// eslint-disable-next-line import/no-cycle
import { RootState } from '../store';

export const fetchCats = createAsyncThunk('loadCats', async () =>
  fetch(
    'https://api.thecatapi.com/v1/images/search?limit=15&api_key=live_q76O5Lbob7487F5ElZV7kM966pTN7q9tmweCVRGfeuaRYldm50EtLGH2s6HZ4uRv'
  ).then((resp) => resp.json())
);

const initialState: ICatsState = {
  results: [],
  isLoaded: false
};

const catsSclie = createSlice({
  name: 'cats',
  initialState,
  reducers: {},
  extraReducers: (bulilder) => {
    bulilder
      .addCase(fetchCats.fulfilled, (state, action) => {
        state.results = action.payload;
        state.isLoaded = true;
      })
      .addCase(fetchCats.pending, (state) => {
        state.isLoaded = false;
      })
      .addCase(fetchCats.rejected, (state) => {
        state.isLoaded = false;
      });
  }
});

export const catsReducer = catsSclie.reducer;

// selectors
export const selectCats = (state: RootState) => state.cats;
