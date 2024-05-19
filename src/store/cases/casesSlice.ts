import { createSlice } from '@reduxjs/toolkit';
import { Case } from './casesTypes';
import { getCases } from './casesThunks';

interface InitialState {
  cases: Case[];
  isLoading: boolean;
}

const initialState: InitialState = {
  cases: [],
  isLoading: false,
};

const casesSlice = createSlice({
  name: 'cases',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCases.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCases.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cases = action.payload.Data;
      })
      .addCase(getCases.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { actions: casesActions, reducer: casesReducer } = casesSlice;
