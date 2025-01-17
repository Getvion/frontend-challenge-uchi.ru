import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { ICatsState } from '../../@types/state';
import { RootState } from '../store';

const requestData = {
  baseUrl: 'https://api.thecatapi.com/v1/images/search',
  key: 'live_q76O5Lbob7487F5ElZV7kM966pTN7q9tmweCVRGfeuaRYldm50EtLGH2s6HZ4uRv'
};

export const fetchCats = createAsyncThunk('loadCats', async (pageNubmer: number) =>
  fetch(`${requestData.baseUrl}?limit=15&page=${pageNubmer}&api_key=${requestData.key}`).then(
    (resp) => resp.json()
  )
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
        state.results = [...state.results, ...action.payload];
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
